<template>
	<view class="hotMain">
		<view class="hotMain-item" v-for="(item, index) in 20" :key = "index" @click="handleHotItem(index)">
			<image src="../../static/logo.png" mode="aspectFill"></image>
			<view class="hotMain-item-bottom">亚夏·金辰府</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		props:{
			title: {
				type: String,
				required: true,
				default: '热卖楼盘'
			}
		},
		methods: {
			handleHotItem (index) {
				this.$emit("handleHotItem", index)
			}
		}
	}
</script>

<style lang="less">
	.hotMain{
		padding-top: 20rpx;
		padding-left: 32rpx;
		padding-right: 32rpx;
		padding-bottom: 50rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.hotMain-item{
			width: 334rpx;
			height: 424rpx;
			background: #FFFFFF;
			box-shadow: 0 1px 4px 0 rgba(145,145,145,0.50);
			background-color: #fff;
			margin-top: 20rpx;
			box-sizing: border-box;
			&:nth-child(1) {
				margin-top: 0;
			}
			&:nth-child(2) {
				margin-top: 0;
			}
			image{
				width: 334rpx;
				height: 334rpx;
			}
			.hotMain-item-bottom{
				padding-top: 14rpx;
				padding-left: 16rpx;
				box-sizing: border-box;
				font-family: PingFangSC-Medium;
				font-size: 12px;
				color: #282828;
				letter-spacing: -0.09px;
				text-align: justify;
				display: -webkit-box;    
				-webkit-box-orient: vertical;    
				-webkit-line-clamp: 2;    //控制行数
				overflow: hidden;
			}
		}
	}
</style>
