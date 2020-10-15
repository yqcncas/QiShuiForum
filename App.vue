<script>
	// 满哥插件引入
	let dcRichAlert
	let dcRichLogin
	if (uni.getSystemInfoSync().platform == 'android') {
		dcRichLogin = uni.requireNativePlugin('ZWM-BJXMapView');
	} else {
		dcRichAlert = uni.requireNativePlugin('ZWM-BJXJobView');
		dcRichLogin = uni.requireNativePlugin('ZWM-BJXMapView');
	}
	
	export default {
		data () {
			return {
				provider: []
			}
		},
		onLaunch: function(){
			plus.screen.lockOrientation('portrait-primary');
			this.initPosition()
			this.initMyCity()
			
			// 连接极光
			 dcRichLogin.JmessageManagerInit({
				appKey:'67438bad79ab28487215a722'
				},
				result => {
					console.log(result)
				});
				
			// 调用
			if (uni.getSystemInfoSync().platform == 'android') {
				dcRichLogin.addNewMessageReceiver({}, result => {
					console.log(result)
					// this.getMessageList()
					uni.setStorageSync('newMessageFlag', true)
				})
			} else {
				dcRichAlert.addNewMessageReceiver({}, result => {
					console.log(result)
					// this.getMessageList()
					uni.setStorageSync('newMessageFlag', true)
				})
			}
			
			// 调用结束
			
			console.log(uni.getSystemInfoSync().screenHeight)
			let myScreenHeight = uni.getSystemInfoSync().screenHeight
			let firstPageType = ""
			
			this.$fetch(this.$api.get_property_by_type, {type: 5}, "POST", 'FORM').then(res => {
				console.log(res)
				if (myScreenHeight <= res.data.picIn) {
					firstPageType = "picIn"
				} else if (res.data.picIn < myScreenHeight && myScreenHeight <= res.data.picLarge) {
					firstPageType = "picLarge"
				}else if (res.data.picLarge < myScreenHeight && myScreenHeight <= res.data.picMin) {
					firstPageType = "picMin"
				}else if (res.data.picMin < myScreenHeight && myScreenHeight <= res.data.picSmall) {
					firstPageType = "picSmall"
				}else {
					firstPageType = "titlePic"
				}
			})
			
			
			this.$fetch(this.$api.getadvertlist, {type: 0}, 'POST', 'FORM').then((res) => {
				if (res.data[0][firstPageType])  {
					uni.setStorageSync('startImg', res.data[0][firstPageType])
				} else {
					uni.setStorageSync('startImg', res.data[0].titlePic)
				}
				
			})
			
			
			uni.getProvider({
			service: "push",
			success: (e) => {
				console.log("success", e);
				this.provider = e.provider;
				this.openPush()
			},
			fail: (e) => {
				console.log("获取推送通道失败", e);
			}
			});
			// 监听系统通知栏
			// #ifdef APP-PLUS
			plus.push.addEventListener('click',function(msg){
				console.log(msg)
			//处理点击消息的业务逻辑代码  
			let platform =  uni.getSystemInfoSync().platform
			if(platform == 'android'){
				uni.switchTab({
					url:'./pages/index/index'
				})
			}else{
				var payload;
				if (msg.type == "click") { //APP离线点击包含click属性，这时payload是JSON对象  
					payload = msg.payload;  
				} else { //APP在线，收到消息不会包含type属性,这时的payload是JSON字符串，需要转为JSON对象  
					payload = JSON.parse(msg.payload);  
				} 
				if(payload != null || payload != undefined){
					uni.switchTab({
						url:'./pages/index/index'
					})
				}
			}
			},false)
			//监听接收透传消息事件  
			plus.push.addEventListener('receive', function(msg){  
			//处理透传消息的业务逻辑代码 
			 console.log("(receive):" + JSON.stringify(msg)); 
			// plus.nativeUI.confirm(JSON.stringify(msg))
			let platform =  uni.getSystemInfoSync().platform
			//安卓处理
			if(platform == 'android'){
				// plus.nativeUI.confirm('安卓')
				var payload = JSON.parse(msg.payload)
				var messageTitle = payload.title;  
				var messageContent = payload.titleText; 
				plus.push.createMessage(messageContent,msg.payload,{title:messageTitle})
			}else{
				//ios处理
				// plus.nativeUI.confirm('ios')
				var payload = msg.payload;
				if(msg.aps == null && msg.type == "receive"){
					var messageTitle = payload.title;  
					var messageContent = payload.titleText;  
					//创建本地消息,发送的本地消息也会被receive方法接收到，但没有type属性，且aps是null  
					plus.push.createMessage(messageContent, JSON.stringify(payload), {title: messageTitle});
				}
			}
			}, false);
			// #endif
			
			
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			openPush() {
				uni.subscribePush({
					provider: this.provider[0],
					success: (e) => {
						console.log(e);
					}
				})
			},
			initPosition(){
				if(plus.os.name == "Android"){
					var context = plus.android.importClass("android.content.Context");
					var locationManager=plus.android.importClass("android.location.LocationManager");
					var main=plus.android.runtimeMainActivity();
					var mainSvr=main.getSystemService(context.LOCATION_SERVICE);
					var gpsProvider = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);//检查是否开启了GPS
					if(!gpsProvider) {
						var message = "为了获取您的精准位置，请开启GPS设备。";
						var title = "GPS未启用";
						var alertCB = function () {
						var Intent = plus.android.importClass("android.content.Intent");
						var mIntent = new Intent('android.settings.LOCATION_SOURCE_SETTINGS');
						main.startActivity(mIntent);//打开GPS设置
						}
					plus.nativeUI.alert( message, alertCB, title);
					}
				}
			},
			initMyCity () {
				uni.getLocation({
				    type: 'gcj02',
					geocode: true,
				    success: (res) => {
						let city = res.address.district
						if (res.address.district.includes('市')) {
							city = res.address.district.replace('市', '')
						} else if (res.address.district.includes('区')) {
							city = res.address.district.replace('区', '')
						} else if (res.address.district.includes('县')) {
							city = res.address.district.replace('县', '')
						}
						
						// let location = res.longitude + ',' + res.latitude
						console.log(city)
						uni.setStorageSync('city', city)
						uni.setStorageSync('cityName', res.address.district)
						uni.setStorageSync('cityCode', res.address.cityCode)
						
						uni.request({
						   url: 'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location=' + res.longitude + ',' + res.latitude +
						   	'&key=a88aa9fb1f935caab43d092a6c3a2449&radius=1000&extensions=all',
							method: "GET",
						    success: (response) => {
						        console.log(response);
								// this.adcode = response.data.regeocode.addressComponent.adcode
								uni.setStorageSync('adcode', response.data.regeocode.addressComponent.adcode)
						    }
						});
						
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	
	/* #ifndef APP-PLUS-NVUE */
	
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import 'static/iconfont.css';
	@import "uview-ui/index.scss";
	// page::after {
	// 	content: "";
	// 	position: fixed;
	// 	top: 0;
	// 	/*  #ifdef H5 */
	// 	top: 44px;
	// 	/*  #endif  */
	// 	left: 0;
	// 	box-shadow: inset 0 4upx 8upx 0 rgb(244, 244, 244);
	// 	z-index: 9;
	// 	width: 750upx;
	// 	height: 8upx;
	// }
	page{
		width: 100%;
		// height: 100%;
	}
	
	::-webkit-scrollbar {
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    color: transparent;
	    background: transparent;  
	}
	
	swiper .wx-swiper-dot,
	swiper .a-swiper-dot,
	swiper .uni-swiper-dot {
		background: #3C3C3C;
		// opacity: 0.4;
		width: 8rpx;
		height: 8rpx;
		border-radius: 50%;
		// margin: 0 10rpx !important;
		margin-right: 10rpx !important;
	}
	//选中状态
	swiper .wx-swiper-dot.wx-swiper-dot-active,
	swiper .a-swiper-dot.a-swiper-dot-active,
	swiper .uni-swiper-dot.uni-swiper-dot-active {
		background: #FFFFFF;
	}
	
	.tieziSwiper .wx-swiper-dot,
	.tieziSwiper .a-swiper-dot,
	.tieziSwiper .uni-swiper-dot {
		background: #3C3C3C;
	}
	.tieziSwiper .wx-swiper-dot.wx-swiper-dot-active,
	.tieziSwiper .a-swiper-dot.a-swiper-dot-active,
	.tieziSwiper .uni-swiper-dot.uni-swiper-dot-active {
		background: rgb(0, 122, 255)
	}
	
	.line-7{
		width: 100%;
		height: 14rpx;
		background: #F4F4F4;
	}
	.line-3{
		width: 100%;
		height: 6rpx;
		background: #F4F4F4;
	}
	/* #endif */
</style>

