<template>
	<view class="index">
		<Status></Status>
		<!-- 头 -->
		<view class="index-header">
			<view class="index-header-top">
				<view class="index-header-top-left" @click="handleCity">温州市</view>
				<view class="index-header-top-center">
					<view class="index-header-top-center-search">
						<image src="../../static/logo.png" mode=""></image>
					</view>
				</view>
				<view class="index-header-top-rihgt">
					<image src="../../static/logo.png" mode=""></image>
				</view>
			</view>
			<view class="index-header-bottom">
				<scroll-view scroll-x="true" >
					<view class="index-header-bottom-ul">
						<view class="index-header-bottom-li" :class="{navActive: navIndex == index}" v-for="(item, index) in headerNav" :key = "index">{{item}}</view>
					</view>
				</scroll-view>
				<view class="addli">
					<image src="../../static/logo.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 轮播 -->
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
		
		<!-- 中部导航 -->
		<view class="index-main-nav">
			<view class="index-main-nav-top">
				<view class="index-main-nav-top-item" v-for="(item, index) in indexMainNavTop" :key = "index">
					<image src="../../static/logo.png" mode=""></image>
					<view class="index-main-nav-top-item-text">{{item}}</view>
				</view>
			</view>
			<view class="index-main-nav-bottom">
				<view class="index-main-nav-top-item" v-for="(item, index) in indexMainNavTop" :key = "index">
					<image src="../../static/logo.png" mode=""></image>
					<view class="index-main-nav-top-item-text">{{item}}</view>
				</view>
			</view>
		</view>
		<!-- 灰线 -->
		<view class="line-7"></view>
		<!-- 在讨论 -->
		<view class="index-talk">
			<view class="index-talk-top">
				<image src="../../static/logo.png" mode=""></image>
				<text>大家都在讨论</text>
			</view>
			<view class="index-talk-bottom">
				<text class="index-talk-bottom-item" v-for="(item, index) in talkArr" :key = "index">#{{item}}#</text>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="index-weather">
			<image src="../../static/logo.png" mode=""></image>
			<view class="index-weather-main">温州乐清 多云 20～25度 舒适 适合穿着短袖衬衫长裤</view>
		</view>
		<view class="line-3"></view>
		
		 <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
	import simpleAddress from '@/components/simple-address/simple-address.vue';
	export default {
		onLoad() {
			
		},
		data() {
			return {
				// 选择城市
				cityPickerValueDefault: [0, 0, 1],
				pickerText: '',
				// 头部导航
				headerNav: ['推荐', '找工作', '房产','推荐', '找工作', '房产','推荐', '找工作', '房产','推荐', '找工作', '房产','推荐', '找工作', '房产'],
				navIndex: 0, // 导航index
				indexMainNavTop: ['房产','房产','房产','房产'], // 中部导航顶部
				indexMainNavBottom: ['房产','房产','房产','房产'], // 中部导航底部
				talkArr: ['推荐', '找工作', '房产']
			}
		},
		components: {
		        simpleAddress
		},
		methods: {
			// 选择城市
			handleCity () {
				this.$refs.simpleAddress.open();
			},
			// 选择城市点击确定
			onConfirm(e) {
				this.pickerText = JSON.stringify(e);
				console.log(this.pickerText)
			}
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	.index{
		.index-header{
			width: 100%;
			padding-top: var(--status-bar-height);
			position: fixed;
			z-index: 999;
			background-color: #fff;
			.index-header-top{
				width: 100%;
				height: 120rpx;
				display: flex;
				align-items: center;
				padding-left: 32rpx;
				padding-right: 48rpx;
				box-sizing: border-box;
				.index-header-top-left{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					font-weight: bold;
					padding-right: 28rpx;
					box-sizing: border-box;
				}
				.index-header-top-center{
					flex: 1;
					.index-header-top-center-search{
						width: 100%;
						height: 58rpx;
						background: #EFEFEF;
						border-radius: 14.5px;
						display: flex;
						align-items: center;
						padding-left: 18rpx;
						box-sizing: border-box;
						image{
							width: 34rpx;
							height: 34rpx;
							margin-left: 18rpx;
							
						}
					}
				}
				.index-header-top-rihgt{
					display: flex;
					align-items: center;
					padding-left: 20rpx;
					box-sizing: border-box;
					image{
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
			.index-header-bottom{
				width: 100%;
				height: 44rpx;
				position: relative;
				.index-header-bottom-ul{
					width: 100%;
					height: 100%;
					white-space: nowrap;
					display: inline-block;
					// position: relative;
					.index-header-bottom-li{
						width: 128rpx;
						height: 100%;
						display: inline-block;
						font-family: PingFangSC-Regular;
						font-size: 16px;
						color: #141414;
						letter-spacing: -0.39px;
						position: relative;
						text-align: center;
					
						&::after{
							content: '';
							width: 0;
							height: 0;
							border-bottom: 6rpx solid #FF682D;
							position: absolute;
							bottom: 0;
							left: 50%;
							transform: translateX(-50%);
							transition: all .3s; 
						}
						&.navActive{
							font-size: 16px;
							color: #FF682D;
							&::after{
								width: 50%;
							}
						}
					}
					
				}
				.addli{
					width: 64rpx;
					height: 44rpx;
					position: absolute;
					right: 0;
					transform: translateY(-100%);
					text-align: center;
					background: #FFFFFF;
					box-shadow: -2px 0 2px -1px rgba(167,167,167,0.50);
					image{
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
		}
		.index-banner{
			padding-top: 236rpx;
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
		.index-main-nav{
			padding: 22rpx 64rpx 22rpx 58rpx;
			box-sizing: border-box;
			.index-main-nav-top, .index-main-nav-bottom{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.index-main-nav-top-item{
					display: flex;
					flex-direction: column;
					align-items: center;
					image{
						width: 92rpx;
						height: 92rpx;
					}
					.index-main-nav-top-item-text{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #545454;
						letter-spacing: -0.29px;
					}
				}
			}
			.index-main-nav-bottom{
				padding-top: 38rpx;
				box-sizing: border-box;
			}
		}
		
		.index-talk{
			width: 100%;
			padding: 22rpx 38rpx;
			box-sizing: border-box;
			.index-talk-top{
				display: flex;
				align-items: center;
				padding-bottom: 30rpx;
				box-sizing: border-box;
				image{
					width: 28rpx;
					height: 28rpx;
				}
				text{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					font-weight: bold;
					padding-left: 14rpx;
					box-sizing: border-box;
				}
			}
			.index-talk-bottom{
				.index-talk-bottom-item{
					display: inline-block;
					// width: 33%;
					// text-align: center;
					margin-right: 180rpx;
					&:last-child{
						margin-right: 0;
					}
				}
			}
		}
		.index-weather{
			width: 100%;
			height: 72rpx;
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			padding: 0 38rpx;
			box-sizing: border-box;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			image{
				width: 48rpx;
				height: 32rpx;
			}
			.index-weather-main{
				flex: 1;
				padding-left: 20rpx;
				box-sizing: border-box;
				font-family: PingFangSC-Regular;
				font-size: 12px;
				color: #141414;
				letter-spacing: -0.29px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
