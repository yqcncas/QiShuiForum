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
			<view style="flex: 1;text-align: right;" @click="numberHx">数字核销</view>
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
		<u-popup v-model="numberHxFlag" mode="center" border-radius="14" width="80%" height="400rpx" :mask-close-able = "false" :closeable = "true">
				<view class="hx-number-box">
					<view class="hx-number-box-title">请输入您的数字核销码</view>
					<u-input v-model="heNumber" :type="type" :border="border" placeholder = "请输入数字核销码" style = "width: 100%;" />
					<u-button type="primary" :custom-style="customStyle" :ripple="true" ripple-bg-color="#909399" @click = "hexiao">确认核销</u-button>
				</view>
		</u-popup>
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
				WalletList: [],
				numberHxFlag: false,
				type: 'number',
				border: true,
				customStyle: {
					width: '70%',
					marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
						
				},
				heNumber: ''
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
						if (msg.code == 0) {
							uni.showToast({
								icon: 'success',
								title: msg.msg
							})
							this.hasFlag = true,
							this.pageNum =  0,
							this.pageSize = 10,
							this.initWalletList = []
							this.initWalletList()
						}
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
			},
			// 数字核销
			numberHx () {
				this.numberHxFlag = true
			},
			// 数字核销
			async hexiao () {
				let msg = await this.$fetch(this.$api.write_off_goods, {code: this.heNumber}, "POST", 'FORM')
				console.log(msg)
				if (msg.code == 0) {
					this.initWalletList()
					uni.showToast({
						icon: 'success',
						title: '核销成功'
					})
				}
				this.numberHxFlag = false
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
				// padding-right: 222rpx;
				padding-right: 100rpx;
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
					width: 42rpx;
					height: 42rpx;
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
							flex: 4;
							font-family: PingFangSC-Medium;
							font-size: 16px;
							color: #545454;
							letter-spacing: -0.10px;
						}
						.my-order-item-right-top-right{
							flex: 1;
							text-align: right;
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
		.hx-number-box{
			padding: 20rpx;
			padding-top: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.hx-number-box-title{
				font-size: 16px;
				padding-bottom: 50rpx;
				box-sizing: border-box;
				font-weight: bold;
				text-align: center;
			}
		}
	}
</style>

