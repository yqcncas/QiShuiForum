<template>
	<view class="Merchant">
		<Status></Status>
		<view class="Merchant-header">
			<view class="img-box" @click="goBack">
				<image src="../../static/image/ych/back.png" mode=""></image>
			</view>
			<view class="Merchant-header-center">商品核销</view>
			<view class="img-sao" @click="saoyisao">
				<image src="../../static/image/ych/my/29.png" mode=""></image>
			</view>
		</view>
		
		<view class="my-order">
			<view class="my-order-item" v-for="(item, index) in WalletList" :key = "index">
				<view class="my-order-item-left">
					<image :src="item.goodsPic" mode="aspectFill"></image>
				</view>
				<view class="my-order-item-right">
					<view class="my-order-item-right-top">
						<view class="my-order-item-right-top-left">{{item.goodsName}}</view>
						<view class="my-order-item-right-top-right active">已核销</view>
					</view>
					<view class="my-order-item-right-center">{{item.goodsType == 0 ? '限时抢购' : '积分兑换' }}</view>
					<view class="my-order-item-right-bottom">
						<view class="my-order-item-right-bottom-left">有效期至：{{item.endTime}}</view>
						<!-- <view class="my-order-item-right-bottom-right">核销</view> -->
					</view>
				</view>
			</view>
			
		</view>
		<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
		
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.initWalletList()
		},
		data () {
			return {
				hasFlag: true,
				pageNum: 0,
				pageSize: 10,
				WalletList: []
			}
		},
		methods: {
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			saoyisao () {
				uni.scanCode({
				    onlyFromCamera: true,
				    success:  async (res) => {
						// console.log(res)
				  //       console.log('条码类型：' + res.scanType);
				  //       console.log('条码内容：' + res.result);
						let msg = await this.$fetch(this.$api.write_off_goods, {code: res.result}, "POST", 'FORM')
						console.log(msg)
				    }
				});
			},
			async initWalletList() {
				if (!this.hasFlag) return 
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.my_write_off_order, {pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				console.log(res)
				this.WalletList = [...this.WalletList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			}
		},
		onReachBottom() {
			this.initWalletList()
		}
	}
</script>

<style lang="less">
	.Merchant{
		.Merchant-header{
			width: 100%;
			display: flex;
			height: 50rpx;
			align-items: center;
			position: fixed;
			top: var(--status-bar-height);
			padding-left: 40rpx;
			padding-right: 36rpx;
			box-sizing: border-box;
			background-color: #fff;
			z-index: 99;
			.img-box{
				display: flex;
				align-items: center;
				position: relative;
				&::after{
					position: absolute;
					left: -20rpx;
					top: -20rpx;
					bottom: -20rpx;
					right: -20rpx;
				}
				image{
					width: 18rpx;
					height: 34rpx;
				}
			}
			.Merchant-header-center{
				font-family: PingFangSC-Medium;
				font-size: 18px;
				color: #060606;
				letter-spacing: 0.07px;
				padding-left: 246rpx;
				padding-right: 222rpx;
				box-sizing: border-box;
			}
			.img-sao{
				display: flex;
				align-items: center;
				position: relative;
				&::after{
					position: absolute;
					left: -20rpx;
					top: -20rpx;
					bottom: -20rpx;
					right: -20rpx;
				}
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
		.my-order{
			padding-top: calc(50rpx + var(--status-bar-height));
			.my-order-item{
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				border-bottom: 6rpx solid #f4f4f4;
				&:last-child{
					border: none;
				}
				.my-order-item-left{
					image{
						width: 196rpx;
						height: 196rpx;
					}
				}
				.my-order-item-right{
					flex: 1;
					padding-left: 16rpx;
					box-sizing: border-box;
					.my-order-item-right-top{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.my-order-item-right-top-left{
							font-family: PingFangSC-Medium;
							font-size: 16px;
							color: #545454;
							letter-spacing: -0.10px;
						}
						.my-order-item-right-top-right{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #3B3B3B;
							letter-spacing: -0.34px;
							&.active{
								font-family: PingFangSC-Medium;
								font-size: 14px;
								color: #FF7B30;
								letter-spacing: -0.34px;
							}
						}
					}
					.my-order-item-right-center{
						display: inline-block;
						font-family: PingFangSC-Medium;
						font-size: 10px;
						color: #FF7B30;
						letter-spacing: 0.04px;
						padding: 0 6rpx;
						border: 1px solid #FF7B30;
						border-radius: 2px;
						box-sizing: border-box;
						margin-top: 18rpx;
						margin-bottom: 25rpx;
					}
					.my-order-item-right-bottom{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.my-order-item-right-bottom-left{
							font-family: PingFangSC-Regular;
							font-size: 10px;
							color: #292929;
							letter-spacing: 0.04px;
						}
						.my-order-item-right-bottom-right{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #FFFFFF;
							letter-spacing: -0.34px;
							width: 122rpx;
							height: 60rpx;
							line-height: 60rpx;
							text-align: center;
							background-image: linear-gradient(136deg, #F6B081 0%, #E86D29 100%);
							border-radius: 4px;
						}
					}
				}
			}
			
		}
		
	}
</style>
