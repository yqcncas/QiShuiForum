<template>
	<view class="FootPrint">
		<view class="FootPrint-item" v-for="(item, index) in FootPrint" :key = "index" @click="goToArtDetail(item.articleId, item.userId)">
			<view class="FootPrint-item-title">{{item.article.title}}</view>
			<view class="FootPrint-item-timer">{{item.createTime}}</view>
		</view>
	<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.initFootPrint()
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 20,
				hasFlag: true,
				FootPrint: []
				
			}
		},
		methods: {
			
			async initFootPrint () {
				if (!this.hasFlag) return 
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.get_browse_record, {pageNum: this.pageNum, pageSize: this.pageSize}, 'POST', 'FORM')
				console.log(res)
				this.FootPrint = [...this.FootPrint, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
				this.FootPrint.forEach(item => {
					item.content = JSON.parse(item.content)
					item.pics = JSON.parse(item.pics)
				})
				
			},
			goToArtDetail (id, userId) {
				uni.navigateTo({
					url: '../index/ArticleDetail?id=' + id + '&userId=' + userId
				})
			}
		},
		onReachBottom() {
			this.initFootPrint()
		}
	}
</script>

<style lang="less">
	.FootPrint{
		.FootPrint-item{
			padding-top: 26rpx;
			padding-left: 30rpx;
			padding-right: 30rpx;
			padding-bottom: 22rpx;
			box-sizing: border-box;
			border-bottom: 1rpx solid #f4f4f4;
			box-sizing: border-box;
			.FootPrint-item-title{
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #262626;
				letter-spacing: 0.01px;
				display: -webkit-box;    
				-webkit-box-orient: vertical;    
				-webkit-line-clamp: 2;    //控制行数
				overflow: hidden;
				
				
			}
			.FootPrint-item-timer{
				width: 100%;
				font-family: PingFangSC-Regular;
				font-size: 11px;
				color: #262626;
				letter-spacing: 0.01px;
				padding-top: 22rpx;
				text-align: end;
			}
		}
	}
</style>
