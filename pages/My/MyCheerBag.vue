<template>
	<view class="MyCheerBag">
		<view class="MyCheerBag-header">
			<view class="MyCheerBag-header-left">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="MyCheerBag-header-right">
				<view class="MyCheerBag-header-right-top">
					<view class="MyCheerBag-header-right-top-username">王大锤</view>
					<image src="../../static/image/ych/my/1.png" mode="aspectFill"></image>
					<!-- <image src="../../static/image/ych/my/2.png" mode="aspectFill"></image> -->
					<view class="MyCheerBag-header-right-top-level">Lv.1</view>
				</view>
				<view class="MyCheerBag-header-right-bottom">18888888888</view>
			</view>
		</view>
		<view class="line-7"></view>
		<view class="MyCheerBag-residue">
			<view class="MyCheerBag-residue-left">加油包剩余数量</view>
			<view class="MyCheerBag-residue-right">10条</view>
		</view>
		<view class="line-7"></view>
		<view class="MyCheerBag-buy">
			<view class="MyCheerBag-buy-top">选择购买数量</view>
			<view class="MyCheerBag-buy-center">
				<view class="MyCheerBag-buy-center-item" @click="handleCurrentIndex(index)" :class="{active: currengIndex == index}" v-for="(item ,index) in 8" :key = "index">
					<view class="MyCheerBag-buy-center-item-top">10条</view>
					<view class="MyCheerBag-buy-center-item-top">¥50</view>
				</view>
			</view>
		</view>
		<view class="else-number">
			<view class="else-number-top">其他数量</view>
			<view class="else-number-bottom">
				<input type="number" placeholder="输入购买数量" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #BEBEBE;" />
			</view>
		</view>
		<view class="line-3"></view>
		<view class="pay-money-box">
			<view class="pay-text">需要支付金额</view>
			<view class="pay-money">88元</view>
		</view>
		<view class="submit-pay" @click="handleShowPopFLag">立即购买</view>
		
		<u-popup v-model="showPayPopFlag" mode="bottom" border-radius="14">
				<view class="popupPay-header">
					<view class="popupPay-header-left">请选择支付方式</view>
					<!-- <view class="popupPay-header-right">¥{{ orderComputed.payAmount ? orderComputed.payAmount : 0 }}</view> -->
				</view>
			<!-- 	<view class="popupPay-middle">
					<view class="popupPay-middle-left">支付剩余时间</view>
					<view class="popupPay-middle-right">{{ minutes }}:{{ seconds }}</view>
				</view> -->
				<view class="popupPay-item" v-for="(popPay, index) in payInfo" :key="index" @tap="handleCircle(index)">
					<view class="circle">
						<view class="n-circle" v-show="circleShowFlag == index"></view>
					</view>
					<image :src="popPay.image" mode="aspectFill"></image>
					<view class="pay-way">
						{{ popPay.text }}
						<!-- <view class="pay-way-sectext" v-if="popPay.sectext">{{ popPay.sectext }}</view> -->
					</view>
				</view>
				<view class="popupPay-button" @click="payMoney">确认支付</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				currengIndex: 0,
				showPayPopFlag: false,
				payInfo: [
					{
						image: '../../static/image/ych/pay/1.png',
						text: '支付宝支付',
						sectext: ''
					},
					{
						image: '../../static/image/ych/pay/2.png',
						text: '微信支付',
						sectext: ''
					}
				],
				circleShowFlag: 0
			}
		},
		methods: {
			// 选择充值内容
			handleCurrentIndex (index) {
				this.currengIndex = index
			},
			// 立即购买
			handleShowPopFLag () {
				this.showPayPopFlag = true
			},
			//　切换圆点
			handleCircle　(index) {
				this.circleShowFlag = index
			},
			payMoney () {
				if (this.circleShowFlag == 0) {
					console.log('支付宝支付')
				} else {
					console.log('微信支付')
				}
			}
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	.MyCheerBag{
		.MyCheerBag-header{
			width: 100%;
			padding-top: 22rpx;
			padding-bottom: 34rpx;
			padding-left: 36rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.MyCheerBag-header-left{
				image{
					width: 136rpx;
					height: 136rpx;
					border-radius: 50%;
				}
			}
			.MyCheerBag-header-right{
				padding-left: 20rpx;
				box-sizing: border-box;
				.MyCheerBag-header-right-top{
					display: flex;
					align-items: center;
					padding-bottom: 10rpx;
					box-sizing: border-box;
					image{
						width: 26rpx;
						height: 26rpx;
						margin: 0 8rpx;
						box-sizing: border-box;
					}
					.MyCheerBag-header-right-top-username{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
					}
					.MyCheerBag-header-right-top-level{
						padding: 0 5rpx;
						background: #FFFFFF;
						border: 1px solid #FF7B30;
						border-radius: 1px;
						font-family: PingFangSC-Medium;
						font-size: 10px;
						color: #FF7B30;
						letter-spacing: -0.24px;
					}
				}
				.MyCheerBag-header-right-bottom{
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #141414;
					letter-spacing: -0.29px;
				}
			}
		}
		.MyCheerBag-residue{
			width: 100%;
			height: 86rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 36rpx;
			padding-right: 32rpx;
			box-sizing: border-box;
		}
		.MyCheerBag-buy{
			padding-top: 14rpx;
			padding-left: 36rpx;
			padding-right: 32rpx;
			padding-bottom: 56rpx;
			box-sizing: border-box;
			.MyCheerBag-buy-top{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
			}
			.MyCheerBag-buy-center{
				display: flex;
				flex-wrap: wrap;
				.MyCheerBag-buy-center-item{
					margin-top: 22rpx;
					width: 202rpx;
					height: 100rpx;
					border: 1px solid #D2D2D2;
					border-radius: 4px;
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin-right: 38rpx;
					box-sizing: border-box;
					&:nth-child(3n) {
						margin-right: 0;
					}
					&.active{
						background: #FF7B30;
						border: 1px solid #FF7B30;
						border-radius: 4px;
						color: #FFFFFF;
					}
				}
			}
		}
		.else-number{
			margin-top: 62rpx;
			padding-left: 36rpx;
			padding-bottom: 56rpx;
			box-sizing: border-box;
			.else-number-top{
				padding-bottom: 22rpx;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				text-align: justify;
				box-sizing: border-box;
			}
			.else-number-bottom{
				width: 682rpx;
				height: 100rpx;
				border: 1px solid #D2D2D2;
				border-radius: 4px;
				display: flex;
				align-items: center;
				padding-left: 16rpx;
				box-sizing: border-box;
				input{
					width: 100%;
					line-height: 50rpx;
				}
			}
		}
		.pay-money-box{
			padding-top: 32rpx;
			display: flex;
			align-items: center;
			padding-bottom: 140rpx;
			box-sizing: border-box;
			.pay-text{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				text-align: justify;
				padding-left: 44rpx;
				padding-right: 102rpx;
				box-sizing: border-box;
			}
			.pay-money{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #FF7B30;
				letter-spacing: -0.34px;
				text-align: justify;
			}
		}
		.submit-pay{
			width: 100%;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			position: fixed;
			bottom: 0;
			background-image: linear-gradient(136deg, #FF6F0E 0%, #FF6917 100%);
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			
		}
	
		.popupPay-header {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding-top: 60rpx;
			box-sizing: border-box;
			.popupPay-header-left {
				font-family: PingFangSC-Semibold;
				font-size: 17px;
				color: #09023e;
				letter-spacing: -0.41px;
				font-weight: bold;
				margin-right: 20rpx;
				box-sizing: border-box;
			}
			.popupPay-header-right {
				font-family: PingFangSC-Semibold;
				font-size: 24px;
				color: #ff8516;
				letter-spacing: -0.58px;
			}
		}
		.popupPay-item {
			width: 100%;
			display: flex;
			margin-top: 60rpx;
			padding-left: 30rpx;
			box-sizing: border-box;
			.circle {
				width: 36rpx;
				height: 36rpx;
				border-radius: 50%;
				border: 1px solid rgba(9, 2, 62, 0.3);
				position: relative;
				.n-circle {
					width: 24rpx;
					height: 24rpx;
					border-radius: 50%;
					background: #5468ff;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
			image {
				width: 40rpx;
				height: 40rpx;
				margin-left: 30rpx;
				margin-right: 20rpx;
				box-sizing: border-box;
			}
			.pay-way {
				display: flex;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #333333;
				letter-spacing: -0.34px;
				.pay-way-sectext {
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: rgba(9, 2, 62, 0.3);
					letter-spacing: -0.34px;
				}
			}
		}
		.popupPay-button {
			margin: 30rpx;
			box-sizing: border-box;
			width: 690rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background: #5468ff;
			border-radius: 4px;
			border-radius: 4px;
			font-family: PingFangSC-Regular;
			font-size: 14px;
			color: #ffffff;
			letter-spacing: -0.34px;
		}
	}
</style>
