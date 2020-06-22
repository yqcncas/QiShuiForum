<template>
	<view class="Invitation">
		<!-- 头部导航 -->
		<view class="Invitation-header">
			<view class="Invitation-header-top">
				<view class="Invitation-header-top-item" v-for="(item, index) in navTab" :key = "index" @click="goToPage(index)">
					<image :src="item.image" mode="aspectFill"></image>
					<view class="Invitation-header-top-item-text">{{item.name}}</view>
				</view>
			</view>
			<view class="line-7"></view>
		</view>
		<!-- 置顶 -->
		<Stick></Stick>
		<!-- 底部导航 -->
		<view class="line-3"></view>
		<NavButton :navleft="'最新发布'" :navright="'精华帖'" :navIndex = "navIndex" @handleNavIndex = "handleNavIndex"></NavButton>
		<view class="line-3"></view>
		<ArticleMain @ArticleMainClick = "ArticleMainClick"></ArticleMain>
		<Fab></Fab>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				navTab: [{image: '../../static/image/ych/index/4.png', name: '房产'},{image: '../../static/image/ych/index/5.png', name: '汽车'},{image: '../../static/image/ych/index/6.png', name: '二手闲置'},
						 {image: '../../static/image/ych/index/7.png', name: '找工作'},{image: '../../static/image/ych/index/8.png', name: '商城'},{image: '../../static/image/ych/index/9.png', name: '广场'},
						 {image: '../../static/image/ych/index/10.png', name: '亲子'},{image: '../../static/image/ych/index/11.png', name: '美食'}], 
						 
				navIndex: 0		 
			}
		},
		methods: {
			handleNavIndex (index) {
				this.navIndex = index
			},
			ArticleMainClick (index) {
			 	console.log(index)
			 	uni.navigateTo({
			 		url: '../index/ArticleDetail'
			 	})
			},
			// 顶部导航跳转
			goToPage (index) {
		
				if (index == 4) {
					uni.switchTab({
						url:'../Market/Market'
					})
				} else if (index == 6 || index == 7) {
					return uni.showToast({
						icon: 'none',
						title: '暂未开通敬请期待'
					})
				}else {
					uni.navigateTo({
						url: '../HouseProperty/House?type=' + index
					})
				}
				
					
			}, 
		}
	}
</script>

<style lang="less">
	.Invitation{
		.Invitation-header{
			.Invitation-header-top{
				display: flex;
				flex-wrap: wrap;
				padding-top: 30rpx;
				box-sizing: border-box;
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
						font-size: 12px;
						color: #545454;
						letter-spacing: -0.29px;
						padding-top: 8rpx;
						padding-bottom: 36rpx;
						box-sizing: border-box;
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
