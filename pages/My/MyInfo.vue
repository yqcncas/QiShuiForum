<template>
	<view class="myInfo">
		<view class="myInfo-avatar" @click="changMyAvatar">
			<view class="myInfo-avatar-left">头像</view>
			<view class="myInfo-avatar-right">
				<image :src="userAvatar ? userAvatar : '../../static/image/ych/avatar.png'" mode="aspectFill" class="user-avatar" @click.stop = "showMyAvatar(userAvatar)"></image>
				<image src="../../static/image/ych/right.png" mode="aspectFill" class="myInfo-right"></image>
			</view>
		</view>
		<view class="userinfo-item">
			<view class="userinfo-item-left">用户名</view>
			<view class="userinfo-item-right">
				<input v-model="userName" type="text" placeholder="请输入用户名" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A2A2A2;letter-spacing: 0;"/>
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
				 <picker mode="date" @change="bindTimeChange" :fields = "'day'">
					<view class="sex">
						<view class="user-sex">{{birthday}}</view>
						<image src="../../static/image/ych/right.png" mode="aspectFill" class="myInfo-right"></image>
					</view>
				</picker>
			</view>
		</view>
		<view class="user-sign">个性签名</view>
		<view class="my-sign">
				<textarea v-model="gxSign" placeholder="还没有个性签名，快编辑吧！"  placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;letter-spacing: -0.34px;"/>
		</view>
		<view class="saveMyInfo" @click="saveMyInfoFn">保存</view>
		
	</view>
</template>

<script>
	export default {
		onLoad (options) {
			this.userInfo = JSON.parse(options.userInfo)
			console.log(this.userInfo)
			this.userName = this.userInfo.userName
			this.userSex = this.sexList[this.userInfo.sex] 
			this.userSexIndex = this.userInfo.sex
			this.birthday = this.userInfo.birthday
			this.gxSign = this.userInfo.gxSign
			this.userAvatar = this.userInfo.avatar
			this.initQnTokenFn()
		},
		data () {
			return {
				sexList: ['男', '女'],
				userSex: '',
				birthday: '',
				userName: '',
				gxSign: '',
				QnToken: '',
				userSexIndex: 0,
				userAvatar: '../../static/image/ych/avatar.png'
			}
		},
		methods:{
			selectedSex (e) {
				console.log(e)
				this.userSex = this.sexList[e.detail.value] 
				this.userSexIndex = e.detail.value
				console.log(this.userSex)
			},
			bindTimeChange (e) {
				this.birthday = e.target.value
			},
			// 七牛
			async initQnTokenFn () {
				let res = await this.$fetch(this.$api.getQiniuToken,{}, "POST", 'FORM')
				console.log(res)
				this.QnToken = res.msg
			},
			// 改变头像
			changMyAvatar () {
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    success: (res) => {
				        console.log(JSON.stringify(res.tempFilePaths));
						 uni.uploadFile({
							url: this.$api.unloadLocation, //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								'token': this.QnToken
							},
							success: (uploadFileRes) => {
								this.userAvatar = this.$api.baseLocation + JSON.parse(uploadFileRes.data).hash
							}
						});
				    }
				});
			},
			showMyAvatar (bigImg) {
				if (!bigImg) {
					bigImg = '../../static/image/ych/avatar.png'
				}
				uni.previewImage({
					urls: [bigImg]
				})
			},
			async saveMyInfoFn () {
				let res = await this.$fetch(this.$api.upd_user, {avatar: this.userAvatar, birthDay: this.birthday, gxSign: this.gxSign, sex: this.userSexIndex, userName: this.userName}, 'POST', 'FORM')
				console.log(res)
				uni.showToast({
					icon: 'none',
					title: res.msg
				})
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
			// margin-top: 510rpx;
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
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
			
			
		}
	}
</style>
