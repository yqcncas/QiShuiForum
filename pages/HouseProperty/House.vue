<template>
	<view class="HouseProperty">
		<Status></Status>
		<mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption">
		<view class="HouseProperty-header">
			<view class="img-box" @click="goBack">
				<image src="../../static/image/ych/back.png" mode=""></image>
			</view>
			<view class="HouseProperty-header-center">{{title}}</view>
			<view class="HouseProperty-header-right">
				<!-- <image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like"></image> -->
				<!-- <image src="../../static/image/ych/index/20.png" mode="aspectFill" class="like"></image> -->
				<image src="../../static/image/ych/index/21.png" mode="aspectFill" class="more" @click.stop="shareFn"></image>
			</view>
		</view>
		<view class="HouseProperty-center">
			<view class="index-banner"  v-if="bannerList.length">
				<view class="index-banner-wrapper">
					<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000" class="index-swiper" circular>
						<swiper-item class="index-swiper-item" v-for="(item, index) in bannerList" :key = "index">
							<view class="swiper-item">
								<image :src="item.picPath" mode="aspectFill"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
				<view class="find-housePage">
					<!-- 房产 -->
					<view class="fangchan-banner" v-if="type == 1">
						<image src="../../static/image/ych/index/fangchan1.png" mode="aspectFill" @click="goToHotHouse"></image>
						<image src="../../static/image/ych/index/fangchan2.png" mode="aspectFill" @click= "goToHouseConsult(0)"></image>
						<image src="../../static/image/ych/index/fangchan3.png" mode="aspectFill" @click="goToHouseProperty"></image>
					</view>
					<!-- 汽车 -->
					<view class="car-banner" v-if="type == 2">
						<image src="../../static/image/ych/index/car2.png" mode="aspectFill" @click = "goToHotCar"></image>
						<image src="../../static/image/ych/index/car1.png" mode="aspectFill" @click = "goToHouseConsult(1)"></image>
					</view>
					<view class="car-banner" v-if="type == 12">
						<image src="../../static/image/ych/index/jiazhuang1.png" mode="aspectFill" @click = "goToHotJiaZhuang"></image>
						<image src="../../static/image/ych/index/jiazhuang2.png" mode="aspectFill" @click = "goToHouseConsult(12)"></image>
					</view>
					
					<view class="line-3"></view>
					<view class="HouseProperty-center-zhiding"  @click="gotoTopArt">我要置顶</view>
					<view class="line-3" ></view>
					<!-- <Stick v-if="type != 1 " :StickList = "topArtList" @handleStick = "handleStick"></Stick> -->
					<Stick  :StickList = "topArtList" @handleStick = "handleStick"></Stick>
					<view class="line-3" ></view>
					<NavButton :navleft="navLeft" :navright="navRight" :navIndex = "navIndex" @handleNavIndex = "handleNavIndex" ></NavButton>
					<view class="line-3" ></view>
				</view>
				<ArticleMain @ArticleMainClick = "ArticleMainClick" :ArticleList = "artList"></ArticleMain>
		</view>
		<Fab @trigger = "trigger" ></Fab>
		<u-action-sheet :list="sharelist" v-model="shareShow" @click="shareItemClick"></u-action-sheet>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		onLoad(options) {
			
			this.type = options.type
			this.title = options.title
			if (uni.getStorageSync('userId')) {
				this.userId = uni.getStorageSync('userId')
			}
			if (uni.getStorageSync('adcode')) {
				this.adcode = uni.getStorageSync('adcode')
			}
			console.log(this.type)
			if (this.type == 4 ) {
				this.navLeft = "出售"
				this.navRight = "购买"
				this.labelId = 3
				
			} else if (this.type == 3) {
				this.navLeft = "招聘"
				this.navRight = "求职"
				this.labelId = 1
			}
		
			if (this.type == 'gc' ) {
				this.type  = ''
				this.title = '广场'
			} else {
				this.initTopArt()
			}
			this.initBanner()
			this.initArtList()
		},
		data () {
			return {
				userId: '',
				navIndex: 0,
				title: '房产',
				navLeft: '最新发布',
				navRight: '精华贴',
				type: 0, // 0房产 1汽车 2二手闲置 3找工作 4商品 5广场 6亲子 7美食
				bannerList: [],
				isCreamFlag: 0,
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				artList: [],
				topArtList: [],
				upOption: {
					use: false
				},
				sharelist: [{
					text: '分享给微信好友',
					fontSize: 28
				}, {
					text: '分享到微信朋友圈',
					fontSize: 28
				}],
				shareShow: false,
				labelId: '',
				adcode: ''
			}
		},
		methods: {
			// 去发布
			trigger(index) {
				if (index == 0) {
					uni.navigateTo({
						url: '../index/Publish?type=' + 0
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: '../index/Publish?type=' + 1
					})
				} else {
					uni.navigateTo({
						url: '../index/Publish?type=' + 2
					})
				}
			},
			downCallback () {
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.artList = [],
				this.topArtList = [],
				this.initTopArt()
				this.initArtList()
				this.mescroll.endDownScroll()
			},
			gotoTopArt () {
				uni.navigateTo({
					url: '../TopArticles/TopArticles?typeId=' + this.type
				})
			},
			async initBanner () {
				if (this.type != 'gc') {
					let res = await this.$fetch(this.$api.getrotationchart, {adcode: this.adcode, plateTypeId: this.type}, 'POST', 'FORM')
					console.log(res)
					this.bannerList = res.data
				}
			},
			async initArtList () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res
				if (this.type != 'gc') {
					if (this.type == 3 || this.type == 4) {
						this.isCreamFlag = ''
						console.log('111')
					}
					res = await this.$fetch(this.$api.artivle_list, {adcode:this.adcode, isCreamFlag: this.isCreamFlag, twoPlateType: this.labelId,type: this.type, pageNum: this.pageNum, pageSize: this.pageSize, userId: this.userId}, 'POST', 'FORM')
				} else {
					
					res = await this.$fetch(this.$api.artivle_list, {adcode:this.adcode, isCreamFlag: this.isCreamFlag, pageNum: this.pageNum, pageSize: this.pageSize, userId: this.userId}, 'POST', 'FORM')
				}
				console.log(res)
				
				res.rows.forEach((item, index) => {
					item.content = JSON.parse(item.content)
					item.pics = JSON.parse(item.pics)
					item.isGg = false
				})
				this.artList = [...this.artList, ...res.rows]
				
				let obj = {};
	
				this.artList = this.artList.reduce((cur,next) => {
				    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
				    return cur;
				},[]) 
				
				
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			// 去热卖车款
			goToHotCar () {
				uni.navigateTo({
					url: '../HotHouse/HotCar'
				})
			},
			goToHotJiaZhuang () {
				uni.navigateTo({
					url: '../HotHouse/HotJiaZhuang'
				})
			},
			// 底部导航切换
			handleNavIndex (index) {
				this.navIndex = index
				this.pageNum = 0
				this.hasFlag = true
				this.artList = []
				if (index == 0) {
					this.isCreamFlag = 0
					if (this.type == 4 ) {
						this.labelId = 3
					}else if (this.type == 3) {
						this.labelId = 1
					}
				} else {
					this.isCreamFlag = 1
					if (this.type == 4 ) {
						this.labelId = 4
					}else if (this.type == 3) {
						this.labelId = 2
					}
				}
				
				this.initArtList()
			},
			ArticleMainClick (id, userId, item) {
			 	uni.navigateTo({
			 		url: '../index/ArticleDetail?id='+ id + '&userId=' + userId
			 	})
			},
			// 热点楼盘
			goToHotHouse() {
				uni.navigateTo({
					url: '../HotHouse/HotHouse'
				})
			},
			// 找租房
			goToHouseProperty () {
				uni.navigateTo({
					url: './HouseProperty'
				})
			},
			// 咨询
			goToHouseConsult (index) {
				uni.navigateTo({
					url: '../HouseProperty/HouseConsult?type=' + index
				})
			},
			async initTopArt() {
				let res = await this.$fetch(this.$api.top_list, {type: this.type, adcode:this.adcode}, "POST", 'FORM')
				this.topArtList = res.data
			},
			// 置顶文章跳转
			handleStick (id, userId) {
				uni.navigateTo({
					url: '../index/ArticleDetail?id='+ id + '&userId=' + userId
				})
			},
			shareFn () {
				this.shareShow = true
			},
			shareItemClick (index) {
				if (index == 0) {
					uni.share({
					    provider: "weixin",
					    scene: "WXSceneSession",
					    type: 0,
					    href: "https://www.baidu.com/",
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
					this.shareShow = false
				} else if (index == 1) {
					uni.share({
					    provider: "weixin",
					    scene: "WXSenceTimeline",
					    type: 0,
						href: "https://www.baidu.com/",
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
					this.shareShow = false
				}
			}
		}
	}
</script>

<style lang="less">
	.HouseProperty{
		.HouseProperty-header{
			width: 100%;
			height: 50rpx;
			line-height: 50rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			// padding-top: var(--status-bar-height);
			padding-left: 40rpx;
			padding-right: 34rpx;
			padding-top: 15rpx;
			box-sizing: border-box;
			position: fixed;
			top:var(--status-bar-height);
			z-index: 999;
			.img-box{
				position: relative;
				transform: translateY(4rpx);
				&::after{
					position: absolute;
					left: -30rpx;
					right: -30rpx;
					top: -30rpx;
					bottom: -30rpx;
				}
				image{
					width: 18rpx;
					height: 34rpx;
					// vertical-align: bottom;
					transform: translateY(6rpx);
				}
			}
			.HouseProperty-header-center{
				// padding-left: 35.2%	;
				// transform: translateX(8rpx);
				// padding-right: 22.9%;
				transform: translate(14rpx, 4rpx);
				box-sizing: border-box;
				font-family: PingFangSC-Medium;
				font-size: 18px;
				color: #242424;
				letter-spacing: 0.07px;
			}
			.HouseProperty-header-right{
				display: flex;
				align-items: center;
				.like{
					width: 44rpx;
					height: 44rpx;
					margin-right: 20rpx;
					box-sizing: border-box;
				}
				.more{
					width: 44rpx;
					height: 8rpx;
					transform: translateY(4rpx);
				}
			}
		}
		.HouseProperty-center{
			padding-top: calc(80rpx + var(--status-bar-height));
			.index-banner{
				// padding-top: 236rpx;
				box-sizing: border-box;
				.index-banner-wrapper{
					width: 100%;
					// height: 336rpx;
					height: 252rpx;
					.index-swiper{
						width: 100%;
						// height: 336rpx;
						height: 252rpx;
						.index-swiper-item{
							width: 100%;
							// height: 336rpx;
							height: 252rpx;
							.swiper-item{
								width: 100%;
								// height: 336rpx;
								height: 252rpx;
								image{
									width: 100%;
									height: 100%;
								}
							}
						}
						
					}
					
				}
			}
			.HouseProperty-center-zhiding{
				width: 100%;
				height: 128rpx;
				text-align: center;
				line-height: 128rpx;
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #FF7B30;
				letter-spacing: 0.91px;
				font-weight: bold;
			}
			.fangchan-banner{
				width: 100%;
				height: 152rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				image{
					width: 220rpx;
					height: 106rpx;
				}
			}
			.car-banner{
				width: 100%;
				height: 152rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				box-sizing: border-box;
				image{
					width: 332rpx;
					height: 106rpx;
					&:nth-child(2){
						// margin-left: 22rpx;
					}
				}
			}
		}
	}
</style>
<style>
	.uni-fab__circle{
		transform: scale(0.6);
	}
	.uni-fab{
		transform: scale(0.9);
	}
</style>
