<template>
	<view class="my-order">
		<view class="my-order-item" v-for="(item, index) in 10" :key = "index" @click="goToOrderDetail">
			<view class="my-order-item-left">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="my-order-item-right">
				<view class="my-order-item-right-top">
					<view class="my-order-item-right-top-left">正品iPhone Xs Max</view>
					<view class="my-order-item-right-top-right active">待使用</view>
				</view>
				<view class="my-order-item-right-center">积分兑换</view>
				<view class="my-order-item-right-bottom">
					<view class="my-order-item-right-bottom-left">有效期至：2020-08-03</view>
					<view class="my-order-item-right-bottom-right">核销</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goToOrderDetail () {
				uni.navigateTo({
					url: './MyOrderDetail'
				})
			}
		}
	}
</script>

<style lang="less">
	.my-order{
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
						letter-spacing: -0.12px;
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
					font-size: 12px;
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
						font-size: 12px;
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
</style>
