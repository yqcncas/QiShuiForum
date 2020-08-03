<template>
	<view class="market">
		<view class="market-header">
			<view class="market-header-left">
				<image src="../../static/image/ych/Market/1.png" mode=""></image>
				<view class="market-header-left-text">当前积分：{{myJf}}</view>
			</view>
			<view class="market-header-right" @click="goToRichText">
				<image src="../../static/image/ych/Market/2.png" mode=""></image>
				<view>如何赚取积分</view>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="market-order" @click="goToMyOrder">
			<view class="market-order-left">
				<image src="../../static/image/ych/my/10.png" mode=""></image>
				<view class="market-order-text">我的订单</view>
			</view>
			<view class="market-order-right">
				<image src="../../static/image/ych/right.png" mode=""></image>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="market-list">
			<view class="market-list-top" @click="goToJiFenMarket">
				<view class="market-list-top-left">
					<image src="../../static/image/ych/Market/3.png" mode=""></image>
					<view class="market-list-top-left-text">每周精品</view>
				</view>
				<view class="market-list-top-right">
					<view class="market-list-top-right-text">查看更多</view>
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="market-list-main">
				<view class="market-list-item" v-for="(item, index) in marketList" :key = "index"  @click="goToShopDetail(item.id)">
					<image :src="item.goodsPic" mode="aspectFill"></image>
					<view class="market-list-item-bottom">
						<view class="market-list-item-bottom-top">{{item.goodsName}}</view>
						<view class="market-list-item-bottom-footer">
							<view class="market-list-item-bottom-footer-left">
								<view class="market-list-item-bottom-footer-left-top">{{item.price}}元 <span>+ {{item.goodsIntegral ? item.goodsIntegral: 0}}积分</span></view>
								<view class="market-list-item-bottom-footer-left-bottom">{{item.originalPrice}}元</view>
							</view>
							<view class="market-list-item-bottom-footer-right">抢购</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		onLoad(){
			this.initMyInfo()
			this.initMarketList()
		},
		data() {
			return {
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				marketList: [],
				myJf: 0
			}
		},
		methods: {
			// 去积分商城
			goToJiFenMarket () {
				uni.navigateTo({
					url: './JiFenMarket'
				})
			},
			// 去商品详情
			goToShopDetail (id) {
				uni.navigateTo({
					url: '../ShopDetail/ShopDetail?type=' + 1 + '&id=' + id
				})
			},
			// 去我的订单
			goToMyOrder () {
				uni.navigateTo({
					url: '../My/MyOrder'
				})
			},
			// 去富文本
			goToRichText () {
				uni.navigateTo({
					url: '../RichText/RichText?id=' + 15
				})
			},
			//	数据
			async initMarketList () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.goods_list, {boutiqueFlag: 1, goodsStatus: 1, pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				console.log(res)
				this.marketList = [...this.marketList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			async initMyInfo () {
				let res = await this.$fetch(this.$api.getCurrentUser, {}, 'GET', 'FORM')
				console.log(res)
				this.myJf = res.data.integral
			},
		},
		onReachBottom() {
			this.initMarketList()
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	.market{
		padding-bottom: 50rpx;
		.market-header{
			width: 100%;
			height: 76rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 40rpx;
			padding-right: 32rpx;
			box-sizing: border-box;
			.market-header-left{
				display: flex;
				align-items: center;
				image{
					width: 28rpx;
					height: 28rpx;
				}
				.market-header-left-text{
					padding-left: 9rpx;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					text-align: justify;
				}
			}
			.market-header-right{
				display: flex;
				align-items: center;
				image{
					width: 30rpx;
					height: 30rpx;
				}
				view{
					font-family: PingFangSC-Regular;
					font-size: 10px;
					color: #959595;
					letter-spacing: -0.29px;
					text-align: justify;
					padding-left: 6rpx;
				}
			}
		}
		.market-order{
			width: 100%;
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 36rpx;
			padding-right: 32rpx;
			box-sizing: border-box;
			.market-order-left{
				display: flex;
				align-items: center;
				image{
					width: 92rpx;
					height: 92rpx;
				}
				.market-order-text{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #545454;
					letter-spacing: -0.34px;
					text-align: justify;
					padding-left: 30rpx;
					box-sizing: border-box;
				}
			}
			.market-order-right{
				image{
					width: 16rpx;
					height: 28rpx;
				}
			}
		}
		.market-list{
			width: 100%;
			padding: 0 32rpx;
			box-sizing: border-box;
			.market-list-top{
				padding-top: 12rpx;
				padding-bottom: 38rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.market-list-top-left{
					display: flex;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}
					.market-list-top-left-text{
						padding-left: 6rpx;
						box-sizing: border-box;
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
						text-align: justify;
						font-weight: bold;
					}
				}
				.market-list-top-right{
					display: flex;
					align-items: center;
					.market-list-top-right-text{
						font-family: PingFangSC-Medium;
						font-size: 10px;
						color: #545454;
						letter-spacing: -0.29px;
						text-align: justify;
						padding-right: 20rpx;
						box-sizing: border-box;
					}
					image{
						width: 16rpx;
						height: 28rpx;
					}
				}
				
			}
			.market-list-main{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
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
						height: 126rpx;
						padding: 8rpx 18rpx 20rpx 19rpx;
						box-sizing: border-box;
						.market-list-item-bottom-top{
							font-family: PingFangSC-Medium;
							font-size: 10px;
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
									display: -webkit-box;    
									-webkit-box-orient: vertical;    
									-webkit-line-clamp: 1;    //控制行数
									overflow: hidden;
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
	}
</style>
