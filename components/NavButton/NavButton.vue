<template>
	<view class="nav-button">
		<view class="nav-button-left" :class="{'active': navIndex == 0}" @click="handleNavIndex(0)">{{navleft}}</view>
		<view class="nav-button-right" :class="{'active': navIndex == 1}" @click="handleNavIndex(1)">{{navright}}</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				navIndex: 0,
				
			}
		},
		methods: {
			handleNavIndex (index) {
				this.navIndex = index
				this.$emit('handleNavIndex', index)
			}
		},
		props: {
			navleft: {
				type: String,
				required: true
			},
			navright: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="less">
	.nav-button{
		width: 100%;
		height: 72rpx;
		display: flex;
		align-items: center;
		.nav-button-left, .nav-button-right{
			width: 50%;
			text-align: center;
			position: relative;
			&::after{
				content: '';
				width: 0;
				height: 0;
				border-bottom: 6rpx solid #FF682D;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: -4rpx;
				transition: all .3s;
			}
			&.active{
				color: #FF682D;
				&::after{
					width: 30%;
				}
			}
		}
	}
</style>
