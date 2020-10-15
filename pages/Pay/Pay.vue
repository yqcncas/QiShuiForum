<template>
	<view class="pay">
		<view class="pay-header">
			<view class="pay-header-box">
				<view class="pay-header-box-left">支付金额</view>
				<view class="pay-header-box-right">¥{{price}}</view>
			</view>
			<view style="padding-top: 20rpx;font-size: 16px;" v-if="type == 1 || type == 2">*预计投放时间为: {{tfstartTime}} - {{tfendTime}}</view>
		</view>
		<view class="pay-way">
			<view class="pay-way-title">支付方式</view>
			<view class="pay-item" @click="handlePayIndex(0)">
				<view class="pay-item-left">
					<image src="../../static/image/ych/pay/5.png" mode="aspectFill"></image>
					<view class="pay-item-left-text">余额支付</view>
				</view>
				<view class="pay-item-right" :class="{active: currentIndex == 0}">
					 <icon type="success" size="24" v-if="currentIndex == 0 "/>
				</view>
			</view>
			<view class="pay-item" @click="handlePayIndex(1)">
				<view class="pay-item-left">
					<image src="../../static/image/ych/pay/1.png" mode="aspectFill"></image>
					<view class="pay-item-left-text">支付宝支付</view>
				</view>
				<view class="pay-item-right" :class="{active: currentIndex == 1}">
					 <icon type="success" size="24" v-if="currentIndex == 1 "/>
				</view>
			</view>
			<view class="pay-item" @click="handlePayIndex(2)">
				<view class="pay-item-left">
					<image src="../../static/image/ych/pay/2.png" mode="aspectFill"></image>
					<view class="pay-item-left-text">微信支付</view>
				</view>
				<view class="pay-item-right" :class="{active: currentIndex == 2}">
					 <icon type="success" size="23" v-if="currentIndex == 2 "/>
				</view>
			</view>
			
		</view>
		<view class="pay-button" @click="payButton">确认支付</view>
		
		<u-popup v-model="mianzeBox" mode="center" border-radius="14" width = "70%" height = "50%">
			<view class="mianzeBox-title">广告说明</view>
			<jyf-parser :html="payContent" ref="article"></jyf-parser>
		</u-popup>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		components: {
		    jyfParser
		},
		onLoad(options) {
			if (options.id) {
				this.id = options.id
			}
			
			this.price= options.price
			this.type = options.type
			this.richText = options.richText
			if (this.type == 1) {
				// this.startTime = options.startTime
				// this.endTime = options.endTime
				this.day = options.day
				this.calculateTime()
			}
			if (this.type == 2) {
				this.content = options.content
				this.day = options.day
				this.title = options.title
				this.pics = options.pics
				this.mianzeBox = true
				this.calculateTime()
			}
			if (this.type == 3) {
				this.num = options.num
			}
		},
		data () {
			return {
				currentIndex: 0,
				id: '',
				price: 0,
				type: 0 ,// 0 积分商城 1置顶购买 2广告购买 3加油包购买
				startTime: '',
				endTime: '',
				content: '',
				day: 0,
				title: '',
				pics: [],
				num: 0,
				tfstartTime: '',
				tfendTime: '',
				payContent: '是否确认支付',
				mianzeBox: false,
				richText: ''
			}
		},
		methods: {
			handlePayIndex (index) {
				this.currentIndex = index
			},
			async calculateTime() {
				let res
				if (this.type == 2) {
					res = await this.$fetch(this.$api.calculate_time, {day: this.day, type: 0}, "POST", 'FORM')
					let msg = await this.$fetch(this.$api.get_all_explain, {}, 'GET', 'FROM')
					this.payContent = msg.data[5].content
				} else {
					res = await this.$fetch(this.$api.calculate_time, {day: this.day, type: 1, articleId: this.id}, "POST", 'FORM')
				}
				console.log(res)
				this.tfstartTime = res.data.startTime
				this.tfendTime = res.data.endTime
			},
			payButton () {
				uni.showModal({
				    title: '提示',
				    content: '是否确认支付',
				    success: async (modelres) => {
				        if (modelres.confirm) {
							let res
							if (this.type == 0) {
								res = await this.$fetch(this.$api.buy_goods, {id: this.id, payType: this.currentIndex}, 'POST', 'FORM')
							} else if (this.type == 1) {
								res = await this.$fetch(this.$api.buy_top, {articleId : this.id, payType: this.currentIndex, day: this.day}, 'POST', 'FORM')
							} else if (this.type == 2) {
								let adcode = uni.getStorageSync('adcode')
								res = await this.$fetch(this.$api.buy_advert, {adcode: adcode, payType: this.currentIndex, content: this.content, day: this.day, pics: this.pics, title: this.title, richText: this.richText}, 'POST', 'FORM')
							} else if (this.type == 3) {
								res = await this.$fetch(this.$api.buy_refueling_bag, {id: this.id, num: this.num, payType: this.currentIndex,}, 'POST', 'FORM')
							}
							
							console.log(res)
							if (this.currentIndex == 0) {
								uni.showToast({
									icon: 'none',
									title: res.msg
								})
								if (this.type == 0) {
									uni.setStorageSync('inMyOrderFlag', true)
									setTimeout(() => {
										uni.navigateTo({
											url: '../My/MyOrder'
										})
									}, 700)
								} else if (this.type == 1) {
									setTimeout(() => {
										uni.switchTab({
											url: '../index/index'
										})
									}, 700)
								} else if (this.type == 2) {
									uni.setStorageSync('advertisingFlag', true)
									setTimeout(() => {
										uni.navigateTo({
											url: '../My/Advertising'
										})
									}, 700)
								} else if (this.type == 3)  {
									uni.navigateBack({
										delta: 1
									})
								}
								
							} else if (this.currentIndex == 1) {
								uni.requestPayment({
								    provider: 'alipay',
								    orderInfo: res.msg, //微信、支付宝订单数据
								    success: (msg)=> {
								        uni.showToast({
								        	icon: 'success',
											title: '支付成功'
								        })
										if (this.type == 0) {
											uni.setStorageSync('inMyOrderFlag', true)
											setTimeout(() => {
												uni.navigateTo({
													url: '../My/MyOrder'
												})
											}, 700)
										} else if (this.type == 1) {
											setTimeout(() => {
													uni.switchTab({
														url: '../index/index'
													})
											}, 700)
										} else if (this.type == 2) {
											uni.setStorageSync('advertisingFlag', true)
											setTimeout(() => {
												uni.navigateTo({
													url: '../My/Advertising'
												})
											}, 700)
										} else if (this.type == 3) {
											uni.switchTab({
												url: '../My/My'
											})
										} 
								    },
								    fail: function (err) {
								        console.log('fail:' + JSON.stringify(err));
										uni.showToast({
											icon: 'none',
											title: '支付失败'
										})
								    }
								});
							} else if(this.currentIndex == 2) {
								console.log(res)
								uni.requestPayment({
								    provider: 'wxpay',
								    orderInfo: JSON.parse(res.msg), //微信、支付宝订单数据
								    success: (msg)=> {
								        uni.showToast({
								        	icon: 'success',
											title: '支付成功'
								        })
										if (this.type == 0) {
											uni.setStorageSync('inMyOrderFlag', true)
											setTimeout(() => {
												uni.navigateTo({
													url: '../My/MyOrder'
												})
											}, 700)
										} else if (this.type == 1) {
											setTimeout(() => {
													uni.switchTab({
														url: '../index/index'
													})
												}, 700)
										} else if (this.type == 2) {
											uni.setStorageSync('advertisingFlag', true)
											setTimeout(() => {
												uni.navigateTo({
													url: '../My/Advertising'
												})
											}, 700)
										} else if (this.type == 3) {
											uni.switchTab({
												url: '../My/My'
											})
										} 
								    },
								    fail: function (err) {
								        console.log('fail:' + JSON.stringify(err));
										uni.showToast({
											icon: 'none',
											title: '支付失败'
										})
								    }
								});
							}
							
				        } else if (modelres.cancel) {
							uni.showToast({
								icon: 'none',
								title: '取消支付'
							})
				        }
				    }
				});
			},
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
		.mianzeBox-title{
			font-size: 16px;
			font-weight: bold;
			text-align: center;
			padding-top: 20rpx;
			padding-bottom: 20rpx;
		}
	}
</style>
