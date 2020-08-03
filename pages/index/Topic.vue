<template>
	<view class="Topic">
		<view class="Topic-item" v-for="(item, index) in huatiListArr" :key = "index" @click="goToTopicDetail(item.id, item.name, item.titlePic, item.articleNum)">
			<view class="Topic-item-left">
				<image :src="item.titlePic" mode="aspectFill"></image>
			</view>
			<view class="Topic-item-right">
				<view class="Topic-item-right-top">{{item.name}}</view>
				<view class="Topic-item-right-bottom">{{item.articleNum}}条讨论</view>
			</view>
		</view>
		<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.huatiList()
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				huatiListArr: []
			}
		},
		methods: {
			goToTopicDetail (id, name, titlePic, articleNum) {
				uni.navigateTo({
					url: './TopicDetail?id=' + id + '&name=' + name + '&titlePic=' + titlePic + '&articleNum=' + articleNum
				})
			},
			async huatiList () {
				if (!this.hasFlag) return 
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.new_label, {pageNum: this.pageNum, pageSize: this.pageSize}, 'POST', 'FORM')
				console.log(res)
				this.huatiListArr = [...this.huatiListArr, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			}
		},
		onReachBottom() {
			this.huatiList()
		}
	}
</script>

<style lang="less">
	.Topic{
		
		.Topic-item{
			height: 176rpx;
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			border-bottom: 10rpx solid #f4f4f4;
			box-sizing: border-box;
			&:last-child{
				border-bottom: 0;
			}
			.Topic-item-left{
				image{
					width: 144rpx;
					height: 144rpx;
				}
			}
			.Topic-item-right{
				padding-left: 36rpx;
				box-sizing: border-box;
				.Topic-item-right-top{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					font-weight: bold;
					padding-bottom: 40rpx;
					box-sizing: border-box;
				}
				.Topic-item-right-bottom{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #5B5B5B;
					letter-spacing: -0.34px;
				}
			}
		}
	}
</style>
