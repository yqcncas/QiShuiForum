<template>
	<view class="HouseProperty">
		<Status></Status>
		<mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption">
		<view class="HouseProperty-header">
			<view class="img-box" @click="goBack">
				<image src="../../static/image/ych/back.png" mode="aspectFill"></image>
			</view>
			<view class="HouseProperty-header-center">{{title}}</view>
			<view class="HouseProperty-header-right">
				<!-- <image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like"></image> -->
				<!-- <image src="../../static/image/ych/index/20.png" mode="aspectFill" class="like"></image> -->
				<image src="../../static/image/ych/index/21.png" mode="aspectFill" class="more" @click.stop="shareFn"></image>
			</view>
		</view>
		<view class="HouseProperty-center">
			<view class="index-banner" v-if="bannerList.length">
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
					<view class="HouseProperty-center-zhiding" @click="goToTopArticles">我要置顶</view>
					<view class="line-7"></view>
					<Stick :StickList = "topArtList" @handleStick = "handleStick"></Stick>
					<view class="line-3"></view>
					<NavButton :navleft="'找房'" :navright="'租房'" :navIndex = "navIndex" @handleNavIndex = "handleNavIndex"></NavButton>
					<view class="line-3"></view>
				</view>
			<ArticleMain @ArticleMainClick = "ArticleMainClick" :ArticleList = "artList"></ArticleMain>
		</view>
		</mescroll-body>
		<u-action-sheet :list="sharelist" v-model="shareShow" @click="shareItemClick"></u-action-sheet>
	
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		onLoad(options) {
			this.initBanner()
			this.initTopArt()
			this.initArtList()
			 if (uni.getStorageSync('adcode')) {				this.adcode = uni.getStorageSync('adcode')			}
		},
		data () {
			return {
				adcode: '',
				navIndex: 0,
				title: '找租房',
				sharelist: [{
					text: '分享给微信好友',
					fontSize: 28
				}, {
					text: '分享到微信朋友圈',
					fontSize: 28
				}],
				shareShow: false,
				bannerList: [],
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				artList: [],
				topArtList: [],
				upOption: {
					use: false
				},
				labelId: 5
			}
		},
		methods: {
			
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
			
			// 回退
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			
			async initTopArt() {
				let res = await this.$fetch(this.$api.top_list, {type: this.type}, "POST", 'FORM')
				this.topArtList = res.data
			},
			
			async initBanner () {
				let res = await this.$fetch(this.$api.getrotationchart, {adcode: this.adcode, plateTypeId: 11}, 'POST', 'FORM')
				console.log(res)
				this.bannerList = res.data
			},
			
			async initArtList () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.artivle_list, {isCreamFlag: this.isCreamFlag, twoPlateType: this.labelId, type: 11, pageNum: this.pageNum, pageSize: this.pageSize}, 'POST', 'FORM')
				console.log(res)
				res.rows.forEach((item, index) => {
					item.content = JSON.parse(item.content)
					item.pics = JSON.parse(item.pics)
					item.isGg = false
				})
				this.artList = [...this.artList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
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
			},
			// 底部导航切换
			handleNavIndex (index) {
				this.navIndex = index
				this.pageNum = 0
				this.hasFlag = true
				this.artList = []
				if (index == 0) {
					this.isCreamFlag = 0
					this.labelId = 5
				} else {
					this.isCreamFlag = 1
					this.labelId = 6
				}
				this.initArtList()
			},
			// 文章跳转
			ArticleMainClick (id, userId, item) {
			 	uni.navigateTo({
			 		url: '../index/ArticleDetail?id='+ id + '&userId=' + userId
			 	})
			},
			goToTopArticles () {
				uni.navigateTo({
					url: '../TopArticles/TopArticles'
				})
			},
			handleStick (id, userId) {
				uni.navigateTo({
					url: '../index/ArticleDetail?id='+ id + '&userId=' + userId
				})
			},
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
			box-sizing: border-box;
			position: fixed;
			top:var(--status-bar-height);
			z-index: 999;
			.img-box{
				position: relative;
				&::after{
					content:  '';
					left: -20rpx;
					top: -20rpx;
					bottom: -20rpx;
					right: -20rpx;
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
				transform: translate(14rpx, 4rpx);
				// padding-right: 22.9%;
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
					height: 336rpx;
					.index-swiper{
						width: 100%;
						height: 336rpx;
						.index-swiper-item{
							width: 100%;
							height: 336rpx;
							.swiper-item{
								width: 100%;
								height: 336rpx;
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
		}
	}
</style>
