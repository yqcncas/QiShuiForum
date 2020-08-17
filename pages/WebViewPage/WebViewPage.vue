<template>
	<view>
		<web-view :src="goUrl"></web-view>	
	</view>
</template>

<script>
	export default {
		 data () {
			 return {
				 goUrl: ''
			 }
		 },
		 onLoad (options) {
		 	this.goUrl = options.goUrl
		 
		 }
	}
</script>

<style>
</style>
