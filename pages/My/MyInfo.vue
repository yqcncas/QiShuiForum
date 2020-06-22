<template>
	<view class="myInfo">
		<view class="myInfo-avatar">
			<view class="myInfo-avatar-left">头像</view>
			<view class="myInfo-avatar-right">
				<image src="../../static/logo.png" mode="aspectFill" class="user-avatar"></image>
				<image src="../../static/image/ych/right.png" mode="aspectFill" class="myInfo-right"></image>
			</view>
		</view>
		<view class="userinfo-item">
			<view class="userinfo-item-left">用户名</view>
			<view class="userinfo-item-right">
				<input type="text" placeholder="请输入用户名" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A2A2A2;letter-spacing: 0;"/>
				<image src="../../static/image/ych/right.png" mode="aspectFill" class="myInfo-right"></image>
			</view>
		</view>
		<view class="userinfo-item">
			<view class="userinfo-item-left">性别</view>
			<view class="userinfo-item-right">
				<picker :range="sexList" @change="selectedSex">
					<view class="sex">
						<view class="user-sex">{{userSex}}</view>
						<image src="../../static/image/ych/right.png" mode="aspectFill" class="myInfo-right"></image>
					</view>
				</picker>
			</view>
		</view>
		
		<view class="userinfo-item">
			<view class="userinfo-item-left">生日</view>
			<view class="userinfo-item-right">
				 <picker mode="date" @change="bindTimeChange">
					<view class="sex">
						<view class="user-sex">{{time}}</view>
						<image src="../../static/image/ych/right.png" mode="aspectFill" class="myInfo-right"></image>
					</view>
				</picker>
			</view>
		</view>
		<view class="user-sign">个性签名</view>
		<view class="my-sign">
				<textarea  placeholder="还没有个性签名，快编辑吧！"  placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;letter-spacing: -0.34px;"/>
		</view>
		<view class="saveMyInfo">保存</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				sexList: ['男', '女', '保密'],
				userSex: '',
				time: ''
			}
		},
		methods:{
			selectedSex (e) {
				console.log(e)
				this.userSex = this.sexList[e.detail.value] 
				console.log(this.userSex)
			},
			bindTimeChange (e) {
				this.time = e.target.value
			}
		}
	}
</script>

<style lang="less">
	.myInfo{
		padding-left: 32rpx;
		padding-right: 36rpx;
		box-sizing: border-box;
		.myInfo-right{
			width: 16rpx;
			height: 28rpx;
			margin-left: 18rpx;
			box-sizing: border-box;
		}
	
		.myInfo-avatar{
			width: 100%;
			height: 180rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.myInfo-avatar-left{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #171717;
				letter-spacing: 0.06px;
				text-align: justify;
			}
			.myInfo-avatar-right{
				display: flex;
				align-items: center;
				.user-avatar{
					width: 110rpx;
					height: 110rpx;
					border-radius: 50%;
				}
			}
		}
		.userinfo-item{
			padding-top: 30rpx;
			width: 100%;
			// height: 64rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			.userinfo-item-left{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #171717;
				letter-spacing: 0.06px;
				text-align: justify;
			}
			.userinfo-item-right{
				flex: 1;
				height: 100%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				input{
					text-align: end;
					font-size: 14px;
				}
				.sex{
					width: 560rpx;
					text-align: end;
					display: flex;
					align-items: center;
				}
				.user-sex{
					flex: 1;
					&.showBtn{
						visibility: hidden;
					}
				}
			}
		}
		.user-sign{
			font-family: PingFangSC-Regular;
			font-size: 16px;
			color: #171717;
			letter-spacing: 0.06px;
			text-align: justify;
			padding-top: 40rpx;
			padding-bottom: 30rpx;
			box-sizing: border-box;
			
			
		}
		.my-sign{
			width: 682rpx;
			height: 204rpx;
			background: #F4F4F4;
			border-radius: 5px;
			overflow: hidden;
			padding: 16rpx 22rpx;
			box-sizing: border-box;
		}
		.saveMyInfo{
			margin: 0 auto;
			margin-top: 510rpx;
			box-sizing: border-box;
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
			
		}
	}
</style>
