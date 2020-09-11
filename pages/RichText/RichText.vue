<template>
	<view class="rich-text">
		<view class="ArticleDetail-center" v-if="type">
			<view class="ArticleDetail-center-title">{{title}}</view>
			<view class="ArticleDetail-center-top">
				<view class="ArticleDetail-center-top-left" @click="goToMyHomePage(userInfo.userId)">
					<image :src="userInfo.avatar ? userInfo.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
					<view class="userInfo">
						<view class="userInfo-top">
							<view class="userInfo-top-name">{{userInfo.name}}</view>
							<!-- <view class="userInfo-top-level">Lv.{{userInfo.level}}</view> -->
				<!-- 			<view class="userInfo-top-bozhu" v-if="userInfo.plateName">{{userInfo.plateName}}板块版主</view>
							<view class="userInfo-top-pla"  v-for="(pla, i) in ArtDetail.userLabel" :key = "i">{{pla}}</view> -->
						</view>
						<view class="userInfo-bottom">{{userInfo.createTime}}</view>
					</view>
				</view>
				<view class="ArticleDetail-center-top-right" v-if="isShow" :style="{borderColor: userInfo.followUserFlag ? '#c8c9cc' : '#FF7B30' }" @click="followUser(userInfo.followUserFlag)">
					<image src="../../static/image/ych/index/22.png" mode="" v-if="!userInfo.followUserFlag"></image>
					<view class="ArticleDetail-center-top-right-text" :style="{color: userInfo.followUserFlag ? '#c8c9cc' : '#FF7B30' }">{{userInfo.followUserFlag ? '已关注' : '关注'}}</view>
				
				</view>
			</view>
		</view>	
		<jyf-parser :html="html" ref="article"></jyf-parser>
		<view class="ArticleDetail-footer-main-item-advertising-center" v-if="!isRichText">
			<image :src="gGPic" mode="aspectFill" v-for="(gGPic, i) in pics" :key = "i" @click = "bigImg(gGPic, pics)"></image>
							
		</view>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		components: {
		    jyfParser
		},
		onLoad(options) {
			if (options.type) {
				this.type = options.type
				this.adid = options.adid
				this.initRichAdvertText()
			}
			if (options.RichMain) {
				console.log(uni.getStorageSync('RichMainText'))
				if (uni.getStorageSync('RichMainText')) {
					this.html = uni.getStorageSync('RichMainText')
					uni.removeStorageSync('RichMainText')
				} else {
					this.html = options.RichMain
				}
				
				console.log(this.html)
				var reg = /<\/?[^>]*>/g
				this.isRichText =  reg.test(this.html)
			}
			if (options.title) {
				this.title = options.title
				if (!this.type) {
					uni.setNavigationBarTitle({
						title: this.title
					})
				}
				
			}
			if (options.pics) {
				this.pics = JSON.parse(options.pics)
			}
			if (options.id) {
				this.id = options.id
				this.initRichText()
			}
			if (options.bannerId) {
				this.id = options.bannerId
				this.initRichBannerText()
				
			}
			
			
		},
	    data() {
		    return {
		      html: '',
			  title: '',
			  isRichText: false,
			  pics: [],
			  id: 0,
			  type: 0,
			  adid: 0,
			  userInfo: {
				  name: '',
				  avatar: '',
				  createTime: '',
				  followUserFlag: '',
				  userId: ''
			  }
		    }
	    },
		computed:{
			isShow () { 
				return this.userInfo.userId != uni.getStorageSync('userId')
			}
		},
		methods: {
			bigImg (img, imgList) {
				uni.previewImage({
					current: img,
					urls: imgList
				})
			},
			async initRichText () {
				let res = await this.$fetch(this.$api.get_all_explain, {}, 'GET', 'FROM')
				console.log(res)
				if (this.id == 14) {
					this.html = res.data[0].content
					uni.setNavigationBarTitle({
						title: res.data[0].title
					})
				} else if (this.id == 15) {
					this.html = res.data[1].content
					uni.setNavigationBarTitle({
						title: res.data[1].title
					})
				} else if (this.id == 16) {
					this.html = res.data[2].content
					uni.setNavigationBarTitle({
						title: res.data[2].title
					})
				}else if (this.id == 17) {
					this.html = res.data[3].content
					uni.setNavigationBarTitle({
						title: res.data[3].title
					})
				}
				else if (this.id == 18) {
					this.html = res.data[4].content
					uni.setNavigationBarTitle({
						title: res.data[4].title
					})
				}
				else if (this.id == 20) {
					this.html = res.data[6].content
					uni.setNavigationBarTitle({
						title: res.data[6].title
					})
				}
			},
			async initRichBannerText () {
				// console.log(this.id)
				if (!this.type) {
					let res = await this.$fetch(this.$api.get_advert_by_id, {id: this.id}, "post", 'form')
					console.log(res)
					this.html = res.data.content
				}
				
				
			},
			async initRichAdvertText () {
				let userId = uni.getStorageSync('userId')
				let {data: res} = await this.$fetch(this.$api.get_advert_by_id, {id: this.adid, userId: userId}, "post", 'form')
				if (this.type) {
					this.userInfo = {
						name: res.createBy,
						avatar: res.avatar,
						createTime: res.createTime,
						followUserFlag: res.followUserFlag,
						userId: res.userId
					}
				}
				console.log(this.userInfo)
			},
			async followUser (index) {
				console.log(index)
				
				
				let res = await this.$fetch(this.$api.follow, {toUserId: this.userInfo.userId}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					if (index == 0) {
						this.$set(this.userInfo, 'followUserFlag', 1)
					} else {
						this.$set(this.userInfo, 'followUserFlag', 0)
					}
				}
				
			}
		}
	}
</script>

<style lang="less">
	.ArticleDetail-footer-main-item-advertising-center{
		display: flex;
		flex-wrap: wrap;
		image{
			width: 216rpx;
			height: 216rpx;
			margin-right: 16rpx;
			margin-top: 20rpx;
			box-sizing: border-box;
			&:nth-child(3n){
				margin-right: 0;
			}
		}
	}
	.ArticleDetail-center{
		padding-top: 10rpx;
		.ArticleDetail-center-title{
			font-size: 20px;
			font-weight: bold;
			padding-left: 32rpx;
			padding-right: 32rpx;
			padding-bottom: 10rpx;
			display: -webkit-box;    
			-webkit-box-orient: vertical;    
			-webkit-line-clamp: 2;    //控制行数
			overflow: hidden;
			box-sizing: border-box;
		}
		.ArticleDetail-center-top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 16rpx;
			padding-right: 34rpx;
			padding-bottom: 18rpx;
			padding-left: 32rpx;
			box-sizing: border-box;
			.ArticleDetail-center-top-left{
				display: flex;
				align-items: center;
				image{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
				.userInfo{
					padding-left: 32rpx;
					box-sizing: border-box;
					.userInfo-top{
						display: flex;
						align-items: center;
						padding-bottom: 8rpx;
						box-sizing: border-box;
						.userInfo-top-name{
							font-family: PingFangSC-Medium;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
						}
						.userInfo-top-level{
							font-family: PingFangSC-Medium;
							font-size: 12px;
							color: #FF7B30;
							letter-spacing: -0.24px;
							background: #FFFFFF;
							border: 1px solid #FF7B30;
							border-radius: 1px;
							padding: 0 6rpx;
							box-sizing: border-box;
							margin: 0 16rpx;
						}
						.userInfo-top-bozhu{
							padding: 0 10rpx;
							box-sizing: border-box;
							background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
							border-radius: 1px;
							font-family: PingFangSC-Medium;
							font-size: 8px;
							color: #FFFFFF;
							letter-spacing: -0.19px;
						}
						.userInfo-top-pla{
							padding: 0 10rpx;
							box-sizing: border-box;
							background-image: linear-gradient(180deg, #F99788 0%, #F05E50 100%);
							border-radius: 1px;
							font-family: PingFangSC-Medium;
							font-size: 8px;
							color: #FFFFFF;
							letter-spacing: -0.19px;
							margin-right: 10rpx;
							box-sizing: border-box;
							
						}
					}
					.userInfo-bottom{
						font-family: PingFangSC-Regular;
						font-size: 12px;
						color: #686868;
						letter-spacing: -0.24px;
					}
				}
			}
			.ArticleDetail-center-top-right{
				height: 40rpx;
				padding: 0 14rpx;
				box-sizing: border-box;
				background: #FFFFFF;
				border: 1px solid #FF7B30;
				border-radius: 10px;
				display: flex;
				align-items: center;
				image{
					width: 20rpx;
					height: 20rpx;
				}
				.ArticleDetail-center-top-right-text{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #FF7B30;
					letter-spacing: -0.34px;
					padding-left: 6rpx;
					box-sizing: border-box;
				}
			}
		}
		.ArticleDetail-center-main{
			padding-left: 36rpx;
			padding-right: 34rpx;
			padding-bottom: 30rpx;
			box-sizing: border-box;
			.ArticleDetail-center-main-title{
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.39px;
				font-weight: bold;
			}
			.ArticleDetail-center-main-center{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.34px;
			}
			.ArticleDetail-center-main-img-box{
				padding-top: 10rpx;
				display: flex;
				flex-wrap: wrap;
				image{
					width: 216rpx;
					height: 216rpx;
					margin-right: 16rpx;
					margin-top: 10rpx;
					box-sizing: border-box;
					
					&:nth-child(3n){
						margin-right: 0;
					}
					&:nth-child(1){
						margin-top: 0;
					}
					&:nth-child(2){
						margin-top: 0;
					}
					&:nth-child(3){
						margin-top: 0;
					}
				}
			}
			.ArticleDetail-center-main-footer-box{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.ArticleDetail-center-main-footer-left{
					display: inline-block;
					padding: 0 28rpx;
					background: #909399;
					border-radius: 24rpx;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #FFFFFF;
					letter-spacing: -0.34px;
					.ArticleDetail-center-main-footer-left-box{
						display: flex;
						align-items: center;
						image{
							width: 32rpx;
							height: 32rpx;
							margin-right: 10rpx;
						}
					}
				}
				
				.ArticleDetail-center-main-footer{
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #686868;
					letter-spacing: -0.24px;
					text-align: end;
				}
			}
			
		}
	}
		
</style>
