<template>
	<view class="messagePush">
		<view class="messagePush-item">
			<view class="messagePush-item-left">评论</view>
		    <switch :checked = "commentFlag" @change = "commentFn" />
		</view>
		<view class="messagePush-item">
			<view class="messagePush-item-left">@我的</view>
		    <switch :checked = "AtFlag"  @change = "AtFn"/>
		</view>
		<view class="messagePush-item">
			<view class="messagePush-item-left">私信</view>
		    <switch :checked = "siXinFlag" @change = "siXinFn" />
		</view>
		<view class="messagePush-item">
			<view class="messagePush-item-left">新粉丝</view>
		    <switch :checked = "newFansFlag"   @change = "newFansFn"/>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				commentFlag: true,
				AtFlag: false,
				siXinFlag: true,
				newFansFlag: true
			}
		},
		methods: {
			// 评论
			commentFn (e) {
				console.log(e)
				this.commentFlag = e.detail.value
			},
			// @
			AtFn (e) {
				this.AtFlag = e.detail.value
			},
			// 私信
			siXinFn (e) {
				this.siXinFlag = e.detail.value
			},
			// 新粉丝
			newFansFn (e) {
				this.newFansFlag = e.detail.value
			} 
		}
	}
</script>

<style lang="less">
	.messagePush{
		padding: 0 32rpx;
		box-sizing: border-box;
		.messagePush-item{
			width: 100%;
			padding-top: 20rpx;
			padding-bottom: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #f4f4f4;
			box-sizing: border-box;
			.messagePush-item-left{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #171717;
				letter-spacing: 0.06px;
			}
		}
	}
</style>
