<template>
	<view class="search">
		<Status></Status>
		<!-- 搜索框 -->
		<view class="search-top">
			<view class="search-top-left">
				<image src="../../static/image/ych/index/3.png" mode=""></image>
				<input type="text" confirm-type="search" @confirm = "searchFn" v-model="searchValue" placeholder="工作"  placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #898989;letter-spacing: -0.34px;"/>
			</view>
			<view class="search-top-right" @click="goBack">取消</view>
		</view>
		<!-- 搜索导航 -->
		<view class="search-nav">
			<view class="search-nav-item" :class="{NavActive: searchNavIndex == 0}" @click.stop="handleNavIndex(0)">内容</view>
			<view class="search-nav-item-line"></view>
			<view class="search-nav-item" :class="{NavActive: searchNavIndex == 1}" @click.stop="handleNavIndex(1)">用户</view>
		</view>
		<view class="line-3" style="transform: translateY(125rpx);"></view>
		
		<view class="searchMain">
			<!-- 搜索默认情况 -->
			<view class="searchMain-noSearch" v-if="searchHistory">
				<view class="searchMain-noSearch-top">
					<view class="searchMain-noSearch-top-left">搜索历史</view>
					<image src="../../static/image/ych/index/15.png" mode="aspectFill" @click.stop="deleHistory"></image>
				</view>
				<view class="searchMain-noSearch-bottom">
					<view class="searchMain-noSearch-bottom-item">本周房价</view>
			
				</view>
			</view>
			<!-- 搜索内容 -->
			<ArticleMain v-if = "searchFlag"></ArticleMain>
			<!-- 搜索的用户内容 -->
			<view class="search-user" v-if="searchUserFlag">
				<view class="search-user-item" v-for="(item, index) in 3" :key = "index">
					<view class="search-user-left">
						<image src="../../static/logo.png" mode="aspectFill"></image>
						<view class="search-user-left-userName">黑胡椒工作</view>
						<view class="search-user-left-level">Lv.1</view>
					</view>
					<view class="search-user-right attention">关注</view>
				</view>
			
			</view>
			<!-- 为空 -->
			<u-empty mode="search" v-if = "searchListLength"></u-empty>
		</view>
	</view>
</template>

<script>
	import ArticleMain from '../../components/ArticleMain/ArticleMain.vue'
	export default {
		data () {
			return {
				searchValue: '', // 搜索值
				searchNavIndex: 0, // 导航切换
				searchFlag: false, // 是否展示搜索内容
				searchHistory: true, // 是否展示历史搜索
				searchUserFlag: false, // 是否展示搜索用户
				searchListLength: false, //是否显示为空标识 
			}
		},
		methods: {
			// 返回
			goBack () {
				uni.navigateBack({
					delta: 1
				})
			},
			// Nav切换
			handleNavIndex (index) {
				this.searchNavIndex = index
				this.searchFlag = false
				this.searchValue = ""
				if (index == 0) {
					this.searchHistory = true
					this.searchUserFlag = false
				} else {
					this.searchHistory = false
				}
			},
			// 搜索
			searchFn () {
				if (this.searchValue.trim() == '') {
					this.searchValue = '工作'
				}
				// this.searchFlag = true
				this.searchHistory = false
				if (this.searchNavIndex == 0) {
					this.searchFlag = true
				} else {
					this.searchUserFlag = true
				}
			},
			// 删除历史记录
			deleHistory () {
				uni.showModal({
				    title: '提示',
				    content: '确定清空搜索记录么',
				    success: (res) => {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="less">
	page::after{
		display: none;
	}
	.search{
		.search-top{
			width: 100%;
			height: 78rpx;
			display: flex;
			// padding-top: 25rpx;
			align-items: center;
			padding-left: 32rpx;
			// padding-right: 42rpx;
			box-sizing: border-box;
			position: fixed;
			top: var(--status-bar-height);
			// transform: translateY(var(--status-bar-height));
			.search-top-left{
				width: 604rpx;
				height: 100%;
				background: #EFEFEF;
				border-radius: 39rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				image {
					width: 40rpx;
					height: 40rpx;
					margin-left: 30rpx;
					margin-right: 18rpx;
					box-sizing: border-box;
				}
				input{
					flex: 1;
					padding-right: 20rpx;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					box-sizing: border-box;
				}
			}
			.search-top-right{
				flex: 1;
				height: 100%;
				line-height: 78rpx;
				margin-left: 16rpx;
				box-sizing: border-box;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #898989;
				letter-spacing: -0.34px;
			}
		}
		.search-nav{
			width: 100%;
			height: 84rpx;
			display: flex;
			align-items: center;
			padding-top: var(--status-bar-height);
			transform: translateY(100rpx);
			.search-nav-item{
				width: 374rpx;
				height: 100%;
				line-height: 100%;
				// line-height: 84rpx; 
				text-align: center;
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.39px;
				position: relative;
				
				&::after{
					content: '';
					width: 0;
					height: 0;
					position: absolute;
					left: 50%;
					bottom: -10rpx;
					border-bottom: 4rpx solid #FF682D;
					transform: translateX(-50%);
					transition: all .3s;
				}
				&.NavActive{
					color: #FF682D;
					&::after{
						width: 15%;
					}
				}
			}
			.search-nav-item-line{
				width: 2rpx;
				height: 44rpx;
				background-color: #E3E3E3;
			}
		}
		.searchMain{
			transform: translateY(133rpx);
			.searchMain-noSearch{
				.searchMain-noSearch-top{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-left: 34rpx;
					padding-right: 46rpx;
					box-sizing: border-box;
					.searchMain-noSearch-top-left{
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #141414;
						letter-spacing: -0.34px;
					}
					image{
						width: 24rpx;
						height: 26rpx;
					}
				}
				.searchMain-noSearch-bottom{
					padding-left: 44rpx;
					box-sizing: border-box;
					.searchMain-noSearch-bottom-item{
						
						margin-top: 20rpx;
						margin-right: 30rpx;
						display: inline-block;
						padding: 0 28rpx;
						background: #F0F0F0;
						border-radius: 24rpx;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #6A6A6A;
						letter-spacing: -0.34px;
					}
				}
			}
			.search-user{
				padding-left: 32rpx;
				padding-right: 42rpx;
				box-sizing: border-box;
				.search-user-item{
					// padding: 24rpx 42rpx 0rpx 32rpx;
					padding-top: 24rpx;
					padding-bottom: 32rpx;
					border-bottom: 1rpx solid #D8D8D8;
					box-sizing: border-box;
					
					display: flex;
					align-items: center;
					justify-content: space-between;
					.search-user-left{
						display: flex;
						align-items: center;
						image{
							width: 102rpx;
							height: 102rpx;
							border-radius: 50%;
						}
						.search-user-left-userName{
							font-family: PingFangSC-Regular;
							font-size: 14px;
							color: #141414;
							letter-spacing: -0.34px;
							padding: 0 22rpx;
							box-sizing: border-box;
						}
						.search-user-left-level{
							font-family: PingFangSC-Medium;
							font-size: 10px;
							color: #FF7B30;
							letter-spacing: -0.24px;
							background: #FFFFFF;
							border: 2rpx solid #FF7B30;
							border-radius: 2rpx;
							padding: 0 4rpx;
							box-sizing: border-box;
						}
					}
					.search-user-right{
						border: 1px solid #FF7B30;
						border-radius: 3px;
						color: #FF7B30;
						padding: 0 16rpx;
						box-sizing: border-box;
						&.attention{
							border: 1px solid #C4C4C4;
							color: #C4C4C4;
						}
					}
				}
				
				
			}
		}
	}
</style>
