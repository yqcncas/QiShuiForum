<template>
	<view class="HouseProperty">
		<Status></Status>
		<view class="HouseProperty-header">
			<view class="img-box" @click="goBack">
				<image src="../../static/image/ych/back.png" mode="aspectFill"></image>
			</view>
			<view class="HouseProperty-header-center">{{title}}</view>
			<view class="HouseProperty-header-right">
				<image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like"></image>
				<!-- <image src="../../static/image/ych/index/20.png" mode="aspectFill" class="like"></image> -->
				<image src="../../static/image/ych/index/21.png" mode="aspectFill" class="more"></image>
			</view>
		</view>
		<view class="HouseProperty-center">
			<view class="index-banner">
				<view class="index-banner-wrapper">
					<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000" class="index-swiper" circular>
						<swiper-item class="index-swiper-item">
							<view class="swiper-item">
								<image src="http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&f=JPEG?w=1280&h=853" mode=""></image>
							</view>
						</swiper-item>
						<swiper-item class="index-swiper-item">
							<view class="swiper-item">
								<image src="http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
				<view class="find-housePage">
					<view class="HouseProperty-center-zhiding" @click="goToTopArticles">我要置顶</view>
					<view class="line-7"></view>
					<Stick></Stick>
					<view class="line-3"></view>
					<NavButton :navleft="'最新发布'" :navright="'精华帖'" :navIndex = "navIndex" @handleNavIndex = "handleNavIndex"></NavButton>
					<view class="line-3"></view>
				</view>
			<ArticleMain @ArticleMainClick = "ArticleMainClick"></ArticleMain>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {

		},
		data () {
			return {
				navIndex: 0,
				title: '找租房'
			}
		},
		methods: {
			// 回退
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			// 底部导航切换
			handleNavIndex (index) {
				this.navIndex = index
			},
			// 文章跳转
			ArticleMainClick (index) {
			 	console.log(index)
			 	uni.navigateTo({
			 		url: '../index/ArticleDetail'
			 	})
			},
			goToTopArticles () {
				uni.navigateTo({
					url: '../TopArticles/TopArticles'
				})
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
				transform: translateX(40rpx);
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
