<template>
	<view class="MyOrderDetail">
		<view class="MyOrderDetail-header">
			<view class="MyOrderDetail-header-left">
				<image :src="orderDetail.goodsPic" mode="aspectFill"></image>
			</view>
			<view class="MyOrderDetail-header-right">
				<view class="MyOrderDetail-header-right-top">{{orderDetail.goodsName}}</view>
				<view class="MyOrderDetail-header-right-center">
					<view class="MyOrderDetail-header-right-center-left">{{orderDetail.goodsType == 0 ? '限时抢购' : '积分兑换' }}</view>
					<view class="MyOrderDetail-header-right-center-right">{{orderDetail.price}}元+{{orderDetail.goodsIntegral}}积分</view>
				</view>
				<view class="MyOrderDetail-header-right-bottom">
					<view class="MyOrderDetail-header-right-bottom-left">有效期至：{{orderDetail.endTime}}</view>
					<view class="MyOrderDetail-header-right-bottom-right">{{status[orderDetail.status]}}</view>
				</view>
			</view>
		</view>
		<view class="MyOrderDetail-center">
			<view class="MyOrderDetail-center-top">创建时间：{{orderDetail.createTime}}</view>
			<view class="MyOrderDetail-center-bottom">订单编号：{{orderDetail.orderNo}}</view>
			<view class="MyOrderDetail-center-bottom" v-if="orderDetail.useTime">核销时间：{{orderDetail.useTime}}</view>
		</view>
		<view class="MyOrderDetail-bottom" v-if="orderDetail.status == 0 || orderDetail.status == 1">
			<view class="MyOrderDetail-bottom-title">核销码</view>
			
			<view class="qrcode" v-if="qrCode">
				<!-- {{qrCode}} -->
				<image :src="qrCode" mode="aspectFill"></image>
			</view>
		</view>
		<view class="submit-button" @click="exitPrice" v-if="orderDetail.status == 0">申请退款</view>
	</view>
</template>

<script>
	import baseURL from '../../config/index.js'
	export default {
		onLoad(options) {
			this.id = options.id
			this.index = options.index
			this.initOrderDetail()
		},
		data () {
			return {
				id: 0,
				orderDetail: {},
				qrCode: "",
				index: 0,
				status: ['待使用', '已使用', '退款审核中', '已退款', '已过期']
			}
		},
		methods: {
			async initOrderDetail () {
				let res = await this.$fetch(this.$api.order_detail, {id: this.id}, 'POST', 'form')
				console.log(res)
				this.orderDetail = res.data.order
				this.qrCode = baseURL.slice(0, baseURL.length - 1) + res.data.qrcode
				console.log(this.qrCode)
			},
			async exitPrice () {
				uni.showModal({
				    title: '提示',
				    content: '请确认是否退款',
				    success: async(exitres)=> {
				        if (exitres.confirm) {
				           let res = await this.$fetch(this.$api.refund, {id: this.id}, 'POST', 'FORM')
						   console.log(res)
						   uni.showToast({
						   	icon: 'none',
							title: res.msg
						   })
						   this.orderDetail.status = 2
						   uni.setStorageSync('orderDetaiIndex', this.index)
				        } else if (exitres.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			}
		}
	}
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
					letter-spacing: -0.10px;
				}
				.MyOrderDetail-header-right-center{
					display: flex;
					justify-content: space-between;
					padding-top: 18rpx;
					padding-bottom: 66rpx;
					box-sizing: border-box;
					.MyOrderDetail-header-right-center-left{
						font-family: PingFangSC-Medium;
						font-size: 10px;
						color: #FF7B30;
						letter-spacing: 0.04px;
						padding: 0 6rpx;
						box-sizing: border-box;
						border: 1px solid #FF7B30;
						border-radius: 2px;
					}
					.MyOrderDetail-header-right-center-right{
						font-family: PingFangSC-Medium;
						font-size: 10px;
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
						font-size: 10px;
						color: #292929;
						letter-spacing: 0.04px;
					}
					.MyOrderDetail-header-right-bottom-right{
						font-family: PingFangSC-Medium;
						font-size: 10px;
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
				font-size: 10px;
				color: #292929;
				letter-spacing: 0.04px;
			}
			.MyOrderDetail-center-bottom{
				font-family: PingFangSC-Regular;
				font-size: 10px;
				color: #292929;
				letter-spacing: 0.04px;
				padding-top: 14rpx;
				box-sizing: border-box;
			}
		}
		.MyOrderDetail-bottom{
			.MyOrderDetail-bottom-title{
				font-family: PingFangSC-Medium;
				font-size: 10px;
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
