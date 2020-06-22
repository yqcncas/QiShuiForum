<template>
	<view class="Recharge">
		<view class="Recharge-header">
			<view class="Recharge-header-top">充值方式</view>
			<view class="Recharge-header-pay" @click="handlePayIndex(0)">
				<view class="Recharge-header-pay-left">
					<image src="../../static/image/ych/pay/3.png" mode=""></image>
					<view class="Recharge-header-pay-left-text">支付宝</view>
				</view>
				<view class="Recharge-header-pay-right" :class="{active: currentIndex == 0}">
					<icon type="success" size="24" v-if="currentIndex == 0"/>
				</view>
			</view>
			<view class="Recharge-header-pay" @click="handlePayIndex(1)">
				<view class="Recharge-header-pay-left">
					<image src="../../static/image/ych/pay/4.png" mode=""></image>
					<view class="Recharge-header-pay-left-text">微信</view>
				</view>
				<view class="Recharge-header-pay-right" :class="{active: currentIndex == 1}">
					<icon type="success" size="24" v-if="currentIndex == 1"/>
				</view>
			</view>
		</view>
		<view class="Recharge-center">
			<view class="Recharge-center-title">充值金额</view>
			<view class="Recharge-center-box">
				<view class="Recharge-center-item" :class="{active: RechargeIndex == index}" v-for="(item, index) in RechargeArr" :key = "index" @click="handleRechargeIndex(index)">
					<view class="Recharge-center-item-price" :class="{active: RechargeIndex == index}">充{{item.price}}送{{item.give}}</view>
				</view>
			</view>
			
		</view>
		<view class="Recharge-button">确认支付</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				currentIndex: 0,
				RechargeArr: [
					{price: 200, give: 50},
					{price: 200, give: 50},
					{price: 200, give: 50},
					{price: 200, give: 50},
				],
				RechargeIndex: -1
			}
		},
		methods: {
			// 切换支付方式
			handlePayIndex (index) {
				this.currentIndex = index
			},
			// 选择充值内容
			handleRechargeIndex (index) {
				this.RechargeIndex = index
			}
		}
	}
</script>

<style lang="less">
	.Recharge{
		.Recharge-header{
			padding-top: 32rpx;
			padding-left: 34rpx;
			padding-right: 32rpx;
			padding-bottom: 22rpx;
			border-bottom: 6rpx solid #F4F4F4;
			box-sizing: border-box;
			.Recharge-header-top{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.39px;
			}
			.Recharge-header-pay{
				padding-top: 28rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.Recharge-header-pay-left{
					display: flex;
					align-items: center;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					.Recharge-header-pay-left-text{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
						padding-left: 18rpx;
						box-sizing: border-box;
					}
				}
				.Recharge-header-pay-right{
					width: 48rpx;
					height: 48rpx;
					border-radius: 50%;
					opacity: 0.3;
					border: 1px solid #000000;
					display: flex;
					align-items: center;
					justify-content: center;
					&.active{
						border: none;
					}
				}
			}
		}
		.Recharge-center{
			padding-top: 32rpx;
			// padding-left: 36rpx;
			// padding-right: 32rpx;
			padding-bottom: 56rpx;
			box-sizing: border-box;
			border-bottom: 6rpx solid #f4f4f4;
			.Recharge-center-title{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-left: 36rpx;
				box-sizing: border-box;
			}
			.Recharge-center-box{
				padding-left: 36rpx;
				box-sizing: border-box;
				.Recharge-center-item{
					display: inline-block;
					margin-top: 22rpx;
					padding: 30rpx;
					box-sizing: border-box;
					border: 1px solid #C5C5C5;
					border-radius: 4px;
					margin-right: 38rpx;
					box-sizing: border-box;
					&:nth-child(3n){
						margin-right: 0;
					}
					&.active{
						background: #5468FF;
					}
					.Recharge-center-item-price{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #545454;
						letter-spacing: 0.01px;
						text-align: center;
						&.active{
							color: #FFFFFF;
						}
					}
				}
			}
		}
		.Recharge-button{
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			text-align: center;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 30rpx;
			
		}
	}
</style>
