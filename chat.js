/**
	// 弹出聊天界面
 用法 chat(imUsername, nickname)
  */
	export default chat
	
	function chat (imUsername, nickname) {
		console.log(imUsername)
		console.log(nickname)
		if (uni.getSystemInfoSync().platform == 'android') {
			// 极光聊天室二次封装
			const dcRichAlert = uni.requireNativePlugin('ZWM-BJXMapView');
			// 弹出聊天界面
			return dcRichAlert.showChatViewController({ 
				username: imUsername,
				TARGET_NICKNAME: nickname,
				TARGET_APP_KEY:'67438bad79ab28487215a722',
			}, result => { console.log(result) })
		}else {
			const dcJobAlert = uni.requireNativePlugin('ZWM-BJXJobView');
			dcJobAlert.testSyncFunc({ 
				username: imUsername
			}, result => { console.log(result) })
		}
		
	}