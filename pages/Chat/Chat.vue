<template>
	<view class="chat">
		<scroll-view scroll-y="true" style="height: 100vh;">
			<view class="chat-box">
				<view class="chat-box-item">
					<view class="chat-item-left">
						<view class="chat-item-left-avatar">
							<image src="../../static/logo.png" mode="aspectFill"></image>
						</view>
						<view class="chat-item-left-main">您好，请问有什么能帮助你的吗？</view>
					</view>
					<view class="chat-item-right">
						<view class="chat-item-right-main">您好，我想咨询一下您家的汽车和……</view>
						<view class="chat-item-right-avatar">
							<image src="../../static/logo.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			
			</view>
		</scroll-view>
		<view :style="'height' + sendHeight + 'px'"></view>
		<view class="send-box">
			<view class="send-box-left">
				<textarea  auto-height v-model="sendMain" ref = "sendTextArea"/>
			</view>
			<view class="send-box-right" :style="{backgroundColor: sendMain == '' ? '#c8c9cc' : '#FF7B30'}">发送</view>
				
			
				
			
		</view>
	</view>
</template>

<script>
	
	export default {
		onLoad() {
			
		},
		data () {
			return {
				sendMain: '',
				sendHeight: 84
			}
		},
		methods: {
			getSendHeight () {
				let view = uni.createSelectorQuery().select('.send-box')
				view.boundingClientRect(res => {
					if (res.height <= 84) this.sendHeight = 84
					else this.sendHeight = res.height + 2
				}).exec()
			},
			chatSend () {
				
			}
		},
		watch: {
			sendMain(newvalue) {
				this.getSendHeight()
			}
		}
	}
</script>

<style lang="less" scoped>
	page{
		background-color: rgb(244,244,244);	
	}
	.chat{
		background-color: rgb(244,244,244);	
		padding-bottom: 200rpx;
		.chat-box{
			.chat-box-item{
				.chat-item-left{
					display: flex;
					align-items: center;
					padding-top: 48rpx;
					padding-left: 22rpx;
					padding-right: 22rpx;
					box-sizing: border-box;
					.chat-item-left-avatar{
						image{
							width: 88rpx;
							height: 88rpx;
							border-radius: 50%;
						}
					}
					.chat-item-left-main{
						font-family: PingFangSC-Regular;
						font-size: 16px;
						color: #232323;
						letter-spacing: -0.39px;
						text-align: justify;
						background: #FFFFFF;
						border-radius: 6px;
						padding: 14rpx 20rpx;
						margin-left: 22rpx;
						box-sizing: border-box;
						position: relative;
						&::after{
							content: '';
							position: absolute;
							width: 16rpx;
							height: 18rpx;
							left: -15rpx;
							top: 50%;
							transform: translateY(-80%);
							background-image: url(../../static/image/ych/index/24.png);
							background-repeat: no-repeat;
							background-size: 100% 100%;
						}
					}
				}
				.chat-item-right{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					padding-top: 20rpx;
					padding-left: 22rpx;
					padding-right: 22rpx;
					box-sizing: border-box;
					.chat-item-right-main{
						font-family: PingFangSC-Regular;
						font-size: 16px;
						color: #232323;
						letter-spacing: -0.39px;
						background: #FF974E;
						border-radius: 6px;
						padding: 14rpx 20rpx;
						margin-right: 22rpx;
						box-sizing: border-box;
						position: relative;
						&::after{
							content: '';
							position: absolute;
							width: 16rpx;
							height: 18rpx;
							right: -15rpx;
							top: 50%;
							transform: translateY(-80%);
							background-image: url(../../static/image/ych/index/25.png);
							background-repeat: no-repeat;
							background-size: 100% 100%;
						}
					}
					.chat-item-right-avatar{
						image{
							width: 88rpx;
							height: 88rpx;
							border-radius: 50%;
						}
					}
				}
			}
		}
		.send-box{
			width: 100%;
			padding: 18rpx 22rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: fixed;
			bottom: 0;
			background-color: #fff;
			.send-box-left{
				textarea{
					width: 542rpx;
					// height: 78rpx;
					padding-top: 20rpx;
					padding-bottom: 20rpx;
					padding-left: 10rpx;
					
					height: 100%;
					background: #EBEBEB;
					border-radius: 6px;
				}
			}
			.send-box-right{
				// background: #FF7B30;
				border-radius: 39rpx;
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #FFFFFF;
				padding: 16rpx 40rpx;
			}
		}
	}
</style>
