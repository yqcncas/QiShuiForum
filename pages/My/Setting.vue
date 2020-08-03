<template>
	<view class="setting">
		<view class="setting-item" @click="goToChangPwd">
			<view class="setting-item-left">修改密码</view>
			<view class="setting-item-right">
				<view class="setting-item-right-box">
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="setting-item">
			<view class="setting-item-left">绑定手机</view>
			<view class="setting-item-right">
				<view class="setting-item-right-box">
					<view class="phone">{{phoneNumber}}</view>
					<!-- <image src="../../static/image/ych/right.png" mode="aspectFill"></image> -->
				</view>
			</view>
		</view>
		<!-- <view class="setting-item">
			<view class="setting-item-left">绑定微信</view>
			<view class="setting-item-right">
				<view class="setting-item-right-box">
					<view class="setting-item-right-box-text">去绑定</view>
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
		</view> -->
		<view class="setting-item" @click="goToMessagePush">
			<view class="setting-item-left">消息推送</view>
			<view class="setting-item-right">
				<view class="setting-item-right-box">
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		
		<view class="setting-item" @click="clearCache">
			<view class="setting-item-left">清除缓存</view>
			<view class="setting-item-right">
				<view class="setting-item-right-box">
					<view class="setting-item-right-box-text">{{fileSizeString}}</view>
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="setting-item" @click="goToRichText">
			<view class="setting-item-left">关于我们</view>
			<view class="setting-item-right">
				<view class="setting-item-right-box">
					<image src="../../static/image/ych/right.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		
		<view class="exit-button" @click="exit">退出当前帐号</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.phoneNumber = options.phone
			this.formatSize()
			
		},
		data () {
			return{
				fileSizeString: '',
				phoneNumber: ''
			}
		},
		methods:{
			// 退出
			exit () {
				uni.showModal({
				    title: '提示',
				    content: '是否确认退出',
				    success: function (res) {
				        if (res.confirm) {
				            uni.removeStorageSync('token')
							uni.removeStorageSync('userId')
							uni.removeStorageSync('userAvatar')
							uni.removeStorageSync('userName')
							uni.removeStorageSync('userLevel')
							uni.removeStorageSync('plateName')
				            uni.showToast({
				            	icon: 'none',
				            	title: '退出成功'
				            })
				            setTimeout(() => {
				            	uni.switchTab({
				            		url: '../index/index'
				            	})
				            }, 700)
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
				
			},
			// 去修改密码
			goToChangPwd () {
				uni.navigateTo({
					url: '../Login/ChangePwd'
				})
			},
			// 去消息推送
			goToMessagePush () {
				uni.navigateTo({
					url: './MessagePush'
				})
			},
			// 计算缓存大小
			formatSize () {
				let that = this;  
				plus.cache.calculate(function(size) {  
					let sizeCache = parseInt(size);  
					if (sizeCache == 0) {  
						that.fileSizeString = "0B";  //拿到变量接受调用函数后的数据
					} else if (sizeCache < 1024) {  
						that.fileSizeString = sizeCache + "B";  
					} else if (sizeCache < 1048576) {  
						that.fileSizeString = (sizeCache / 1024).toFixed(2) + "KB";  
					} else if (sizeCache < 1073741824) {  
						that.fileSizeString = (sizeCache / 1048576).toFixed(2) + "MB";  
					} else {  
						that.fileSizeString = (sizeCache / 1073741824).toFixed(2) + "GB";  
					}  
					console.log(that.fileSizeString)
				});  
			},
			// 去富文本
			goToRichText () {
				uni.navigateTo({
					url: '../RichText/RichText?id=' + 16
				})
			},
			// 清除缓存
			clearCache () {
				let that = this;  
				let os = plus.os.name;  
				uni.showModal({
				    title: '提示',
				    content: '确定清除缓存么',
				    success:  (res) => {
				        if (res.confirm) {
				            if (os == 'Android') {
				            	let main = plus.android.runtimeMainActivity();  
				            	let sdRoot = main.getCacheDir();  
				            	let files = plus.android.invoke(sdRoot, "listFiles");  
				            	let len = files.length;  
				            	for (let i = 0; i < len; i++) {  
				            		let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径  
				            		plus.io.resolveLocalFileSystemURL(filePath, function(entry) {  
				            			if (entry.isDirectory) {  
				            				entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录  
				            					uni.showToast({  
				            						title: '缓存清理完成',  
				            						duration: 2000  
				            					});  
				            					that.formatSize(); // 重新计算缓存  
				            				}, function(e) {  
				            					console.log(e.message)  
				            				});  
				            			} else {  
				            				entry.remove();  
				            			}  
				            		}, function(e) {  
				            			console.log('文件路径读取失败')  
				            		});  
				            	}  
				            } else { // ios暂时未找到清理缓存的方法，以下是官方提供的方法，但是无效，会报错  
				            	plus.cache.clear(function() {  
				            		uni.showToast({  
				            			title: '缓存清理完成',  
				            			duration: 2000  
				            		});  
				            		that.formatSize();  
				            	});  
				            }  
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
	.setting{
		.setting-item{
			padding-top: 30rpx;
			padding-left: 32rpx;
			padding-bottom: 30rpx;
			padding-right: 36rpx;
			border-bottom: 1rpx solid #F2F2F2;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.setting-item-left{
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #171717;
				letter-spacing: 0.06px;
				text-align: justify;
			}
			.setting-item-right{
				image{
					width: 16rpx;
					height: 28rpx;
				}
				.setting-item-right-box{
					display: flex;
					align-items: center;
					.phone{
						font-family: PingFangSC-Regular;
						font-size: 16px;
						color: #4E4E4E;
						letter-spacing: 0.06px;
					}
					.setting-item-right-box-text{
						font-family: PingFangSC-Regular;
						font-size: 16px;
						color: #A1A1A1;
						letter-spacing: 0.06px;
						padding-right: 9rpx;
					}
				}
			}
		}
		.exit-button{
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
			text-align: center;
			width: 604rpx;
			height: 102rpx;
			line-height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
