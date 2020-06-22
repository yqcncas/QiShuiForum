<template>
	<view class="drafts">
		<view class="drafts-item" v-for="(item, index) in 8" :key = "index">
			<view class="drafts-item-left">
				<view class="drafts-item-left-top">2020-03-02 08:00:02</view>
				<view class="drafts-item-left-bottom">习近平同法国总统 哥斯达黎加总统通电话</view>
			</view>
			<view class="drafts-item-right">删除</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.drafts{
		.drafts-item{
			padding-top: 24rpx;
			padding-left: 30rpx;
			padding-bottom: 16rpx;
			// padding-right: 30rpx;
			box-sizing: border-box;
			border-bottom: 1rpx solid #f4f4f4;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.drafts-item-left{
				flex: 1;
				border-right: 1rpx solid #f4f4f4;
				.drafts-item-left-top{
					font-family: PingFangSC-Regular;
					font-size: 11px;
					color: #262626;
					letter-spacing: 0.01px;
					padding-bottom: 6rpx;
					box-sizing: border-box;
				}
				.drafts-item-left-bottom{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #262626;
					font-weight: bold;
					letter-spacing: 0.01px;
					display: -webkit-box;    
					-webkit-box-orient: vertical;    
					-webkit-line-clamp: 2;    //控制行数
					overflow: hidden;
				}
			}
			.drafts-item-right{
				width: 134rpx;
				height: 100%;
				text-align: center;
				line-height: 118rpx;
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #FF3A3A;
				letter-spacing: 0.01px;
				
			}
		}
	}
</style>
