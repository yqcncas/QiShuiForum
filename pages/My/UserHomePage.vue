<template>
	<view class="userhome-page" v-if="showLoadingFlag">
		<view class="userhome-page-header">
			<view class="back" style="position: absolute; left:40rpx; top: 70rpx;" @click="goBack">
				<image src="../../static/image/ych/back.png" mode="aspectFill" style="width: 18rpx; height: 34rpx;"></image>
			</view>
			<view class="user-avatar">
				<image :src="userInfoList.avatar ? userInfoList.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill" class="avatar" @click = "showBigAvatarImg(userInfoList.avatar)"></image>
				<image src="../../static/image/ych/my/22.png" mode="aspectFill" class="renzhen"></image>
			</view>
			<view class="user-info">
				<view class="user-info-name">{{userInfoList.userName}}</view>
				<view class="user-info-sex">
					<image src="../../static/image/ych/my/1.png" mode="aspectFill" v-if="userInfoList.sex == 0"></image>
					<image src="../../static/image/ych/my/2.png" mode="aspectFill" v-if="userInfoList.sex == 1"></image>
				</view>
				<view class="user-info-level">Lv.{{userInfoList.level}}</view>
			</view>
			<view class="count">
				<view class="count-left" @click="goToMyFriend(1)">
					<view class="count-left-name">关注</view>
					<view class="count-left-num">{{userInfoList.params.myFollow}}</view>
				</view>
				<view class="count-left" @click="goToMyFriend(2)">
					<view class="count-left-name">粉丝</view>
					<view class="count-left-num">{{userInfoList.params.myFans}}</view>
				</view>
			</view>
			<view class="sign">{{userInfoList.gxSign ? userInfoList.gxSign : '还没有个性签名，快去编辑吧！'}}</view>
		</view>
		<view class="userhome-page-center">
			<view class="userhome-page-center-title">全部帖子（{{HomePageListTotal}}）</view>
			<view class="tiezi-item" :class="{haveisMe: !isMe}" v-for="(item, index) in HomePageList" :key = "item.id" @click="goToArtDetail(item.id, item.userId)">
				<view class="tiezi-item-header">
					<view class="tiezi-item-header-left">
						<image :src="userInfoList.avatar ? userInfoList.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
						<view class="tiezi-item-header-right">
							<view class="tiezi-item-header-right-top">{{userInfoList.userName}}</view>
							<view class="tiezi-item-header-right-bottom">{{item.createTime}}</view>
						</view>
					</view>
					<view class="tiezi-item-header-r" v-if="isMe" @click.stop="deleteArt(item.id, index)">
						<image src="../../static/image/ych/index/delete.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="tiezi-item-center">{{item.content[0].content ? item.content[0].content : item.title}}</view>
				<view class="tiezi-item-image-box" v-if="item.isVideo == 0">
					
					<image :src="picItem" mode="aspectFill" v-for="(picItem, i) in item.content[0].pic" :key = "i" @click.stop = "showBigImg(picItem, item.content[0].pic)"></image>
					<!-- <image src="../../static/logo.png" mode="aspectFill"></image>
					<image src="../../static/logo.png" mode="aspectFill"></image>
					<image src="../../static/logo.png" mode="aspectFill"></image> -->
					
				</view>
				<view class="tiezi-item-image-box" v-if="item.isVideo == 1">
					<video :src="item.content[0].pic[0]" controls style="flex: 1;" v-show="!showShareBoxFlag"></video>
					<view class="blackBg" v-show="showShareBoxFlag" style="width: 100%; height: 430rpx; background-color: #000000;background-image: url('http://3n4w.oss-cn-shenzhen.aliyuncs.com/public/marker/aicard/wx/component/play.png');	background-repeat: no-repeat;	background-position: center;background-size: 60rpx;"></view>
				</view>
				<view class="share-box">
					<view class="share-left" @click.stop="handleShareFlag(item.id)">
						<image src="../../static/image/ych/my/23.png" mode=""></image>
						<view class="share-left-text">分享</view>
					</view>
					<view class="share-right">
						<image src="../../static/image/ych/my/6.png" mode=""></image>
						<view class="share-left-text">评论({{item.evaluateNum}})</view>
					</view>
				</view>
				<!-- <view class="line-3" v-if="index != 10"></view> -->
			</view>
			
		</view>
		<view class="userhome-page-button" v-if="!isMe"> 
			<view class="userhome-page-button-item" @click.stop="followUser(userInfoList.userId)">
				<image src="../../static/image/ych/index/22.png" mode="aspectFill" v-if="!userInfoList.followFlag"></image>
				<view class="userhome-page-button-item-text" :class="{attention: userInfoList.followFlag}">{{userInfoList.followFlag ? '已关注' : '关注'}}</view>
			</view>
			<view class="userhome-page-button-item" @click.stop="goToChat">
				<view class="userhome-page-button-item-right">私信</view>
			</view>
		</view>
		<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
		<shareBox :showShareBoxFlag = "showShareBoxFlag" @changeShowBoxFLag = "changeShowBoxFLag" @shareWx = "shareWx"  @shareFre = "shareFre"></shareBox>
	</view>
</template>

<script>
	import chat from '../../chat.js'
	export default {
		onLoad(options) {
			this.type = options.type
			this.userId = options.userId
			this.currentIndex = options.currentIndex
			this.initUserInfo()
			// if (this.type == 0) {
			this.initMyArtilce()
			// }
		},
		data () {
			return {
				showLoadingFlag: false,
				userId: '',
				type: 0,
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				HomePageList: [],
				HomePageListTotal: 0,
				userInfoList: {},
				isMe: false,
				showShareBoxFlag: false,
				currentIndex: 0,
				ArtId: 0
			}
		},
		onReachBottom () {
			this.initMyArtilce()
		},
		methods: {
			deleteArt (id, index) {
				console.log(id)
				uni.showModal({
				    title: '提示',
				    content: '确定删除该帖子么',
				    success: async (res)=> {
				        if (res.confirm) {
				            console.log('用户点击确定');
							let msg = await this.$fetch(this.$api.del_article, {id: id}, "POST", 'FORM')
							console.log(msg)
							uni.showToast({
								icon: 'none',
								title: msg.msg
							})
							if (msg.code == 0) {
								this.HomePageList.splice(index, 1)
								this.HomePageListTotal--
								if (this.HomePageListTotal <= 0) {
									this.HomePageListTotal = 0
								}
							}
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			// 去好友列表
			goToMyFriend (index) {
				uni.navigateTo({
					url: './MyFriend?type=' + index
				})
			},
			// 分享
			handleShareFlag (id) {
				console.log(id)
				this.ArtId = id
				this.showShareBoxFlag = true
			},
			//更改分享显示
			changeShowBoxFLag (newV) {
				console.log(newV)
				this.showShareBoxFlag = newV
			},
			// 微信分享
			shareWx () {
				
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://h5-download.qswvip.com/#/pages/RichText/RichText?code=" + uni.getStorageSync('userId') + '&userId=' + this.userId + '&ArtId=' + this.ArtId,
				    			
				    title: "汽水论坛分享",
				    summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
					imageUrl: '../../static/qslogo.png',
					success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
			shareFre () {
				
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
					href: "http://h5-download.qswvip.com/#/pages/RichText/RichText?code=" + uni.getStorageSync('userId') + '&userId=' + this.userId + '&ArtId=' + this.ArtId,
								
					title: "汽水论坛分享",
					summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
				    imageUrl: '../../static/qslogo.png',
					success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
			// 去私信
			goToChat () {
			
				chat('forum_' + this.userInfoList.userId, this.userInfoList.userName)
			
			},
			// 预览
			showBigAvatarImg (avatar) {
				if (!avatar) {
					avatar = '../../static/image/ych/avatar.png'
				}
				uni.previewImage({
					urls: [avatar]
				})
			},
			// 获取个人信息
			async initUserInfo () {
				let userId = uni.getStorageSync('userId')
				let res = await this.$fetch(this.$api.get_user_by_id, {userId: this.userId, fromUserId: userId}, "POST", 'FORM')
				console.log(res)
				this.userInfoList = res.data
				this.showLoadingFlag = true
				if (uni.getStorageSync('userId')) {
					this.isMe = this.userInfoList.userId == uni.getStorageSync('userId')
				}
				
			},
			// 我的帖子
			async initMyArtilce () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.myArticle, {pageNum: this.pageNum, pageSize: this.pageSize, userId: this.userId}, "POST", 'FORM')
				console.log(res)
				res.rows.forEach(item => {
					item.content = JSON.parse(item.content)
				})
				this.HomePageList = [...this.HomePageList, ...res.rows] 
				this.HomePageListTotal = res.total
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			// 预览图
			showBigImg (imgItem, imgItemList) {
				uni.previewImage({
				    current:imgItem,
				    urls: imgItemList    
				})
			},
			// 帖子详情
			goToArtDetail (id, userId) {
				uni.navigateTo({
					url: '../index/ArticleDetail?id=' + id + '&userId=' + userId
				})
			},
			
			async followUser (userId) {
				let res = await this.$fetch(this.$api.follow, {toUserId: userId}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					
					
					if (this.userInfoList.followFlag == 0) {
						this.userInfoList.followFlag = 1
						this.$set(this.userInfoList, 'followFlag', 1)
					} else {
						this.userInfoList.followFlag = 0
						this.$set(this.userInfoList, 'followFlag', 0)
					}
					if (this.type == 1) {
						let followIndex = {
							index: this.currentIndex,
							isFollow: this.userInfoList.followFlag
						}
						uni.setStorageSync('followIndex', followIndex)
					}
					
				} 
				
			},
		}
	}
</script>

<style lang="less">
	.userhome-page{
		// padding-bottom: 90rpx;
		.userhome-page-header{
			width: 100%;
			height: 456rpx;
			background-image: url(../../static/image/ych/my/28.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.user-avatar{
				position: relative;
				.avatar{
					width: 142rpx;
					height: 142rpx;
					border-radius: 50%;
				}
				.renzhen{
					width: 26rpx;
					height: 26rpx;
					position: absolute;
					right: 20rpx;
					bottom: 10rpx;
				}
			}
			.user-info{
				width: 100%;
				display: flex;
				// justify-content: center;
				// padding-left: 328rpx;
				justify-content: center;
				align-items: center;
				// padding-top: 18rpx;
				padding-bottom: 14rpx;
				box-sizing: border-box;
				.user-info-name{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #000000;
					letter-spacing: -0.34px;
					font-weight: bold;
				}
				.user-info-sex{
					margin: 0 6rpx;
					box-sizing: border-box;
					image{
						width: 32rpx;
						height: 32rpx;
						vertical-align: bottom;
					}
				}
				.user-info-level{
					font-family: PingFangSC-Medium;
					font-size: 12px;
					color: #FF7B30;
					letter-spacing: -0.24px;
					border: 1px solid #FF7B30;
					border-radius: 1px;
					padding: 0 2rpx;
					box-sizing: border-box;
				}
			}
			.count{
				width: 100%;
				padding-left: 270rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.count-left{
					display: flex;
					align-items: center;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.29px;
					&:nth-child(2){
						padding-left: 72rpx;
						box-sizing: border-box;
					}
					.count-left-name{
						padding-right: 10rpx;
						box-sizing: border-box;
					}
				}
			}
			.sign{
				width: 100%;
				padding: 0 30rpx;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #6A6A6A;
				letter-spacing: -0.29px;
				padding-top: 14rpx;
				text-align: center;
				display: -webkit-box;    
				-webkit-box-orient: vertical;    
				-webkit-line-clamp: 1;    //控制行数
				overflow: hidden;
			}
		}
		.userhome-page-center{
			.userhome-page-center-title{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #3F3F3F;
				letter-spacing: -0.39px;
				height: 86rpx;
				line-height: 86rpx;
				padding-left: 32rpx;
				border-bottom: 1rpx solid #f4f4f4;
			}
			.tiezi-item{
				padding-top: 14rpx;
				box-sizing: border-box;
				border-bottom: 6rpx solid #f4f4f4;
				&:last-child{
					// border: none;
					// padding-bottom: 90rpx;
					&.haveisMe{
						padding-bottom: 90rpx;
					}
				}
				.tiezi-item-header{
					padding-left: 32rpx;
					padding-right: 32rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-bottom: 14rpx;
					box-sizing: border-box;
					image{
						width: 92rpx;
						height: 92rpx;
						border-radius: 50%;
					}
					.tiezi-item-header-left{
						display: flex;
						align-items: center;
					}
					.tiezi-item-header-r{
						image{
							width: 32rpx;
							height: 32rpx;
						}
					}
					.tiezi-item-header-right{
						padding-left: 32rpx;
						box-sizing: border-box;
						.tiezi-item-header-right-top{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
							text-align: justify;
							font-weight: bold;
						}
						.tiezi-item-header-right-bottom{
							font-family: PingFangSC-Regular;
							font-size: 12px;
							color: #686868;
							letter-spacing: -0.24px;
							text-align: justify;
						}
					}
				}
				.tiezi-item-center{
					padding-left: 32rpx;
					padding-right: 32rpx;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					text-align: justify;
				}
				.tiezi-item-image-box{
					padding-left: 32rpx;
					padding-right: 32rpx;
					padding-bottom: 34rpx;
					box-sizing: border-box;
					display: flex;
					flex-wrap: wrap;
					// justify-content: space-between;
					image{
						width: 216rpx;
						height: 216rpx;
						margin-right: 16rpx;
						margin-top: 18rpx;
						box-sizing: border-box;
						&:nth-child(3n){
							margin-right: 0;
						}
					}
					
				}
				.share-box{
					width: 100%;
					height: 82rpx;
					background-color: #fff;
					display: flex;
					align-items: center;
					border-top: 1rpx solid #F4F4F4;
					.share-left, .share-right{
						width: 50%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						text-align: center;
						image{
							width: 32rpx;
							height: 32rpx;
							vertical-align: bottom;
						}
						.share-left-text{
							padding-left: 8rpx;
							font-family: PingFangSC-Regular;
							font-size: 14px;
							color: #3F3F3F;
							letter-spacing: -0.34px;
						}
					}
					.share-left{
						border-right: 1rpx solid #F4F4F4;
					}
				}
			}
					
		}
		.userhome-page-button{
			width: 100%;
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			background-color: #fff;
			border-top: 1rpx solid #f4f4f4;
			z-index: 99;
			.userhome-page-button-item{
				width: 50%;
				height: 86rpx;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 20rpx;
					height: 20rpx;
				}
				&:nth-child(1){
					border-right: 1rpx solid #f4f4f4;
				}
				.userhome-page-button-item-text{
					
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #FF7B30;
					letter-spacing: -0.34px;
					&.attention{
						color: #C4C4C4;
					}
				}
				.userhome-page-button-item-right{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #3F3F3F;
					letter-spacing: -0.34px;
				}
			}
		}
	}
</style>
