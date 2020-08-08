<template>
	<view class="HouseDetail">
		<view class="HouseDetail-header">
			<image :src="HouseDetailHeader.titlePic" mode="aspectFill"></image>
		</view>
		<view class="HouseDetail-center" @click="goToRichText">
			<view class="HouseDetail-center-bg" :style="{backgroundImage: type == 1 ? `url(../../static/image/ych/Market/4.png)` : `url(../../static/image/ych/Market/5.png)`}">
				<view class="HouseDetail-center-bg-title">{{HouseDetailHeader.title}}</view>
				<view class="HouseDetail-center-bg-main">{{HouseDetailHeader.brief}}</view>
			</view>
		</view>
		<view class="line-3"></view>
		<ArticleMain @ArticleMainClick = "ArticleMainClick" :ArticleList = "ArticleMainList" :inType = "'HouseDetail'"></ArticleMain>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
			this.id = options.id
			this.initHouseDetail()
			this.initHouserBottom()
		},
		data () {
			return {
				type: 0, // 0车 1房
				id: 0,
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				HouseDetailHeader: {},
				ArticleMainList: []
			}
		},
		methods: {
			ArticleMainClick (index, userId, item) {
				console.log(index)
				console.log(item)
				// uni.navigateTo({
				// 	url: '../index/ArticleDetail'
				// })
				uni.navigateTo({
					url: '../RichText/RichText?RichMain=' + item.content + '&title=' + item.title
				})
			},
			// 头部数据
			async initHouseDetail () {
				let res = await this.$fetch(this.$api.hot_detail, {id: this.id}, 'POST', 'FORM')
				console.log(res)
				this.HouseDetailHeader = res.data
			},
			//　列表数据
			async initHouserBottom () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.hot_special, {id: this.id, pageNum: this.pageNum, pageSize: this.pageSize}, 'POST', 'FORM')
				console.log(res)
				res.rows.forEach(item => {
					item.pics = item.titlePic.split(',')
					item.isVideo = 0
				})
				this.ArticleMainList = [...this.ArticleMainList, ...res.rows]
				
				this.hasFlag = this.pageNum * this.pageSize < res.rows
			},
			// 去富文本
			goToRichText () {
				uni.navigateTo({
					url: '../RichText/RichText?RichMain=' + this.HouseDetailHeader.content + '&title=' +  this.HouseDetailHeader.title
				})
			}
		}
	}
</script>

<style lang="less">
	.HouseDetail{
		.HouseDetail-header{
			image{
				width: 100%;
				height: 378rpx;
			}
		}
		.HouseDetail-center{
			width: 100%;
			height: 252rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.HouseDetail-center-bg{
				width: 600rpx;
				height: 200rpx;
				// background-image: url(../../static/image/ych/Market/4.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding-bottom: 18rpx;
				.HouseDetail-center-bg-title{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #FF682D;
					letter-spacing: -0.34px;
					text-align: center;
					padding-top: 46rpx;
				}
				.HouseDetail-center-bg-main{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					padding: 0 30rpx;
					// padding-bottom: 18rpx;
					box-sizing: border-box;
					display: -webkit-box;    
					-webkit-box-orient: vertical;    
					-webkit-line-clamp: 2;    //控制行数
					overflow: hidden;
				}
			}
		}
	}
</style>
