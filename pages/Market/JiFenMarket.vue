<template>
	<view class="jifen-market">
		<view class="myCollect-header">
			<view class="myCollect-header-item" :class="{active: tabIndex == 0}" @click="handleTabIndex(0)">积分兑换</view>
			<view class="myCollect-header-item" :class="{active: tabIndex == 1}" @click="handleTabIndex(1)">限时抢购</view>
		</view>
		<view class="line-3"></view>
		
		<view class="myCollect-wrppaer">
			
			<swiper style="height: calc(100vh - 84rpx);" @change="swiperChange" :current="tabIndex">
				<swiper-item>
					<scroll-view scroll-y="true" style="height: calc(100vh - 98rpx);" @scrolltolower = "lower">
						<view class="market-list-main">
							<view class="market-list-item" v-for="(item, index) in 5" :key = "index" @click="goToShopDetail(0)">
								<image src="../../static/logo.png" mode="aspectFill"></image>
								<view class="market-list-item-bottom">
									<view class="market-list-item-bottom-top">正品iPhone Xs Max</view>
									<view class="market-list-item-bottom-footer">
										<view class="market-list-item-bottom-footer-left">
											<view class="market-list-item-bottom-footer-left-top">3000元 + 200积分</view>
											<view class="market-list-item-bottom-footer-left-bottom">5000元</view>
										</view>
										<view class="market-list-item-bottom-footer-right">兑换</view>
									</view>
								</view>
							</view>
						</view>
						<uniLoadMore bgColor="#fff" :status="hasFlag ? 'loading' : 'noMore'" ></uniLoadMore>
					</scroll-view>
				
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="true" style="height: calc(100vh - 98rpx);" @scrolltolower = "lower">
						<view class="market-list-main">
							<view class="market-list-item" v-for="(item, index) in 5" :key = "index" @click="goToShopDetail(1)">
								<image src="../../static/logo.png" mode="aspectFill"></image>
								<view class="market-list-item-bottom">
									<view class="market-list-item-bottom-top">正品iPhone Xs Max</view>
									<view class="market-list-item-bottom-footer">
										<view class="market-list-item-bottom-footer-left">
											<view class="market-list-item-bottom-footer-left-top">3000元 + 200积分</view>
											<view class="market-list-item-bottom-footer-left-bottom">5000元</view>
										</view>
										<view class="market-list-item-bottom-footer-right">抢购</view>
									</view>
								</view>
							</view>
						</view>
						
						<uniLoadMore bgColor="#fff" :status="hasFlag ? 'loading' : 'noMore'" ></uniLoadMore>
					</scroll-view>
				</swiper-item>
			</swiper>
			
		
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				tabIndex: 0,
				hasFlag: true
			}
		},
		methods: {
			handleTabIndex (index) {
				this.tabIndex = index
			},
			swiperChange (e) {
				this.handleTabIndex(e.detail.current)
			},
			lower () {
				console.log('下拉')
			},
			goToShopDetail (index) {
				uni.navigateTo({
					url: '../ShopDetail/ShopDetail?type=' + index
				})
			}
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.jifen-market{
		width: 100%;
		height: 100%;
		.myCollect-header{
			width: 100%;
			display: flex;
			justify-content: space-between;
			.myCollect-header-item{
				width: 50%;
				height: 84rpx;
				line-height: 84rpx;
				text-align: center;
				position: relative;
				&:nth-child(1) {
					border-right: 1rpx solid #F4F4F4;
				}
				&::after{
					content: '';
					width: 0;
					height: 0;
					border-bottom: 6rpx solid #FF682D;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: 10rpx;
					transition: all 0.3s;
				}
				&.active{
					color: #FF682D;
					&::after{
						width: 30%;
					}
				}
			}
		}
		.market-list-main{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding-top: 24rpx;
			padding-left: 32rpx;
			padding-right: 32rpx;
			.market-list-item{
				margin-top: 18rpx;
				display: inline-block;
				background: #FFFFFF;
				box-shadow: 0 1px 4px 0 rgba(145,145,145,0.50);
				border-radius: 3px;
				overflow: hidden;
				box-sizing: border-box;
				&:nth-child(1) {
					margin-top: 0;
				}
				&:nth-child(2) {
					margin-top: 0;
				}
				image{
					width: 334rpx;
					height: 298rpx;
				}
				.market-list-item-bottom{
					background-color: #fff;
					width: 334rpx;
					// height: 126rpx;
					padding: 8rpx 18rpx 20rpx 19rpx;
					box-sizing: border-box;
					.market-list-item-bottom-top{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #545454;
						letter-spacing: -0.09px;
						text-align: justify;
						display: -webkit-box;    
						-webkit-box-orient: vertical;    
						-webkit-line-clamp: 1;    //控制行数
						overflow: hidden;
					}
					.market-list-item-bottom-footer{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.market-list-item-bottom-footer-left{
							.market-list-item-bottom-footer-left-top{
								font-family: PingFangSC-Medium;
								font-size: 10px;
								color: #FF7427;
								letter-spacing: -0.24px;
								text-align: justify;
							}
							.market-list-item-bottom-footer-left-bottom{
								font-family: PingFangSC-Medium;
								font-size: 10px;
								color: #A3A3A3;
								letter-spacing: -0.24px;
								text-align: justify;
								text-decoration: line-through;
							}
						}
						.market-list-item-bottom-footer-right{
							width: 112rpx;
							height: 46rpx;
							text-align: center;
							line-height: 46rpx;
							background-image: linear-gradient(136deg, #F6B081 0%, #E86D29 100%);
							border-radius: 4px;
							font-family: PingFangSC-Medium;
							font-size: 10px;
							color: #FFFFFF;
							letter-spacing: -0.24px;
						}
					}
				}
			}
		}
				
		
	}

</style>
