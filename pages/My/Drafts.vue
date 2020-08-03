<template>
	<view class="drafts">
		<view class="drafts-item" v-for="(item, index) in draftsList" :key = "item.id" >
			<view class="drafts-item-left">
				<view class="drafts-item-left-top">{{item.createTime}}</view>
				<view class="drafts-item-left-bottom">{{item.content[0].content}}</view>
			</view>
			<view class="drafts-item-right" @click="delItem(item.id)">删除</view>
		</view>
		
		<u-empty  mode="data" v-if = "!draftsList.length" ></u-empty>
	</view>
</template>

<script>
	export default {
		onLoad () {
			this.myDraftsFn()
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 10,
				hasFlag: true,
				draftsList: [],
				delIndex: 0
			}
		},
		// 清空
		onNavigationBarButtonTap () {
			if (!this.draftsList.length) {
				return uni.showToast({
					icon: 'none',
					title: '暂无数据'
				})
			}
			this.delAllList()
			
		},
		methods: {
			// 获取数据
			async myDraftsFn () {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.myDrafts, {pageNum: this.pageNum, pageSize: this.pageSize}, "POST", 'FORM')
				console.log(res)
				res.rows.forEach(item => {
					item.content = JSON.parse(item.content)
				})
				this.draftsList = res.rows
				console.log(this.draftsList)
			},
			// 单删
			async delItem (id) {
				let res = await this.$fetch(this.$api.del_my_drafts, {id: id}, "POST", 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'success',
					title: res.msg
				})
				if (res.code == 0) {
					this.draftsList.forEach(async(item, index) => {
						if (item.id == id) {
							this.draftsList.splice(index, 1)
						}
					})
				}
			},
			// 清空
			async delAllList () {
				let res = await this.$fetch(this.$api.clear_my_drafts, {}, "POST", 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
				if (res.code == 0) {
					this.draftsList = []
				}
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100%;
		height: 100%;
	}
	.drafts{
		height: 100%;
		.drafts-item{
			padding-top: 24rpx;
			padding-left: 30rpx;
			padding-bottom: 16rpx;
			// padding-right: 30rpx;
			box-sizing: border-box;
			border-bottom: 1rpx solid #f4f4f4;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.drafts-item-left{
				flex: 1;
				border-right: 1rpx solid #f4f4f4;
				.drafts-item-left-top{
					font-family: PingFangSC-Regular;
					font-size: 11px;
					color: #262626;
					letter-spacing: 0.01px;
					padding-bottom: 6rpx;
					box-sizing: border-box;
				}
				.drafts-item-left-bottom{
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #262626;
					font-weight: bold;
					letter-spacing: 0.01px;
					display: -webkit-box;    
					-webkit-box-orient: vertical;    
					-webkit-line-clamp: 2;    //控制行数
					overflow: hidden;
				}
			}
			.drafts-item-right{
				width: 134rpx;
				height: 100%;
				text-align: center;
				line-height: 118rpx;
				font-family: PingFangSC-Medium;
				font-size: 14px;
				color: #FF3A3A;
				letter-spacing: 0.01px;
				
			}
		}
	}
</style>
