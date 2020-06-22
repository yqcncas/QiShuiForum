<template>
	<view class="HouseProperty">
		<Status></Status>
		<view class="HouseProperty-header">
			<view class="img-box" @click="goBack">
				<image src="../../static/image/ych/back.png" mode=""></image>
			</view>
			<view class="HouseProperty-header-center">{{title}}</view>
			<view class="HouseProperty-header-right">
				<image src="../../static/image/ych/index/19.png" mode="aspectFill" class="like"></image>
				<!-- <image src="../../static/image/ych/index/20.png" mode="aspectFill" class="like"></image> -->
				<image src="../../static/image/ych/index/21.png" mode="aspectFill" class="more"></image>
			</view>
		</view>
		<view class="HouseProperty-center">
			<view class="index-banner" v-if="type != 5">
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
					<!-- 房产 -->
					<view class="fangchan-banner" v-if="type == 0">
						<image src="../../static/image/ych/index/fangchan1.png" mode="aspectFill" @click="goToHotHouse"></image>
						<image src="../../static/image/ych/index/fangchan2.png" mode="aspectFill" @click= "goToHouseConsult(0)"></image>
						<image src="../../static/image/ych/index/fangchan3.png" mode="aspectFill" @click="goToHouseProperty"></image>
					</view>
					<!-- 汽车 -->
					<view class="car-banner" v-if="type == 1">
						<image src="../../static/image/ych/index/car2.png" mode="aspectFill" @click = "goToHotCar"></image>
						<image src="../../static/image/ych/index/car1.png" mode="aspectFill" @click = "goToHouseConsult(1)"></image>
					</view>
					
					<view class="line-3" v-if="type != 5"></view>
					<view class="HouseProperty-center-zhiding" v-if="type != 1 && type != 5">我要置顶</view>
					<view class="line-7" v-if="type != 1 && type != 5"></view>
					<Stick v-if="type != 1 && type != 5"></Stick>
					<view class="line-3" v-if="type != 5"></view>
					<NavButton :navleft="navLeft" :navright="navRight" :navIndex = "navIndex" @handleNavIndex = "handleNavIndex" v-if="type != 5"></NavButton>
					<view class="line-3" v-if="type != 5"></view>
				</view>
			<ArticleMain @ArticleMainClick = "ArticleMainClick"></ArticleMain>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
			if (this.type == 1) {
				this.title = '汽车'
			} else if (this.type == 2 ) {
				this.title = '二手闲置'
				this.navLeft = "出售"
				this.navRight = "购买"
			} else if (this.type == 3 ) {
				this.title = '找工作'
				this.navLeft = "招聘"
				this.navRight = "求职"
			} else if (this.type == 4 ) {
				this.title = '商品'
			} else if (this.type == 5 ) {
				this.title = '广场'
			} else if (this.type == 6 ) {
				this.title = '亲子'
			} else if (this.type == 7 ) {
				this.title = '美食'
			}
		},
		data () {
			return {
				navIndex: 0,
				title: '房产',
				navLeft: '最新发布',
				navRight: '精华贴',
				type: 0, // 0房产 1汽车 2二手闲置 3找工作 4商品 5广场 6亲子 7美食
			}
		},
		methods: {
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
			// 底部导航切换
			handleNavIndex (index) {
				this.navIndex = index
			},
			ArticleMainClick (index) {
			 	console.log(index)
			 	uni.navigateTo({
			 		url: '../index/ArticleDetail'
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
					position: absolute;
					left: -20rpx;
					right: -20rpx;
					top: -20rpx;
					bottom: -20rpx;
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
