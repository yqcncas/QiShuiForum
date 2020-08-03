<template>
	<view class="stick">
		<view class="stick-item" v-for="(item, index) in StickList" :key = "index" @click="handleStick(item.articleId, item.userId)">
			<view class="stick-item-left">置顶</view>
			<view class="stick-item-right">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			handleStick (id, userId) {
				this.$emit("handleStick", id, userId)
			}
		},
		props:{
			StickList: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="less">
	.stick{
		padding: 0 30rpx;
		
		box-sizing: border-box;
		.stick-item{
			padding: 10rpx;
			padding-top: 20rpx;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #D8D8D8;
			box-sizing: border-box;
			display: flex;
			&:last-child{
				border-bottom: 0;
			}
			.stick-item-left{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #FF6F2E;
				letter-spacing: -0.29px;
				padding-left: 2rpx;
				padding-right: 18rpx;
				box-sizing: border-box;
			}
			.stick-item-right{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.29px;
				text-align: justify;
				display: -webkit-box;    
				-webkit-box-orient: vertical;    
				-webkit-line-clamp: 1;    //控制行数
				overflow: hidden;
			}
		}
	}
</style>
