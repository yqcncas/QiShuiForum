// 请在此对象写后端的请求接口列表
export default {
	dev:'http://192.168.8.8:8096/',
	pro: 'http://192.168.8.8:8096/',
	//　上传头像地址
	baseLocation: 'https://img.bajiaostar.com/', 
	// 七牛
	unloadLocation: 'https://upload.qiniup.com/', 
	
	/**
	 * 登录
	 */
	login: "/nt/user/login", // 登录(loginName 指的是普通登录 手机登录 都是登录账号手机号,微信就是填openId或者unionId,苹果就填appId,普通登录和手机登录需要checkCode,登录类型 loginType 0 普通登录)
	mobilecode: "/nt/user/mobile_verification_code", // 获取手机验证码
	register: "/nt/user/register", // 绑定手机号注册
	getCurrentUser: "/t/user/get_current_user", // 获取当前用户
	
	/**
	 * 文章版块
	 */
	
	getAllPlate: "/nt/article/get_all_plate", // 获取所有板块
	artivle_list: "/nt/article/artivle_list", // 文章列表
	updUserPlate: "/t/user/upd_user_plate", // 添加用户栏目
	
	/**
	 * 我的
	 */
	
	myArticle: "/t/article/my_article", // 我的帖子
	
	/**
	 * 七牛
	 */
	baseLocation: 'https://img.bajiaostar.com/', 
	unloadLocation: 'https://upload.qiniup.com/', 
	getQiniuToken:'api/mine/getQiniuToken', //获取七牛token	
	
}
