<template>
	<view class="Particulars">
		<view class="Particulars-item" v-for="(item, index) in ParticularsList" :key = "index">
			<view class="Particulars-item-left">
				<view class="Particulars-item-left-top">{{item.remark}}</view>
				<view class="Particulars-item-left-bottom">{{item.createTime}}</view>
			</view>
			<view class="Particulars-item-right">{{item.type == 14 || item.type == 16 || item.type == 17 || item.type == 18  || item.type == 33 ? '-' : '+'}}{{item.amount}}</view>
		</view>
		<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
			this.initParticulars()
			
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 20,
				hasFlag: true,
				ParticularsList: [],
				type: 0
				
			}
		},
		methods: {
			async initParticulars () {
				if (!this.hasFlag) return
				let res
				this.pageNum = ++this.pageNum
				if (this.type == 0) {
					res = await this.$fetch(this.$api.my_wallet_details, {typeIn:"14,15,16,17,18", pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				} else {
					res = await this.$fetch(this.$api.my_wallet_details, {typeIn:"31,32,33,34", pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				}
				console.log(res)
				this.ParticularsList = [...this.ParticularsList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			}
			
		},
		onReachBottom() {
			this.initParticulars()
		}
	}
</script>

<style lang="less">
	.Particulars{
		.Particulars-item{
			padding-top: 22rpx;
			padding-left: 30rpx;
			padding-right: 26rpx;
			padding-bottom: 22rpx;
			border-bottom: 1rpx solid #f4f4f4;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.Particulars-item-left{
				.Particulars-item-left-top{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #262626;
					letter-spacing: 0.01px;
				}
				.Particulars-item-left-bottom{
					font-family: PingFangSC-Regular;
					font-size: 11px;
					color: #262626;
					letter-spacing: 0.01px;
				}
			}
			.Particulars-item-right{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #FF7B30;
				letter-spacing: 0.01px;
			}
		}
	}
</style>
