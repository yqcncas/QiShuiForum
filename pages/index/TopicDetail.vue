<template>
	<view class="topic-detail">
		<view class="topic-detail-header">
			<image :src="titlePic" mode="aspectFill"></image>
			<view class="topic-detail-header-right">
				<view class="topic-detail-header-right-top">{{name}}</view>
				<view class="topic-detail-header-right-bottom">{{articleNum}}条讨论</view>
			</view>
		</view>
		<view class="line-3"></view>
		<view class="tiezi-item" v-for="(item, index) in artList" :key = "index" @click="goToArtDetail(item.id, item.userId, index)">
			<view class="tiezi-item-header">
				<image :src="item.avatar ? item.avatar : '../../static/image/ych/avatar.png' " mode="aspectFill"></image>
				<view class="tiezi-item-header-right">
					<view class="tiezi-item-header-right-top">{{item.userName}}</view>
					<view class="tiezi-item-header-right-bottom">{{item.createTime}}</view>
				</view>
			</view>
			<view class="tiezi-item-center">{{item.content[0].content}}</view>
			<view class="tiezi-item-image-box">
				
				<image :src="contentImg" mode="aspectFill" v-for="contentImg in item.content[0].pic" :key = "contentImg"></image>

			</view>
			<view class="share-box">
				<view class="share-left" @click.stop="handleShareFlag">
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
		<shareBox :showShareBoxFlag = "showShareBoxFlag" @changeShowBoxFLag = "changeShowBoxFLag" @shareWx = "shareWx"  @shareFre = "shareFre"></shareBox>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.articleNum = options.articleNum
			this.name = options.name
			this.titlePic = options.titlePic
			this.initTopicDetal()
		},
		onShow() {
			if (uni.getStorageSync('sendSuccessIndex')) {
				let topPicInfo = uni.getStorageSync('sendSuccessIndex')
				this.artList[topPicInfo.sendIndex].evaluateNum += topPicInfo.sendCount
				uni.removeStorageSync('sendSuccessIndex')
			}
		},
		data () {
			return {
				id: 0,
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				articleNum: 0,
				name: '',
				titlePic: '',
				artList: [],
				showShareBoxFlag: false
			}
		},
		methods: {
			async initTopicDetal() {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.artivle_list, {pageNum: this.pageNum, pageSize: this.pageSize, labelId: this.id}, 'POST', 'FORM')
				console.log(res)
				res.rows.forEach((item, index) => {
					item.content = JSON.parse(item.content)
					item.pics = JSON.parse(item.pics)
					item.isGg = false
				})
				this.artList = [...this.artList, ...res.rows]
				console.log(this.artList)
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			goToArtDetail (id, userId, index) {
				uni.navigateTo({
					url: './ArticleDetail?id=' + id + '&userId=' + userId + '&index=' + index + '&TopArtType=' + 1
				})
			},
			// 分享
			handleShareFlag () {
				this.showShareBoxFlag = true
			},
			//更改分享显示
			changeShowBoxFLag (newV) {
				this.showShareBoxFlag = newV
			},
			// 微信分享
			shareWx () {
				
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
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
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
			
		}
	}
</script>

<style lang="less">
	.topic-detail{
		.topic-detail-header{
			// width: 100%;
			// height: 194rpx;
			padding: 0 32rpx;
			padding-top: 36rpx;
			padding-bottom: 14rpx;
			box-sizing: border-box;
			display: flex;
			// align-items: center;
			align-items: flex-end;
			image{
				width: 144rpx;
				height: 144rpx;
			}
			.topic-detail-header-right{
				height: 100%;
				padding-left: 28rpx;
				box-sizing: border-box;
				.topic-detail-header-right-top{
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #141414;
					letter-spacing: -0.39px;
					font-weight: bold;
					padding-bottom: 14rpx;
					box-sizing: border-box;
				}
				.topic-detail-header-right-bottom{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #5B5B5B;
					letter-spacing: -0.34px;
				}
			}
		}
		.tiezi-item{
			padding-top: 14rpx;
			box-sizing: border-box;
			border-bottom: 6rpx solid #F4F4F4;
			&:last-child{
				// border-bottom: 0
			}
			.tiezi-item-header{
				padding-left: 32rpx;
				padding-right: 32rpx;
				display: flex;
				align-items: center;
				padding-bottom: 14rpx;
				box-sizing: border-box;
				image{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
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
						font-size: 10px;
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
</style>
