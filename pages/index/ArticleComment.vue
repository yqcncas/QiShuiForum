<template>
	<view class="ArticleComment">
		<view class="ArticleComment-header">
			<view class="ArticleComment-header-left">
				<image :src="commentHeader.avatar ? commentHeader.avatar :'../../static/image/ych/avatar.png'" mode="aspectFill" class="avatar"></image>
			</view>
			
			<view class="ArticleComment-header-right" @click="goToMyHomePage(commentHeader.userId)">
				<view class="ArticleComment-header-right-user">
					<view class="user-name">{{commentHeader.userName}}</view>
					<view class="user-level">Lv.1</view>
					<view class="user-bozhu" v-if="commentHeader.plateName">{{commentHeader.plateName}}板块版主</view>
				</view>
				<view class="ArticleComment-header-right-timer">{{commentHeader.createTime}}</view>
				<view class="ArticleComment-header-right-main">{{commentHeader.content}}</view>
			</view>
		</view>
		<view class="ArticleComment-center">
			<view class="ArticleComment-center-title">最新回复</view>
			<view class="ArticleComment-center-main">
				<view class="ArticleComment-center-main-item" v-for="(item, index) in commentBottom" :key = "index">
					<view class="ArticleComment-header-left" @click="goToMyHomePage(item.userId)">
						<image :src="item.avatar ? item.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill" class="avatar"></image>
					</view>
					
					<view class="ArticleComment-header-right">
						<view class="ArticleComment-header-right-user">
							<view class="user-name">{{item.userName}}</view>
							<view class="user-level">Lv.1</view>
						</view>
						<view class="ArticleComment-header-right-timer">{{item.createTime}}</view>
						<view class="ArticleComment-header-right-main">{{item.content}}</view>
					</view>
				</view>
			
			</view>
		</view>
		<view class="ArticleComment-submit">
			<view class="ArticleComment-submit-left">
				<image :src="myAvatar ? myAvatar :  '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
			</view>
			<view class="ArticleComment-submit-right">
				<input type="text" cursor-spacing = "30" v-model="sendText" confirm-type="send" placeholder="请输入回复内容" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A9A9A9;letter-spacing: -0.34px;"/>
			</view>
			<view class="ArticleComment-submit-send" :style="{color: sendText.trim() == '' ? '#c8c9cc' : '#ff9900' }" @click="sendMsg">发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.commentHeader = JSON.parse(options.commentInfo)
			console.log(this.commentHeader)
			if (uni.getStorageSync('myAvatar')) {
				this.myAvatar = uni.getStorageSync('myAvatar')
			}
			
				
			
			this.initComment()
		},
		data () {
			return {
				myAvatar: '',
				sendText: '',
				commentHeader: {},
				pageNum: 0,
				paegSize: 10,
				hasFlag: true,
				commentBottom: []
			}
		},
		methods: {
			// 获取数据
			async initComment () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.reply_list, {evaluatesId: this.commentHeader.id, pageNum: this.pageNum, pageSize: this.paegSize}, "POST", 'FORM')
				console.log(res)
				this.commentBottom = [...this.commentBottom, ...res.rows]
				this.hasFlag = this.pageNum * this.paegSize < res.total
			},
			// 去个人主页
			goToMyHomePage (id) {
				uni.navigateTo({
					url:'../My/UserHomePage?type='+ 2 + '&userId=' + id
				})
			},
			
			// 发送
			async sendMsg () {
				let res = await this.$fetch(this.$api.evaluate, {articleId: this.commentHeader.articleId, content: this.sendText, evaluateId: this.commentHeader.id,pushUserId: ''}, "POST", 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
				let avatar = '../../static/image/ych/avatar.png'
					let userName = ''
					let level  = '1'
					let plateName = ''
					if (uni.getStorageSync('userAvatar')) {
						avatar = uni.getStorageSync('userAvatar')
					}
					
					if (uni.getStorageSync('userName')) {
						userName = uni.getStorageSync('userName')
					}
					
					if (uni.getStorageSync('userLevel')) {
						level = uni.getStorageSync('userLevel')
					}
					
					if (uni.getStorageSync('plateName')) {
						plateName = uni.getStorageSync('plateName')
					}
					
					let createTime = this.$dayjs().format('YYYY-MM-DD HH:mm:ss') 
					
					this.commentBottom.unshift({
						avatar,
						userName,
						level,
						plateName,
						createTime,
						content: this.sendText
					})
				}
				
				
			}
		}
	}
</script>

<style lang="less">
	.ArticleComment{
		.ArticleComment-header{
			width: 100%;
			padding-top: 24rpx;
			padding-right: 34rpx;
			padding-bottom: 24rpx;
			padding-left: 32rpx;
			box-sizing: border-box;
			display: flex;
			border-bottom: 16rpx solid #f4f4f4;
			box-sizing: border-box;
			.ArticleComment-header-left{
				.avatar{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
			}
			
			.ArticleComment-header-right{
				padding-left: 32rpx;
				box-sizing: border-box;
				.ArticleComment-header-right-user{
					display: flex;
					align-items: center;
					.user-name{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
					}
					.user-level{
						font-family: PingFangSC-Medium;
						font-size: 10px;
						color: #FF7B30;
						letter-spacing: -0.24px;
						background: #FFFFFF;
						border: 1px solid #FF7B30;
						border-radius: 1px;
						padding: 0 6rpx;
					
						margin: 0 16rpx;
						box-sizing: border-box;
					}
					.user-bozhu{
						font-family: PingFangSC-Medium;
						font-size: 8px;
						color: #FFFFFF;
						letter-spacing: -0.19px;
						padding: 0 10rpx;
						background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
						border-radius: 1px;
						box-sizing: border-box;
					}
				}
				.ArticleComment-header-right-timer{
					font-family: PingFangSC-Regular;
					font-size: 10px;
					color: #686868;
					letter-spacing: -0.24px;
					padding-top: 8rpx;
					padding-bottom: 4rpx;
					box-sizing: border-box;
				}
				.ArticleComment-header-right-main{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
				}
			}
		
		}
		.ArticleComment-center{
			padding-bottom: 120rpx;
			.ArticleComment-center-title{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #3F3F3F;
				letter-spacing: -0.39px;
				padding-top: 24rpx;
				padding-left: 32rpx;
				font-weight: bold;
				box-sizing: border-box;
			}
			.ArticleComment-center-main{
				.ArticleComment-center-main-item{
					padding: 20rpx 32rpx;
					box-sizing: border-box;
					border-bottom: 6rpx solid #f4f4f4;
					display: flex;
					&:last-child{
						border: none;
					}
					.ArticleComment-header-left{
						.avatar{
							width: 92rpx;
							height: 92rpx;
							border-radius: 50%;
						}
					}
					
					.ArticleComment-header-right{
						padding-left: 32rpx;
						box-sizing: border-box;
						.ArticleComment-header-right-user{
							display: flex;
							align-items: center;
							.user-name{
								font-family: PingFangSC-Medium;
								font-size: 14px;
								color: #141414;
								letter-spacing: -0.34px;
							}
							.user-level{
								font-family: PingFangSC-Medium;
								font-size: 10px;
								color: #FF7B30;
								letter-spacing: -0.24px;
								background: #FFFFFF;
								border: 1px solid #FF7B30;
								border-radius: 1px;
								padding: 0 6rpx;
							
								margin: 0 16rpx;
								box-sizing: border-box;
							}
							.user-bozhu{
								font-family: PingFangSC-Medium;
								font-size: 8px;
								color: #FFFFFF;
								letter-spacing: -0.19px;
								padding: 0 10rpx;
								background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
								border-radius: 1px;
								box-sizing: border-box;
							}
						}
						.ArticleComment-header-right-timer{
							font-family: PingFangSC-Regular;
							font-size: 10px;
							color: #686868;
							letter-spacing: -0.24px;
							padding-top: 8rpx;
							padding-bottom: 4rpx;
							box-sizing: border-box;
						}
						.ArticleComment-header-right-main{
							font-family: PingFangSC-Regular;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
						}
					}
							
				}
			}
		}
		.ArticleComment-submit{
			width: 100%;
			height: 108rpx;
			display: flex;
			align-items: center;
			padding-left: 32rpx;
			// padding-right: 34rpx;
			background-color: #fff;
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
			z-index: 999;
			.ArticleComment-submit-left{
				padding-right: 12rpx;
				box-sizing: border-box;
				image{
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
				}
			}
			.ArticleComment-submit-right{
				flex: 1;
				padding: 12rpx 32rpx;
				box-sizing: border-box;
				background: #EFEFEF;
				border-radius: 17px;
				input{
					font-size: 14px;
				}
			}
			.ArticleComment-submit-send{
				padding-right: 17px;
				padding-left: 17px;
				height: 100%;
				line-height: 54px;
				box-sizing: border-box;
			}
		}
	}

</style>
