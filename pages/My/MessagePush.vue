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
		onLoad() {
			this.initMyInfo()
			this.cid = plus.push.getClientInfo().clientid
		},
		data () {
			return {
				commentFlag: true,
				AtFlag: false,
				siXinFlag: true,
				newFansFlag: true,
				cid: ''
			}
		},
		methods: {
			async initMyInfo () {
				let res = await this.$fetch(this.$api.getCurrentUser, {}, 'GET', 'FORM')
				let usreInfo = res.data.user
				this.commentFlag = usreInfo.evaluateFlag
				this.newFansFlag = usreInfo.followFlag
				this.AtFlag = usreInfo.pushFlag
				// this.siXinFlag = usreInfo.evaluateFlag
			},
			// 评论
			async commentFn (e) {
				console.log(e)
				this.commentFlag = e.detail.value ? 1 : 0
				let res = await this.$fetch(this.$api.upd_user, {evaluateFlag: this.commentFlag, cid: this.cid}, "POST", 'FORM')
				console.log(res)
			},
			// @
			async AtFn (e) {
				this.AtFlag = e.detail.value ? 1 : 0
				let res = await this.$fetch(this.$api.upd_user, {pushFlag: this.AtFlag, cid: this.cid}, "POST", 'FORM')
				console.log(res)
			},
			// 私信
			async siXinFn (e) {
				this.siXinFlag = e.detail.value
				
			},
			// 新粉丝
			async newFansFn (e) {
				this.newFansFlag = e.detail.value ? 1 : 0
				let res = await this.$fetch(this.$api.upd_user, {followFlag: this.newFansFlag, cid: this.cid}, "POST", 'FORM')
				console.log(res)
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
