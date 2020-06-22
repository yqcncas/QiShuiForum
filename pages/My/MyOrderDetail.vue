<template>
	<view class="MyOrderDetail">
		<view class="MyOrderDetail-header">
			<view class="MyOrderDetail-header-left">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="MyOrderDetail-header-right">
				<view class="MyOrderDetail-header-right-top">正品iPhone Xs Max</view>
				<view class="MyOrderDetail-header-right-center">
					<view class="MyOrderDetail-header-right-center-left">积分兑换</view>
					<view class="MyOrderDetail-header-right-center-right">10000积分</view>
				</view>
				<view class="MyOrderDetail-header-right-bottom">
					<view class="MyOrderDetail-header-right-bottom-left">有效期至：2020-08-03</view>
					<view class="MyOrderDetail-header-right-bottom-right">待使用</view>
				</view>
			</view>
		</view>
		<view class="MyOrderDetail-center">
			<view class="MyOrderDetail-center-top">创建时间：2020-08-08 20:20:20</view>
			<view class="MyOrderDetail-center-bottom">订单编号：353265654636543</view>
			<view class="MyOrderDetail-center-bottom">核销时间：2020-08-08 20:20:20</view>
		</view>
		<view class="MyOrderDetail-bottom">
			<view class="MyOrderDetail-bottom-title">核销码</view>
			<view class="qrcode">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="submit-button">申请退款</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.MyOrderDetail{
		.MyOrderDetail-header{
			padding: 20rpx 30rpx;
			display: flex;
			box-sizing: border-box;
			border-bottom: 6rpx solid #f4f4f4;
			.MyOrderDetail-header-left{
				image{
					width: 196rpx;
					height: 196rpx;
				}
			}
			.MyOrderDetail-header-right{
				padding-left: 20rpx;
				flex: 1;
				box-sizing: border-box;
				.MyOrderDetail-header-right-top{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #545454;
					letter-spacing: -0.12px;
				}
				.MyOrderDetail-header-right-center{
					display: flex;
					justify-content: space-between;
					padding-top: 18rpx;
					padding-bottom: 66rpx;
					box-sizing: border-box;
					.MyOrderDetail-header-right-center-left{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #FF7B30;
						letter-spacing: 0.04px;
						padding: 0 6rpx;
						box-sizing: border-box;
						border: 1px solid #FF7B30;
						border-radius: 2px;
					}
					.MyOrderDetail-header-right-center-right{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #FF7B30;
						letter-spacing: 0.04px;
					}
				}
				.MyOrderDetail-header-right-bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.MyOrderDetail-header-right-bottom-left{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #292929;
						letter-spacing: 0.04px;
					}
					.MyOrderDetail-header-right-bottom-right{
						font-family: PingFangSC-Medium;
						font-size: 12px;
						color: #FF7B30;
						letter-spacing: -0.29px;
					}
				}
			}
		}
		.MyOrderDetail-center{
			padding: 18rpx 32rpx;
			box-sizing: border-box;
			border-bottom: 6rpx solid #f4f4f4;
			.MyOrderDetail-center-top{
				font-family: PingFangSC-Regular;
				font-size: 12px;
				color: #292929;
				letter-spacing: 0.04px;
			}
			.MyOrderDetail-center-bottom{
				font-family: PingFangSC-Regular;
				font-size: 12px;
				color: #292929;
				letter-spacing: 0.04px;
				padding-top: 14rpx;
				box-sizing: border-box;
			}
		}
		.MyOrderDetail-bottom{
			.MyOrderDetail-bottom-title{
				font-family: PingFangSC-Medium;
				font-size: 12px;
				color: #292929;
				letter-spacing: 0.04px;
				padding-left: 30rpx;
				padding-top: 14rpx;
				box-sizing: border-box;
			}
			.qrcode{
				width: 100%;
				text-align: center;
				image{
					width: 478rpx;
					height: 444rpx;
				}
			}
		}
		.submit-button{
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			text-align: center;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
		}
	}
</style>
