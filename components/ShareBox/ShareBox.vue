<template>
	<view class="share-box" v-if = "showShareBoxFlag">
		<u-popup v-model="showShareBoxFlag" mode="bottom" border-radius="14" style = "z-index: 999;">
			<view class="share-box-wrapper">
				<view class="share-box-wrapper-left" @click="shareWx">
					<image src="../../static/image/ych/share/1.png" mode="aspectFill"></image>
					<view class="share-box-wrapper-left-title">分享到微信</view>
				</view>
				<view class="share-box-wrapper-left" @click="shareFre">
					<image src="../../static/image/ych/share/2.png" mode="aspectFill"></image>
					<view class="share-box-wrapper-left-title">分享到朋友圈</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: ['showShareBoxFlag'],
		watch:{
			showShareBoxFlag(newV, oldV) {
				this.$emit('changeShowBoxFLag', newV)
			}
		},
		methods: {
			shareWx () {
				this.$emit('shareWx')
			},
			shareFre () {
				this.$emit('shareFre')
			}
		}
	}
</script>

<style lang="less">
	
	.share-box-wrapper{
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		box-sizing: border-box;
		.share-box-wrapper-left{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image{
				width: 90rpx;
				height: 90rpx;
			}
			.share-box-wrapper-left-title{
				padding-top: 10rpx;
				box-sizing: border-box;
			}
		}
	}
</style>
