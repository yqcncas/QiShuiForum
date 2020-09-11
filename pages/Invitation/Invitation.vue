<template>
	<view class="Invitation">
		<mescroll-body ref="mescrollRef"  @down="downCallback" :up="upOption">
		<!-- 头部导航 -->
		<view class="Invitation-header">
			<view class="Invitation-header-top">
<!-- 				<swiper class="tieziSwiper" :indicator-dots="true"  style="width:100%;height: 366rpx;">
					<swiper-item v-for="(item, index) in navTab" :key = "index">
						<view class="swiper-item swiper-flex-box">
							<view class="Invitation-header-top-item" v-for="(it, i) in item" :key = "i" @click="goToPage(i, it.id, it.plateName)">
								<image :src="it.platePic" mode="aspectFill"></image>
								<view class="Invitation-header-top-item-text">{{it.plateName}}</view>
							</view>
						</view>
					</swiper-item>

				</swiper> -->
				
				<view class="Invitation-header-top-item" v-for="(item, index) in navTab" :key = "index" @click="goToPage(index, item.id, item.plateName)">
					<image :src="item.platePic" mode="aspectFill"></image>
					<view class="Invitation-header-top-item-text">{{item.plateName}}</view>
				</view>
				<view class="watchMoreorLittle">
					<view class="more-box" v-if="watchMoreFlag" @click="handleWatchMoreFlag">
						查看更多
						<image src="../../static/image/down.png" mode="aspectFill"></image>
					</view>
					<view class="more-box" v-if="!watchMoreFlag" @click="handleWatchMoreFlag">
						收起
						<image src="../../static/image/top.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="line-7"></view>
		</view>
		<!-- 置顶 -->
		<!-- <Stick :StickList = "topArtList" @handleStick = "handleStick"></Stick> -->
		<!-- 底部导航 -->
		<view class="line-3"></view>
		<NavButton :navleft="'最新发布'" :navright="'精华帖'" :navIndex = "navIndex" @handleNavIndex = "handleNavIndex"></NavButton>
		<view class="line-3"></view>
		<ArticleMain @ArticleMainClick = "ArticleMainClick" :ArticleList = "artList" :hasFlag = "hasFlag"></ArticleMain>
		<Fab @trigger = "trigger"></Fab>
		</mescroll-body>
	</view>
</template>

<script>
	import * as _ from 'lodash'
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		onLoad() {
			
			if (uni.getStorageSync('userId')) {
				this.userId = uni.getStorageSync('userId')
			}
			if (uni.getStorageSync('adcode')) {
				this.adcode = uni.getStorageSync('adcode')
			}
			
			this.initAllPlate()
			this.initArtList()
			this.initTopArt()
		},
		onShow() {
			
		},
		onTabItemTap (e) {
			if (uni.getStorageSync('adcode')) {
				this.adcode = uni.getStorageSync('adcode')
			}
			this.downCallback()
		},
		data () {
			return {
				userId: '',
				navTab: [], 
				navIndex: 0,
				isCreamFlag: 0,
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				artList: [],
				topArtList: [],
				upOption: {
					use: false,
					toTop: {
						bottom: 200
					}
				},
				watchMoreFlag: true,
				adcode: ''
			}
		},
		onReachBottom() {
			this.initArtList()
		},
		methods: {
			downCallback () {
				this.pageNum = 0
				this.pageSize = 10
				this.hasFlag = true
				this.artList = [],
				this.topArtList = [],
				this.initTopArt()
				this.initArtList()
				this.mescroll.endDownScroll()
				
			},
			handleWatchMoreFlag () {
				this.watchMoreFlag = !this.watchMoreFlag
				this.initAllPlate()
			},
			// 去发布
			trigger(index) {
				if (index == 0) {
					uni.navigateTo({
						url: '../index/Publish?type=' + 0
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: '../index/Publish?type=' + 1
					})
				} else {
					uni.navigateTo({
						url: '../index/Publish?type=' + 2
					})
				}
			},
			// 获取所有版块
			async initAllPlate () {
				
				let res = await this.$fetch(this.$api.getAllPlate, {}, 'POST', 'FORM')
				console.log(res)
				if (this.watchMoreFlag) {
					this.navTab = res.data.slice(0, 6)
				} else {
					this.navTab = res.data
				}
				
				// 
				this.navTab.splice(4,0,{platePic: '../../static/image/ych/index/8.png' , plateName: '商城'})
				this.navTab.splice(5,0,{platePic: '../../static/image/ych/index/9.png' , plateName: '广场', id: 'gc'})
			
				// this.navTab = _.chunk(this.navTab, 8)
			},
			// 获取文章
			async initArtList () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				console.log(this.adcode)
				let res = await this.$fetch(this.$api.artivle_list, {adcode: this.adcode, isCreamFlag: this.isCreamFlag, pageNum: this.pageNum, pageSize: this.pageSize, userId: this.userId}, 'POST', 'FORM')
				console.log(res)
				res.rows.forEach((item, index) => {
					item.content = JSON.parse(item.content)
					item.pics = JSON.parse(item.pics)
					item.isGg = false
				})
				this.artList = [...this.artList, ...res.rows]
				let obj = {};
				// 要去重的数组
				this.artList = this.artList.reduce((cur,next) => {
				    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
				    return cur;
				},[]) //设置cur默认类型为数组，并且初始值为空的数组
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			handleNavIndex (index) {
				this.navIndex = index
				this.pageNum = 0
				this.hasFlag = true
				this.artList = []
				if (index == 0) {
					this.isCreamFlag = 0
				} else {
					this.isCreamFlag = 1
				}
				this.initArtList()
			},
			ArticleMainClick (id, userId, item) {
			 	uni.navigateTo({
			 		url: '../index/ArticleDetail?id='+ id + '&userId=' + userId
			 	})
			},
			// 顶部导航跳转
			goToPage (index, id, title) {
				console.log(index)
				console.log(id)
				console.log(title)
				if (index == 4 && title == '商城') {
					uni.switchTab({
						url:'../Market/Market'
					})
				} else if (index == 4 && title == '找租房') {
					uni.navigateTo({
						url: '../HouseProperty/HouseProperty'
					})
				}else {
					uni.navigateTo({
						url: '../HouseProperty/House?type=' + id + '&title=' + title
					})
				}	
				
			}, 
			// 置顶文章列表
			async initTopArt() {
				let res = await this.$fetch(this.$api.top_list, {type: ''}, "POST", 'FORM')
				console.log(res)
				this.topArtList = res.data
			},
			// 置顶文章跳转
			handleStick (id, userId) {
				uni.navigateTo({
					url: '../index/ArticleDetail?id='+ id + '&userId=' + userId
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100%;
	}
	.Invitation{
		width: 100%;
		.Invitation-header{
			width: 100%;
			.Invitation-header-top{
				display: flex;
				flex-wrap: wrap;
				padding-top: 30rpx;
				box-sizing: border-box;
				.swiper-flex-box{
					display: flex;
					flex-wrap: wrap;
					padding-top: 30rpx;
					box-sizing: border-box;
				}
				.Invitation-header-top-item{
					width: 25%;
					display: flex;
					flex-direction: column;
					align-items: center;
					image{
						width: 92rpx;
						height: 92rpx;
						border-radius: 50%;
					}
					.Invitation-header-top-item-text{
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #545454;
						letter-spacing: -0.29px;
						padding-top: 8rpx;
						padding-bottom: 36rpx;
						box-sizing: border-box;
					}
				}
				.watchMoreorLittle{
					width: 100%;
					padding-bottom: 20rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: center;
					color: rgb(0, 122, 255);
					image{
						width: 32rpx;
						height: 32rpx;
					}
					.more-box{
						display: flex;
						align-items: center;
					}
				}
			}
		}
	}
</style>
<style>
	.uni-fab__circle{
		transform: scale(0.6) !important;
	}
	.uni-fab{
		transform: scale(0.9) !important;
	}
</style>
