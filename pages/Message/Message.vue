<template>
	<view class="message">
		<view class="message-top" @click="goToComment(1)">
			<view class="message-top-left">
				<image src="../../static/image/ych/index/17.png" mode="aspectFill"></image>
				<view class="message-top-left-text">评论</view>
			</view>
			<image src="../../static/image/ych/right.png" mode=""></image>
		</view>
		<view class="message-top" @click="goToComment(2)">
			<view class="message-top-left">
				<image src="../../static/image/ych/index/18.png" mode="aspectFill"></image>
				<view class="message-top-left-text">@我的</view>
			</view>
			<image src="../../static/image/ych/right.png" mode=""></image>
		</view>
		
		<view class="showbox" v-if="isMessageShow">

			<view class="message-list" >
					<u-swipe-action  :index="index" 
							v-for="(item, index) in MessageList" :key = "index" 
							@click="clickDel" @open="open"
							:options="options">
						
							<view class="message-list-item" @click="chatMsg(item.username, item.nickname, index)">
								<image :src="item.avatar ? item.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
								<view class="message-list-right">
									<view class="message-list-right-left">
										<view class="message-list-right-top">{{item.title}}</view>
										<view class="message-list-right-bottom">{{item.latestText}}</view>
									</view>
									<view class="redCircle" v-if="item.getUnReadMsgCnt">{{item.getUnReadMsgCnt}}</view>
								</view>
								
							</view>
					</u-swipe-action>
			</view>
		</view>
<!-- 		<view class="message-list">
				<u-swipe-action :show="item.show" :index="index" 
						v-for="(item, index) in 5" :key = "index" 
						@click="clickDel" @open="open"
						:options="options">
					
						<view class="message-list-item" @click="chatMsg(item.username, item.nickname, index)">
							<image :src="item.avatar ? item.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
							<view class="message-list-right">
								<view class="message-list-right-left">
									<view class="message-list-right-top">111</view>
									<view class="message-list-right-bottom">222</view>
								</view>
								<view class="redCircle" v-if="item.getUnReadMsgCnt">3</view>
							</view>
							
						</view>
				</u-swipe-action>
		</view> -->

		
		
	</view>
</template>

<script>
	// 聊天  导入插件 用作删除和获取消息列表用
	let dcRichAlert
	if (uni.getSystemInfoSync().platform == 'android') {
		dcRichAlert = uni.requireNativePlugin('ZWM-BJXMapView');
	} else {
		dcRichAlert = uni.requireNativePlugin('ZWM-BJXJobView');
	}
	
	// 导入聊天插件 用作点击进入聊天
	import chat from '../../chat.js'
	
	export default {
		onLoad() {
			uni.showLoading({
				title: '加载中'
			})
			setTimeout(() => {
				uni.hideLoading()
				this.isMessageShow = true
				this.getMessageList()
			}, 1600)
			this.timer = setInterval(() => {
				// console.log(uni.getStorageInfoSync('newMessageFlag'))
				
				if (uni.getStorageSync('newMessageFlag')) {
					// console.log('1111')
					uni.removeStorageSync('newMessageFlag')
					this.getMessageList()
				}
			}, 1200)
			
		},
		onHide() {
			clearInterval(this.timer)
			this.timer = null
		},

		onShow() {
			// this.getMessageList()
			if (uni.getStorageInfoSync('newMessageFlag')) {
				uni.removeStorageSync('newMessageFlag')
				this.getMessageList()
			}
		},
		data () {
			return {
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				],
				MessageList: [],
				isMessageShow: false,
				timer: null
			}
		},
		methods: {
			goToComment (index) {
				uni.navigateTo({
					url: './Comment?type=' + index
				})
			},
			// 点击删除 
			clickDel(index, index1) {
				console.log(index, index1)
				dcRichAlert.removeConversationList({username: this.MessageList[index].username}, result => {
					console.log(result)
					this.MessageList[index].show = false;
					if (result.result == 'sus') {
						this.MessageList.splice(index, 1);
						this.$u.toast("操作成功");
					} else {
						this.$u.toast("操作失败");
					}
				})
				
				
				
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.MessageList[index].show = true;
				this.MessageList.map((val, idx) => {
					if(index != idx) this.MessageList[idx].show = false;
				})
			},
			
			// 获取消息列表
			getMessageList () {
				
					dcRichAlert.getMyConversationList({}, result => { 
						console.log(result)
						if (result.result == 'fail') return ''
						
						if (uni.getSystemInfoSync().platform == 'android') {
							this.MessageList = result.conversationList
							this.MessageList.forEach((item, index) => {
								if (item.targetInfo != undefined) {
									item.avatar = item.targetInfo.avatar
									item.show = false
									item.username = item.targetInfo.username
									item.nickname = item.targetInfo.nickname
								} else {
									item.avatar = ''
									item.show = false
									item.username = item.targetInfo.username
									item.nickname = item.targetInfo.nickname
								}
							})
						} else {
							this.MessageList = result.result
							this.MessageList.forEach((item, index) => {
	
								item.avatar = item.targetInfo.avatar
								item.show = false
								item.username = item.targetId
								item.nickname = item.title
								
							})
						}
						
						// console.log(this.MessageList)
					})
				
			},
			
			// 进入聊天
			chatMsg (username, nickname, index) {
				console.log(index)
				this.MessageList[index].getUnReadMsgCnt = 0
				chat(username, nickname)
			}
		}
	}
</script>

<style lang="less">
	.message{
		padding: 0 36rpx;
		box-sizing: border-box;
		.message-top{
			width: 100%;
			height: 162rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #F4F4F4;
			box-sizing: border-box;
			.message-top-left{
				display: flex;
				align-items: center;
				image{
					width: 112rpx;
					height: 112rpx;
				}
				.message-top-left-text{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					padding-left: 26rpx;
					box-sizing: border-box;
				}
				
			}
			image{
				width: 16rpx;
				height: 28rpx;
			}
		}
		.message-list{
			width: 100%;
			.message-list-item{
				width: 100%;
				display: flex;
				
				height: 162rpx;
				display: flex;
				align-items: center;
				border-bottom: 1rpx solid #F4F4F4;
				box-sizing: border-box;
				position: relative;
				&:last-child{
					border-bottom: 0;
				}
				image{
					width: 110rpx;
					height: 110rpx;
					border-radius: 50%;
					
				}
				.redCircle{
					width: 40rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					color: #FFFFFF;
					border-radius: 50%;
					background-color: #f40;
				}
				.message-list-right{
					flex: 1;
					padding-left: 20rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.message-list-right-top{
						font-family: PingFangSC-Medium;
						font-size: 16px;
						color: #141414;
						letter-spacing: -0.39px;
						font-weight: bold;
					}
					.message-list-right-bottom{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #9F9F9F;
						letter-spacing: -0.34px;
					}
				}
			}
			
		}
	}
</style>
