<template>
	<view class="shareMoney">
		<view class="shareMoney-header">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="shareMoney-center">
			<view class="shareMoney-center-left">
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<view class="my-money">我的佣金：100</view>
			</view>
			<view class="shareMoney-center-right" @click="goToWithdraw">提现</view>
		</view>
		<view class="line-3"></view>
		<view class="shar-list">
			<view class="shar-list-item" v-for="(item, index) in 8" :key = "index">
				<view class="shar-list-item-left">
					<view class="shar-list-item-left-top">邀请好友获得</view>
					<view class="shar-list-item-left-bottom">2020-03-02</view>
				</view>
				<view class="shar-list-item-right">+200.00</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goToWithdraw () {
				uni.navigateTo({
					url: '../Withdraw/Withdraw'
				})
			}
		}
	}
</script>

<style lang="less">
	.shareMoney{
		.shareMoney-header{
			image{
				width: 100%;
				height: 366rpx;
			}
		}
		.shareMoney-center{
			width: 100%;
			height: 134rpx;
			padding: 0 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.shareMoney-center-left{
				display: flex;
				align-items: center;
				image{
					width: 92rpx;
					height: 92rpx;
				}
				.my-money{
					padding-left: 32rpx;
					box-sizing: border-box;
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: 0.01px;
					text-align: justify;
				}
			}
			.shareMoney-center-right{
				width: 136rpx;
				height: 66rpx;
				background: #FFFFFF;
				border: 1px solid #FF7B30;
				border-radius: 18.5px;
				text-align: center;
				line-height: 66rpx;
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #FF7B30;
				letter-spacing: 0.01px;
			}
		}
		.shar-list{
			.shar-list-item{
				padding: 32rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #f4f4f4;
				box-sizing: border-box;
				&:nth-last-child{
					border-bottom: 0;
				}
				.shar-list-item-left{
					.shar-list-item-left-top{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #262626;
						letter-spacing: 0.01px;
					}
					.shar-list-item-left-bottom{
						font-family: PingFangSC-Regular;
						font-size: 11px;
						color: #262626;
						letter-spacing: 0.01px;
					}
				}
				.shar-list-item-right{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #FF7B30;
					letter-spacing: 0.01px;
				}
			}
		}
	}
</style>
