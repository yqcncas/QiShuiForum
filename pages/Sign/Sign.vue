<template>
	<view class="sign">
		<view class="sign-header">
			<image :src="signTitle.titlePic ? signTitle.titlePic : '../../static/qslogo.png'" mode="aspectFill" class="banner" @click = "goToRichPage"></image>
			<image src="../../static/image/ych/my/25.png" mode="aspectFill" class="share" @click.stop = "handleShareFlag"></image>
		</view>
		<view class="sign-main">
			<view class="sign-main-title">连续签到：{{signNum}}天</view>
			<view class="sign-img-box">
				<view class="sign-img-box-item" v-for="(item, index) in 7" :key = "index">
					<view class="sign-img-box-item-top" :class="{'active' : index < signNum}" :style="{backgroundImage: index < signNum ? `url(../../static/image/ych/my/26.png)` : `url(../../static/image/ych/my/27.png)`}">{{signValue[index+1]}}</view>
					<view class="sign-img-box-item-bottom " :class="{'active' : index < signNum}">{{index + 1}}天</view>
				</view>
			</view>
			<view class="sign-button" @click="signFn">签到</view>
		</view>
		<!-- <shareBox :showShareBoxFlag = "showShareBoxFlag" @changeShowBoxFLag = "changeShowBoxFLag" @shareWx = "shareWx"  @shareFre = "shareFre"></shareBox> -->
			<u-popup v-model="showShareBoxFlag" mode="center">
				 <wm-poster :imgSrc="canvasPic" :QrSrc="qrCode" :Title="title" @success = "canvasSuccess"></wm-poster>
				<view class="share-box" v-if="weixinCanvas">
					
					<image src="../../static/image/ych/share/1.png" mode="aspectFill" @click="shareCanvasWx"></image>
					<image src="../../static/image/ych/share/2.png" mode="aspectFill" @click="shareCanvasFriend"></image>
				</view>
			</u-popup>
		
	</view>
</template>

<script>
	import baseURL from '../../config/index.js'
	import wmPoster from "@/components/wm-poster/wm-poster.vue"
	export default {
		onLoad() {
			if (uni.getStorageSync('adcode')) {				this.adcode = uni.getStorageSync('adcode')			}
			this.getQrcode()
			this.initFindHeaderImg()
			this.initBytype()
			this.initYesterdaySign()
		},
		components: {
			wmPoster
		},
		data () {
			return {
				adcode: '',
				showShareBoxFlag: false,
				signValue: {},
				yesterday: {},
				today: {},
				signNum: 0,
				signTitle: {},
				weixinCanvas: '',
				qrCode: '',
				canvasPic: '',
				title: ''
			}
		},
		methods: {
			async getQrcode(){
				let res = await this.$fetch(this.$api.get_user_qrcode, {adcode: this.adcode}, "GET", 'FORM')
				this.qrCode = baseURL + res.data.path
				this.canvasPic = res.data.pic ? res.data.pic : '../../static/qslogo.png'
				this.title = res.data.title ? res.data.title : '汽水网'
			},
			goToRichPage () {
				uni.navigateTo({
					url: '../RichText/RichText?RichMain=' + this.signTitle.content + "&title=" + this.signTitle.title
				})
			},
			canvasSuccess (res) {
				this.weixinCanvas = res.tempFilePath
				console.log(this.weixinCanvas)
			},
			shareCanvasWx () {
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 2,
				    imageUrl: this.weixinCanvas,
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			shareCanvasFriend () {
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 2,
				    imageUrl: this.weixinCanvas,
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 昨日是否签到
			async initYesterdaySign () {
				let res = await this.$fetch(this.$api.yesterday_is_sign, {}, "POST", 'FORM')
				console.log(res)
				this.yesterday = res.data.yesterday
				this.today = res.data.today
				if (this.yesterday != null && this.today == null) {
					this.signNum = this.yesterday.signNum
				} else if (this.today != null) {
					this.signNum = this.today.signNum
				}
			},
			// 获取倍数
			async initBytype () {
				let res = await this.$fetch(this.$api.get_property_by_type, {type: 3}, "POST", 'FORM')
				console.log(res)
				this.signValue = res.data
			},
			// 签到
			async signFn () {

				let res = await this.$fetch(this.$api.sign, {}, "POST", 'FORM')

				if (res.code == 0) {
					uni.showToast({
						icon: 'none',
						title: res.msg + '获得' + this.signValue[this.signNum + 1] + '积分'
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
				
				this.initYesterdaySign()
			
			},
			async initFindHeaderImg () {
				let res = await this.$fetch(this.$api.getadvertlist, {adcode: this.adcode,type: 3}, "POST", 'FORM')
				console.log(res)
				if (!res.data.length) {
					this.signTitle.titlePic = ''
				} else {
					this.signTitle = res.data[0]
				}
			},
			
			// 分享
			handleShareFlag () {
				this.showShareBoxFlag = true
			},
			//更改分享显示
			changeShowBoxFLag (newV) {
				this.showShareBoxFlag = newV
			},
			// 微信分享
			shareWx () {
				
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://h5-download.qswvip.com/#/?code=" + uni.getStorageSync('userId'),
				    title: "汽水论坛分享",
				    summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
				    imageUrl: '../../static/qslogo.png',
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
			shareFre () {
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
				    href: "http://h5-download.qswvip.com/#/?code=" + uni.getStorageSync('userId'),
				    title: "汽水论坛分享",
				    summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
				    imageUrl: '../../static/qslogo.png',
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
		}
	}
</script>

<style lang="less">
	.sign{
		.sign-header{
			width: 100%;
			height: 366rpx;
			position: relative;
			padding-bottom: 28rpx;
			.banner{
				width: 100%;
				height: 100%;
			}
			.share{
				position: absolute;
				width: 42rpx;
				height: 42rpx;
				right: 20rpx;
				top: 16rpx;
			}
		}
		.sign-main{
			margin-top: 28rpx;
			padding: 12rpx;
			background: #FFFFFF;
			box-shadow: 0 2px 5px 2px rgba(192,192,192,0.50);
			border-radius: 4px;
			box-sizing: border-box;
			overflow: hidden;
			.sign-main-title{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: 0.01px;
			}
			.sign-img-box{
				padding-top: 18rpx;
				padding-bottom: 36rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.sign-img-box-item{
					width: 118rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					// justify-content: center;
					.sign-img-box-item-top{
						width: 74rpx;
						height: 74rpx;
						line-height: 74rpx;
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #B9B9B9;
						letter-spacing: 0.01px;
						text-align: center;
						
			
						background-repeat: no-repeat;
						background-size: 100% 100%;
						&.active{
							color: #FFECDA;
							background-image: url(../../static/image/ych/my/26.png);
						}
					}
					.sign-img-box-item-bottom{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #A3A3A3;
						letter-spacing: 0.01px;
						// text-align: center;
						&.active{
							color: #FDB72A;
						}
					}
				}
			}
			.sign-button{
				background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
				border-radius: 46rpx;
				width: 604rpx;
				height: 92rpx;
				line-height: 92rpx;
				margin: 0 auto;
				text-align: center;
				font-family: PingFangSC-Medium;
				font-size: 21px;
				color: #FFFFFF;
				letter-spacing: 1.19px;
			}
		}
		.share-box{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			position: relative;
			bottom: 60rpx;
			image{
				width: 90rpx;
				height: 90rpx;
				margin-right: 30rpx;
			}
		}
	}
</style>
