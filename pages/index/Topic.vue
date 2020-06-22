<template>
	<view class="Topic">
		<view class="Topic-item" v-for="(item, index) in 10" :key = "index" @click="goToTopicDetail">
			<view class="Topic-item-left">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="Topic-item-right">
				<view class="Topic-item-right-top">两会</view>
				<view class="Topic-item-right-bottom">8.8w条讨论</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goToTopicDetail () {
				uni.navigateTo({
					url: './TopicDetail'
				})
			}
		}
	}
</script>

<style lang="less">
	.Topic{
		
		.Topic-item{
			height: 176rpx;
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			border-bottom: 10rpx solid #f4f4f4;
			box-sizing: border-box;
			&:last-child{
				border-bottom: 0;
			}
			.Topic-item-left{
				image{
					width: 144rpx;
					height: 144rpx;
				}
			}
			.Topic-item-right{
				padding-left: 36rpx;
				box-sizing: border-box;
				.Topic-item-right-top{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					font-weight: bold;
					padding-bottom: 40rpx;
					box-sizing: border-box;
				}
				.Topic-item-right-bottom{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #5B5B5B;
					letter-spacing: -0.34px;
				}
			}
		}
	}
</style>
