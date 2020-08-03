<template>
	<view class="MyWallet">
		<view class="my-MyWallet">
			<view class="my-MyWallet-left">钱包余额</view>
			<view class="my-MyWallet-right">¥{{myMoney}}</view>
		</view>
		<view class="MyWallet-center">
			<view class="MyWallet-center-item">
				<view class="MyWallet-center-item-left">总消费金额</view>
				<view class="MyWallet-center-item-right">¥{{totalMoney}}</view>
			</view>
			<view class="MyWallet-center-item" @click="goToParticulars">
				<view class="MyWallet-center-item-left">明细</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.myMoney = options.myMoney
			this.totalMoney = options.totalMoney
		},
		
		// 点击充值
		onNavigationBarButtonTap () {
			uni.navigateTo({
				url: './Recharge'
			})
		},
		data () {
			return {
				myMoney: 0,
				totalMoney: 0
			}
		},
		methods: {
			// 去明细
			goToParticulars () {
				uni.navigateTo({
					url: './Particulars?type=' + 0
				}) 
			}
		}
	}
</script>

<style lang="less">
	.MyWallet{
		.my-MyWallet{
			padding-top: 30rpx;
			padding-left: 32rpx;
			padding-right: 30rpx;
			padding-bottom: 28rpx;
			box-sizing: border-box;
			border-bottom: 4rpx solid #E1E1E1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.my-MyWallet-left{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #171717;
				letter-spacing: 0.06px;
			}
			.my-MyWallet-right{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #4E4E4E;
				letter-spacing: 0.06px;
			}
		}
		.MyWallet-center{
			padding-left: 32rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			.MyWallet-center-item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 19rpx;
				padding-bottom: 27rpx;
				box-sizing: border-box;
				border-bottom: 2rpx solid #E1E1E1;
				.MyWallet-center-item-left{
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #171717;
					letter-spacing: 0.06px;
				}
				.MyWallet-center-item-right{
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #4E4E4E;
					letter-spacing: 0.06px;
				}
			}
		}
	}
</style>
