<template>
	<view class="my-friends">
		<view class="huati-item" v-for="(item, index) in MyFriendList" :key = "index" @click="goToMyHomePage(item.userId)"  >
			<image :src="item.avatar ? item.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
			<view>{{item.userName}}</view>
		</view>

		<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
	</view>
</template>

<script>
	export default {
		onLoad (options) {
			this.type = options.type
			if (this.type == 1) {
				uni.setNavigationBarTitle({
				    title: '我的关注'
				});
			} else {
				uni.setNavigationBarTitle({
				    title: '我的粉丝'
				});
			}
			this.initMyFriendList()
		},
		data () {
			return{
				type: 0, // 1关注 2好友
				MyFriendList: [],
				hasFlag: true,
				pageNum: 0,
				pageSize: 20
			}
		},
		methods: {
			async initMyFriendList () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res 
				if (this.type == 1) {
					res = await this.$fetch(this.$api.get_follow_list, {pageNum: this.pageNum, paegSize: this.pageSize, type: 0}, 'POST', 'Form')
				} else {
					res = await this.$fetch(this.$api.get_follow_list, {pageNum: this.pageNum, paegSize: this.pageSize, type: 1}, 'POST', 'Form')
				}
				this.MyFriendList = [...this.MyFriendList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			// 去个人主页
			goToMyHomePage (id) {
				uni.navigateTo({
					url:'../My/UserHomePage?type='+ 2 + '&userId=' + id
				})
			},
		}
	}
</script>

<style lang="less">
	.my-friends{
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
	.huati-item{
		display: flex;
		align-items: center;
		width: 100%;
		height: 140rpx;
		border-bottom: 1rpx solid #f4f4f4;
		image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			// margin-left: 30rpx;
			margin-right: 30rpx;
		}
	}
</style>
