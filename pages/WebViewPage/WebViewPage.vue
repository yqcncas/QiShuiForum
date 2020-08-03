<template>
	<web-view :src="goUrl"></web-view>	
</template>

<script>
	export default {
		onLoad (options) {
			this.goUrl = options.goUrl
		},
		 data () {
			 return {
				 goUrl: ''
			 }
		 }
	}
</script>

<style>
</style>
