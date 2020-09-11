<template>
	<view class="FindDetail">
		<view class="FindDetail-header">
			<view class="FindDetail-header-top">{{detailInfo.name}}</view>
			<view class="FindDetail-header-bottom">活动时间：{{detailInfo.createTime}}-{{detailInfo.endTime}}</view>
		</view>
		<view class="FindDetail-main" >
			<image :src="detailInfo.titlePic" mode="aspectFill" ></image>
		</view>
		<view class="FindDetail-center">
			<scroll-view scroll-y="true" style="height: 700rpx;">
				<view class="FindDetail-center-text">
					<jyf-parser :html="detailInfo.content" ref="article"></jyf-parser>
				</view>
				
			</scroll-view>
		</view>
		<view class="join-button" @click="goToApply" :class="{noImg: isActiveing != 0}">{{isActiveing == 0 ? '立即参加' : isActiveing == 1 ? '已过期' : '暂未开始'}}</view>
		<shareBox :showShareBoxFlag = "showShareBoxFlag" @changeShowBoxFLag = "changeShowBoxFLag" @shareWx = "shareWx"  @shareFre = "shareFre"></shareBox>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	export default {
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.initFindDeatil()
			
		},
		components:{
			jyfParser
		},
		onNavigationBarButtonTap () {
			console.log('分享按钮')
			this.showShareBoxFlag = true
		},
		data () {
			return {
				id: '',
				detailInfo: {},
				isActiveing: 0,// 0正在 1过期 2未开始
				showShareBoxFlag: false,
			}
		},
		methods: {
			//更改分享显示
			changeShowBoxFLag (newV) {
				console.log(newV)
				this.showShareBoxFlag = newV
			},
			// 微信分享
			shareWx () {
				
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "https://qsw-h5.bajiaostar.xyz/#/?code=" + uni.getStorageSync('userId'),
				    title: "汽水论坛分享",
				    summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
					imageUrl: '../../static/qslogo.png',
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
					href: "https://qsw-h5.bajiaostar.xyz/#/?code=" + uni.getStorageSync('userId'),
					title: "汽水论坛分享",
					summary: "我正在使用汽水论坛，赶紧跟我一起来体验！",
				    imageUrl: '../../static/qslogo.png',
					success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				this.showShareBoxFlag = false
			},
			async goToApply () {
				if (this.isActiveing == 0) {
					let res = await this.$fetch(this.$api.activity_apply, {id: this.id}, 'POST', 'FORM')
					console.log(res)
					console.log(this.detailInfo.otherUrl)
					uni.navigateTo({
						url: '../WebViewPage/WebViewPage?goUrl=' + this.detailInfo.otherUrl
					})
					
				} else {
					uni.showToast({
						icon: 'none',
						title: '活动暂未开始或已过期'
					})
				} 
				// uni.navigateTo({ 
				// 	url: './Apply'
				// })
			},
			async initFindDeatil () {
				let res = await this.$fetch(this.$api.activity_detail, {id: this.id}, 'POST', 'FORM')
				console.log(res)
				this.detailInfo = res.data
				
				var date1 = this.$dayjs().unix()
				var date2 = this.$dayjs(this.detailInfo.startTime).unix()
				var date3 = this.$dayjs(this.detailInfo.endTime).unix()
				console.log(date1, date2, date3)
					
				// console.log(date1.diff(date2)) // 20214000000 默认单位是毫秒
			
				// this.isActiveing = date1.diff(date2)
				console.log(date1 - date2)
				console.log(date3 - date1)
				// console.log(date3 - data1)
				if (date1 - date2 >= 0 && date3 - date1 >= 0) {
					this.isActiveing = 0
				} else if (date3 - date1 < 0) {
					this.isActiveing = 1
				} else if (date1 - date2 < 0) {
					this.isActiveing = 2
				}
				
				
				
			}
		}
	}
</script>

<style lang="less">
	.FindDetail{
		padding-top: 32rpx;
		padding-left: 36rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		.FindDetail-header{
			.FindDetail-header-top{
				width: 640rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #141414;
				letter-spacing: -0.39px;
				text-align: justify;
				font-weight: bold;
			}
			.FindDetail-header-bottom{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #686868;
				letter-spacing: -0.24px;
			}
		}
		.FindDetail-main{
			padding-top: 14rpx;
			padding-bottom: 14rpx;
			box-sizing: border-box;
			image{
				width: 684rpx;
				height: 374rpx;
			}
		}
		.FindDetail-center{
			.FindDetail-center-text{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
			}
		}
		.join-button{
			width: 604rpx;
			height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			overflow: hidden;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			line-height: 102rpx;
			margin: 0 auto;
			margin-top: 30rpx;
			box-sizing: border-box;
			&.noImg{
				background-image: none;
				background-color: #c8c9cc;
			}
		}
	}
</style>
