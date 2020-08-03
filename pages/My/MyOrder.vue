<template>
	<view class="my-order">
		<mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption">
			<view class="my-order-item" v-for="(item, index) in myOrderList" :key = "index" @click="goToOrderDetail(item.id, index)">
				<view class="my-order-item-left">
					<image :src="item.goodsPic" mode="aspectFill"></image>
				</view>
				<view class="my-order-item-right">
					<view class="my-order-item-right-top">
						<view class="my-order-item-right-top-left">{{item.goodsName}}</view>
						<view class="my-order-item-right-top-right active">{{orderStatus[item.status]}}</view>
					</view>
					<view class="my-order-item-right-center">{{orderType[item.goodsType]}}</view>
					<view class="my-order-item-right-bottom">
						<view class="my-order-item-right-bottom-left">有效期至：{{item.endTime}}</view>
						<view class="my-order-item-right-bottom-right" :class="{canHeXiao: item.status != 0}">{{item.status == 0 ? '核销' : item.status == 1 ? '已使用' : item.status == 2 ? '退款审核中' : item.status == 3 ? '已退款' : '已过期'}}</view>
					</view>
				</view>
			</view>
			<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		onLoad() {
			this.initMyOrder()
			
		},
		onShow() {
			console.log('1231313')
			if (uni.getStorageSync('orderDetaiIndex')) {
				let orderDetaiIndex = uni.getStorageSync('orderDetaiIndex')
				this.myOrderList[orderDetaiIndex].status = 2
				this.$set(this.myOrderList[orderDetaiIndex], 'status', 2 )
				console.log(this.myOrderList[orderDetaiIndex])
				uni.removeStorageSync('orderDetaiIndex')
			}
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				myOrderList: [],
				orderType: ['限时抢购', '积分兑换'],
				orderStatus: ['待使用', '已使用', '退款审核中', '已退款', '已过期'],
				upOption: {
					use: false
				}
			}
		},
		methods: {
			downCallback () {
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.myOrderList = []
				this.initMyOrder()
							
				this.mescroll.endDownScroll()
			},
			goToOrderDetail (id, index) {
				uni.navigateTo({
					url: './MyOrderDetail?id=' + id + '&index=' + index
				})
			},
			async initMyOrder () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.my_order, {pageNum: this.pageNum, pageSize: this.pageSize}, 'POST', 'FORM')
				console.log(res)
				this.myOrderList = [...this.myOrderList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
				let obj = {};
				// 要去重的数组
				this.myOrderList = this.myOrderList.reduce((cur,next) => {
				    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
				    return cur;
				},[]) //设置cur默认类型为数组，并且初始值为空的数组
				
			}
		},
		onReachBottom() {
			this.initMyOrder()
		},
		onBackPress () {
			if (uni.getStorageSync('inMyOrderFlag')) {
				uni.removeStorageSync('inMyOrderFlag')
				uni.switchTab({
					url: './My'
				})
				return true
			} else {
				return false
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
						letter-spacing: -0.10px;
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
					font-size: 10px;
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
						font-size: 10px;
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
						&.canHeXiao{
							background-image:none;
							background-color: #c8c9cc;
						}
					}
				}
			}
		}

	}
</style>
