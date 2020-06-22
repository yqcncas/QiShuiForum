<template>
	<view class="pay">
		<view class="pay-header">
			<view class="pay-header-box">
				<view class="pay-header-box-left">支付金额</view>
				<view class="pay-header-box-right">¥20.00</view>
			</view>
		</view>
		<view class="pay-way">
			<view class="pay-way-title">支付方式</view>
			<view class="pay-item" @click="handlePayIndex(0)">
				<view class="pay-item-left">
					<image src="../../static/image/ych/pay/3.png" mode="aspectFill"></image>
					<view class="pay-item-left-text">支付宝支付</view>
				</view>
				<view class="pay-item-right" :class="{active: currentIndex == 0}">
					 <icon type="success" size="24" v-if="currentIndex == 0 "/>
				</view>
			</view>
			<view class="pay-item" @click="handlePayIndex(1)">
				<view class="pay-item-left">
					<image src="../../static/image/ych/pay/4.png" mode="aspectFill"></image>
					<view class="pay-item-left-text">微信支付</view>
				</view>
				<view class="pay-item-right" :class="{active: currentIndex == 1}">
					 <icon type="success" size="23" v-if="currentIndex == 1 "/>
				</view>
			</view>
			
		</view>
		<view class="pay-button">确认支付</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				currentIndex: 0
			}
		},
		methods: {
			handlePayIndex (index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="less">
	.pay{
		.pay-header{
			padding-top: 24rpx;
			padding-left: 32rpx;
			padding-right: 32rpx;
			padding-bottom: 36rpx;
			box-sizing: border-box;
			.pay-header-box{
				width: 100%;
				height: 182rpx;
				background: #FFFFFF;
				box-shadow: 0 2px 4px 0 rgba(181,181,181,0.50);
				border-radius: 7px;
				display: flex;
				align-items: center;
				.pay-header-box-left{
					padding-left: 96rpx;
					box-sizing: border-box;
					font-family: PingFangSC-Medium;
					font-size: 18px;
					color: #FF7B30;
					letter-spacing: -0.43px;
				}
				.pay-header-box-right{
					padding-left: 222rpx;
					box-sizing: border-box;
					font-family: PingFangSC-Medium;
					font-size: 18px;
					color: #FF7B30;
					letter-spacing: -0.43px;
				}
			}
		}
		.pay-way{
			.pay-way-title{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.39px;
				font-weight: bold;
				// padding-bottom: 42rpx;
				box-sizing: border-box;
				padding-left: 34rpx;
				box-sizing: border-box;
			}
			.pay-item{
				width: 100%;
				// height: 48rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-left: 34rpx;
				padding-right: 32rpx;
				padding-top: 42rpx;
				box-sizing: border-box;
				.pay-item-left{
					display: flex;
					align-items: center;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					.pay-item-left-text{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
						padding-left: 34rpx;
						box-sizing: border-box;
					}
				}
				.pay-item-right{
					width: 48rpx;
					height: 48rpx;
					border-radius: 50%;
					opacity: 0.3;
					border: 1px solid #000000;
					display: flex;
					align-items: center;
					&.active{
						border: none;
					}
				}
			}
		}
		.pay-button{
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 30rpx;
		}
	}
</style>
