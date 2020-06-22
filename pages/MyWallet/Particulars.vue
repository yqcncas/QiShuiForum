<template>
	<view class="Particulars">
		<view class="Particulars-item" v-for="(item, index) in 6" :key = "index">
			<view class="Particulars-item-left">
				<view class="Particulars-item-left-top">充值</view>
				<view class="Particulars-item-left-bottom">2020-03-02 08:00:02</view>
			</view>
			<view class="Particulars-item-right">+200.00</view>
		</view>
	</view>
</template>

<script>
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
