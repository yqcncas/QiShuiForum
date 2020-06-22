<template>
	<view class="Publish">
		<Status></Status>
		<view class="Publish-header">
			<view class="Publish-header-left" @click="cancelPublish">取消</view>
			<view class="Publish-header-center">发布评论</view>
			<view class="Publish-header-right">发布</view>
		</view>
		<view class="Publish-center">
			<view class="Publish-center-header">
				<view class="Publish-center-header-left">板块</view>
				<view class="Publish-center-header-right" >
					<picker :range="listArr" @change="handlePicker">
						<view class="picker-box">
							<input disabled type="text" placeholder="请选择要发布的版块" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #575757;" />
							<image src="../../static/image/ych/my/30.png" mode="aspectFill"></image>
						</view>
					</picker>
					
				</view>
			</view>
			<view class="Publish-center-title">
				<input type="text" maxlength="28" placeholder="输入标题(28字以内)" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="Publish-center-main">
				<textarea  placeholder="输入内容" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;"/>
			</view>
			<view class="add-main">
				<view class="add-main-title">{{addTitle}}</view>
				<view class="add-main-box">
					<image src="../../static/image/ych/Advertising/1.png" mode="aspectFill" class="addImg"></image>
				</view>
			</view>
		</view>
		
		

	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
			if (this.type == 2) {
				this.addTitle = '添加视频'
			}
		},
		data () {
			return {
				listArr: ['123', '456'],
				addTitle: '添加图片',
				type: 0 , // 0长文 1短文 2视频
			}
		},
		methods: {
			// 版块切换
			handlePicker (e) {
				console.log(e)
			},
			// 取消发布
			cancelPublish () {
				uni.showModal({
				    title: '',
				    content: '是否保留此次编辑？',
					cancelText: '不保留',
					confirmText: '保留',
				    success:  (res) => {
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
	.Publish{
		.Publish-header{
			width: 100%;
			height: 50rpx;
			display: flex;
			align-items: center;
			padding-left: 36rpx;
			padding-right: 34rpx;
			box-sizing: border-box;
			position: fixed;
			top: var(--status-bar-height);
			.Publish-header-left, .Publish-header-right{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #2A2A2A;
				letter-spacing: -0.34px;
			}
			
			.Publish-header-center{
				font-family: PingFangSC-Medium;
				font-size: 18px;
				color: #000000;
				letter-spacing: -0.03px;
				padding-left: 212rpx;
				padding-right: 212rpx;
				box-sizing: border-box;
			}
		}
		.Publish-center{
			padding-top: calc(50rpx + var(--status-bar-height));
			.Publish-center-header{
				display: flex;
				align-items: center;
				padding-bottom: 40rpx;
				padding-top: 40rpx;
				padding-left: 36rpx;
				padding-right: 30rpx;
				border-bottom: 6rpx solid #f4f4f4;
				box-sizing: border-box;
				
				.Publish-center-header-left{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					padding-right: 20rpx;
					box-sizing: border-box;
				}
				.Publish-center-header-right{
					flex: 1;
					display: flex;
					justify-content: space-between;
					align-items: center;
					// padding-top: 16rpx;
					// padding-bottom: 18rpx;
					// padding-left: 50rpx;
					// padding-right: 18rpx;
					background: #FFFFFF;
					border: 1px solid #DFDFDF;
					border-radius: 4px;
					
					image{
						width: 16rpx;
						height: 10rpx;
					}
					.picker-box{
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding-top: 16rpx;
						padding-bottom: 18rpx;
						padding-left: 50rpx;
						padding-right: 18rpx;
						.input{
							flex: 1;
							padding-right: 20rpx;
							box-sizing: border-box;
						}
					}
				}
			}
			.Publish-center-title{
				padding: 36rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				border-bottom: 6rpx solid #f4f4f4;
				box-sizing: border-box;
				input{
					flex: 1;
				}
			}
			.Publish-center-main{
				padding: 26rpx 36rpx;
				height: 380rpx;
				border-bottom: 6rpx solid #f4f4f4;
				box-sizing: border-box;
				textarea{
					width: 100%;
					font-size: 14px;
				}
			}
			.add-main{
				padding-top: 24rpx;
				padding-bottom: 46rpx;
				padding-left: 36rpx;
				padding-right: 36rpx;
				box-sizing: border-box;
				.add-main-title{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #141414;
					letter-spacing: -0.34px;
					padding-bottom: 24rpx;
					box-sizing: border-box;
				}
				.add-main-box{
					image{
						width: 178rpx;
						height: 222rpx;
					}
				}
			}
		}
	}
</style>
<style>
	uni-picker{
		width: 100%;
	}
</style>