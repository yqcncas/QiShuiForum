<template>
	<view class="comment">
		<view class="comment-item" v-for="(item, index) in commentList" :key = "item.id">
			<view class="avatar">
				<image :src="item.avatar ? item.avatar : '../../static/image/ych/avatar.png'" mode="aspectFill"></image>
			</view>
			
			<view class="comment-item-right">
				<view class="comment-item-right-top">
					<view class="comment-item-right-top-left">
						<view class="comment-item-right-top-left-t">
							<view class="comment-item-right-top-left-t-name">{{item.userName}}</view>
							<view class="comment-item-right-top-left-t-level">Lv.{{item.level}}</view>
						</view>
						<view class="comment-item-right-top-left-b">{{item.createTime}}</view>
					</view>
					<view class="comment-item-right-top-right" @click="delComment(item.id, index)">
						<image src="../../static/image/ych/index/delete.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="comment-item-right-center">{{item.content}}</view>
				<view class="comment-item-right-footer" @click="goToArtDetail(item.articleId, item.userId)">{{item.title}}</view>
					
				
			</view>
		
		</view>
		<uniLoadMore bgColor="rgba(255, 255, 255)" :status="hasFlag ? 'loading' : 'noMore'"></uniLoadMore>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
			this.initComment()
		},
		data () {
			return {
				pageNum: 0,
				pageSize: 20,
				hasFlag: true,
				commentList: [],
				type: 0
			}
		},
		methods: {
			
			// 数据
			async initComment() {
				if (!this.hasFlag) return
				this.pageNum = ++this.pageNum
				let res = await this.$fetch(this.$api.evaluate_manager, {pageNum: this.pageNum, pageSize: this.pageSize, type: this.type}, "POST", 'FORM')
				console.log(res)
				this.commentList = [...this.commentList, ...res.rows]
				this.hasFlag = this.pageNum * this.pageSize < res.total
			},
			goToArtDetail (id, userId) {
			
				uni.navigateTo({
					url: '../index/ArticleDetail?id=' + id + '&userId=' + userId
				})
			},
			async delComment (id, index) {
				
				uni.showModal({
				    title: '提示',
				    content: '确定删除该条评论么',
				    success: async (msg) => {
				        if (msg.confirm) {
				           let res = await this.$fetch(this.$api.del_evaluate, {id: id}, 'POST', 'FORM')
				           console.log(res)
						   uni.showToast({
						   	icon: 'none',
							title: res.msg
						   })
						   if (res.code == 0) {
							    this.commentList.splice(index, 1)
						   }
						  
				        } else if (msg.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			}
		},
		
		onReachBottom() {
			this.initComment()
		}
	}
</script>

<style lang="less">
	.comment{
		padding-bottom: 30rpx;
		box-sizing: border-box;
		.comment-item{
			display: flex;
			// align-items: center;
			// justify-content: space-between;
			padding: 28rpx 34rpx;
			box-sizing: border-box;
			border-bottom: 6rpx solid #F4F4F4;
			&:last-child{
				border-bottom: 0;
			}
			.avatar{
				
				image{
					width: 92rpx;
					height: 92rpx;
					border-radius: 50%;
				}
			}
			.comment-item-right{
				flex: 1;
				padding-left: 32rpx;
				box-sizing: border-box;
				.comment-item-right-top{
					display: flex;
					justify-content: space-between;
					// align-items: center;
					.comment-item-right-top-left{
						.comment-item-right-top-left-t{
							display: flex;
							align-items: center;
							.comment-item-right-top-left-t-name{
								font-family: PingFangSC-Medium;
								font-size: 14px;
								color: #141414;
								letter-spacing: -0.34px;
							}
							.comment-item-right-top-left-t-level{
								margin-left: 16rpx;
								font-family: PingFangSC-Medium;
								font-size: 12px;
								color: #FF7B30;
								letter-spacing: -0.24px;
								background: #FFFFFF;
								border: 1px solid #FF7B30;
								border-radius: 1px;
								padding: 0 4rpx;
								box-sizing: border-box;
							}
						}
						.comment-item-right-top-left-b{
							font-family: PingFangSC-Regular;
							font-size: 12px;
							color: #686868;
							letter-spacing: -0.24px;
						}
					}
					.comment-item-right-top-right{
						image{
							width: 32rpx;
							height: 32rpx;
						}
					}
				
				
				}
				.comment-item-right-center{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
				}
				.comment-item-right-footer{
					// width: 560rpx;
					// height: 80rpx;
					background: #EFEFEF;
					border-radius: 5px;
					overflow: hidden;
					font-family: PingFangSC-Medium;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					font-weight: bold;
					padding: 18rpx 22rpx;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
