<template>
	<view class="HouseConsult">
		<view class="HouseConsult-item">
			<view class="HouseConsult-item-left">姓名*</view>
			<input type="text" v-model="userName" placeholder="请输入您的姓名" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
		</view>
		<view class="HouseConsult-item">
			<view class="HouseConsult-item-left">联系电话*</view>
			<input type="number" maxlength="11" v-model="userPhone" placeholder="请输入您的联系电话" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
		</view>
		<view class="fangchan" v-if="type == 0">
			<view class="HouseConsult-item">
				<view class="HouseConsult-item-left">意向楼盘*</view>
				<input type="text" v-model="loupan" placeholder="请填写您的意向楼盘" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
			<view class="HouseConsult-item">
				<view class="HouseConsult-item-left">房屋户型*</view>
				<input type="text" v-model="huxing" placeholder="请填写您的意向户型" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
		</view>
		<view class="car" v-if="type == 1">
			<view class="HouseConsult-item">
				<view class="HouseConsult-item-left">意向款*</view>
				<input type="text" v-model="yixiangCar" placeholder="请填写您的意向车款" placeholder-style="font-family: PingFangSC-Regular;font-size: 14px;color: #A3A3A3;" />
			</view>
		</view>
		<view class="line-3"></view>
		<view class="else-consult">
			<view class="else-consult-title">其他咨询</view>
			<view class="else-consult-box">
				<textarea v-model="elseConsult" placeholder="多行输入" placeholder-style="font-size: 14px;color: #A3A3A3;"/>
			</view>
		</view>
		<view class="consult-button" @click="submitForm">提 交</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.type = options.type
		},
		data () {
			return {
				userName: '',
				userPhone: '',
				loupan: '',
				huxing: '',
				elseConsult: '',
				yixiangCar: '',
				type: 0 // 0房产 1汽车
			}
		},
		methods: {
			//　提交
			submitForm () {
				if(!this.$u.test.mobile(this.userPhone)){
					return uni.showToast({
						icon: 'none',
						title: '请检查手机号输入是否有误'
					})
				}
				if (this.type == 0) {
					// 房产
					if (this.userName.trim() == '' || this.loupan.trim() == '' || this.huxing.trim() == '') {
						return uni.showToast({
							icon: 'none',
							title: '请检查信息是否填写正确'
						})
					}
				} else {
					// 汽车
					if (this.userName.trim() == '' || this.yixiangCar.trim() == '') {
						return uni.showToast({
							icon: 'none',
							title: '请检查信息是否填写正确'
						})
					}
				}
					
			}
		}
	}
</script>

<style lang="less">
	.HouseConsult{
		.car{
			padding-bottom: 38rpx;
			box-sizing: border-box;
		}
		.fangchan{
			padding-bottom: 38rpx;
			box-sizing: border-box;
		}
		.HouseConsult-item{
			padding-left: 36rpx;
			padding-right: 36rpx;
			padding-top: 56rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			&:nth-child(1){
				padding-top: 26rpx;
			}
			&:nth-child(4){
				padding-bottom: 26rpx;
			}
			.HouseConsult-item-left{
				width: 152rpx;
			}
			input{
				flex: 1;
			}
		}
		.else-consult{
			padding-top: 24rpx;
			padding-left: 36rpx;
			padding-right: 36rpx;
			box-sizing: border-box;
			.else-consult-title{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #141414;
				letter-spacing: -0.34px;
				padding-bottom: 24rpx;
				box-sizing: border-box;
				
			}
			.else-consult-box{
				width: 678rpx;
				height: 416rpx;
				background: #F4F4F4;
				border-radius: 5px;
				padding: 16rpx 18rpx;
				box-sizing: border-box;
				textarea{
					width: 100%;
					height: 100%;
				}
			}
		}
		.consult-button{
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 604rpx;
			height: 102rpx;
			text-align: center;
			line-height: 102rpx;
			background-image: linear-gradient(136deg, #FF8D3F 0%, #E86D29 100%);
			border-radius: 4px;
			font-family: PingFangSC-Medium;
			font-size: 21px;
			color: #FFFFFF;
			letter-spacing: 1.19px;
		}
	}
</style>
