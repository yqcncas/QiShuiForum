// 请在此对象写后端的请求接口列表
export default {
	// dev:'http://192.168.8.8:8096/',
	// pro: 'http://192.168.8.8:8096/',
	dev:'http://106.54.226.179:8096/',
	pro: 'http://106.54.226.179:8096/',
	
	
	//　上传头像地址
	baseLocation: 'https://img.bajiaostar.com/', 
	// 七牛
	unloadLocation: 'https://upload.qiniup.com/', 
	publiukey: '-----BEGIN PUBLIC KEY-----'+ 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgT3u4r5d3HH0nFHciSFrKj7bc2cTTpqJwLo5oTrG5EyEiNAho3H4vi5yuBhF/A8Vq64XS3mjAwH1lxWt+yvXNKiDhOKrRUcHVzw/FsUp0AGBjlq+hnXjm7paU9kO1aQo67kM1HbukMuQRhshBJsD5/FsFQHURMPIShIpHEMjUlQIDAQAB' +'-----END PUBLIC KEY-----',





	
	/**
	 * 登录
	 */
	login: "/nt/user/login", // 登录(loginName 指的是普通登录 手机登录 都是登录账号手机号,微信就是填openId或者unionId,苹果就填appId,普通登录和手机登录需要checkCode,登录类型 loginType 0 普通登录)
	mobilecode: "/nt/user/mobile_verification_code", // 获取手机验证码
	register: "/nt/user/register", // 绑定手机号注册
	getCurrentUser: "/t/user/get_current_user", // 获取当前用户
	forget_pwd: "/nt/user/forget_pwd", // 忘记密码
	im_register: "/t/user/im_register", // 极光注册
	get_user_qrcode: "/t/user/get_user_qrcode", // 获取邀请二维码以及用户信息
	
	
	
	/**
	 * 文章版块
	 */
	
	getAllPlate: "/nt/article/get_all_plate", // 获取所有板块
	artivle_list: "/nt/article/artivle_list", // 文章列表
	updUserPlate: "/t/user/upd_user_plate", // 添加用户栏目
	getrotationchart: "/nt/article/get_rotation_chart", // 轮播图
	getadvertlist: "/nt/article/get_advert_list", // 根据广告类型获取广告列表
	artivle_detail_by_id: "/nt/article/artivle_detail_by_id", // 文章详情
	reply_list: "/nt/article/reply_list", // 获取回复消息
	follow: "/t/article/follow", // 关注或取消(toUserId 关注用户id)
	collection: "/t/article/collection", // 收藏或取消(relationId 关联id 文章就传文章id type(0商品 1文章))
	house_consult: "/nt/article/house_consult", // 房产咨询
	car_consult: "/nt/article/car_consult", // 汽车咨询
	decorate_consult: "/nt/article/decorate_consult", // 汽车咨询
	hot_plate: "/nt/article/hot_plate", // 热点板块
	hot_special_detail: "/nt/article/hot_special_detail", //热点详情
	hot_detail: "/nt/article/hot_detail", // 热点板块详情
	hot_special: "/nt/article/hot_special", // 	热点列表
	new_label: "/nt/article/new_label", // 话题列表
	two_plate_type_by_id: "/nt/article/two_plate_type_by_id", // 根据板块id查看是否有二级板块
	top_list: "/nt/article/top_list", // 置顶列表
	get_now_evaluate_advert: "/nt/article/get_now_evaluate_advert", // 查看今日评论区广告
	upd_evaluate_advert_display_num: "/nt/article/upd_evaluate_advert_display_num", // 更新评论区广告展现量
	upd_advert_hits: "/nt/article/upd_advert_hits", // 更新点击量
	get_all_explain: "/nt/article/get_all_explain", // 返回所有说明以及协议
	calculate_time: "/t/article/calculate_time", // 根据天数计算广告开始结束时间 type =0 广告 =1 置顶 置顶时传帖子id
	article_shield: "/t/article/article_shield", // 屏蔽
	del_article: "/t/article/del_article", // 文章删除
	upd_praise_status: "/t/article/upd_praise_status", // 评价点赞
	get_advert_by_id: "/nt/article/get_advert_by_id", // 富文本详情
	
	
	
	/**
	 * 我的
	 */
	
	myArticle: "/t/article/my_article", // 我的帖子
	myDrafts: "/t/article/my_drafts", // 我的草稿箱
	clear_my_drafts: "/t/article/clear_my_drafts", // 清空我的草稿箱
	get_user_by_id: "/nt/user/get_user_by_id", // 根据用户id获取用户详情
	get_user_list: "/nt/user/get_user_list", // 搜索获取用户
	upd_user:　"/t/user/upd_user", // 编辑基本信息
	get_can_push_user: "/t/user/get_can_push_user", // 获取可推送用户
	get_activity_list: "/nt/user/get_activity_list", // 活动列表（type =0 所有活动 type =1 正在进行中的活动）
	activity_detail: '/nt/user/activity_detail', // 活动详情（id 为活动id）
	activity_apply: "/t/user/activity_apply", // 更新活动参加数
	get_property_by_type: "/nt/user/get_property_by_type", // 获取系统配置
	upd_pwd: "/t/user/upd_pwd", // 修改密码
	my_ads: "/t/article/my_ads", // 我的广告
	buy_refueling_bag: "/t/article/buy_refueling_bag", // 加油包购买
	refueling_bag_list: "/nt/article/refueling_bag_list", // 加油包充值列表
	apply_merchant: "/t/goods/apply_merchant", // 申请商家入驻
	get_apply_merchant: "/t/goods/get_apply_merchant", // 查看是否申请商家入驻
	yesterday_is_sign: "/t/user/yesterday_is_sign", // 获取昨日是否签到
	sign: "/t/user/sign", // 签到
	my_wallet_details: "/t/user/my_wallet_details", // 我的钱包明细
	get_browse_record: "/t/user/get_browse_record", // 查看浏览记录
	add_draw_apply: "/t/user/add_draw_apply", // 提交提现申请
	get_follow_list: "/t/user/get_follow_list", // 获取我关注的或关注我的用户列表 type =0 我关注的 =1 关注我的

	
	
	
	

	// 七牛uptoken
	getQiniuToken: "/t/user/get_qiniu_token", // 获取七牛token
	
	/**
	 * 发帖
	 */
	add_article: "/t/article/add_article", // 发帖
	add_drafts: "/t/article/add_drafts", // 草稿箱
	buy_top: "/t/article/buy_top", // 置顶购买
	del_my_drafts: "/t/article/del_my_drafts", // 根据id删除草稿
	evaluate: "/t/article/evaluate", // 评价
	buy_advert: "/t/article/buy_advert", // 广告购买
	evaluate_manager: "/t/article/evaluate_manager", // 评论管理
	del_evaluate: '/t/article/del_evaluate', // 评论删除

	
	
	
	/**
	 * 商品
	 */
	goods_detail: "/nt/goods/goods_detail", // 商品详情
	goods_list: "/nt/goods/goods_list", // 商品列表(type 0 限时抢购 1 积分兑换 goodsStatus 1 正在进行中的商品 2 下架的商品 3 待上架的商品 boutiqueFlag 精品标识0 否 1是)
	buy_goods: "/t/goods/buy_goods", // 购买商品(id 商品id payType 支付类型)
	my_order: "/t/goods/my_order", // 我的订单
	order_detail: "/t/goods/order_detail", // 订单详情
	refund: "/t/goods/refund", // 退款
	write_off_goods: "/t/goods/write_off_goods", // 核销商品
	my_write_off_order: "/t/goods/my_write_off_order", // 我核销的订单
	my_collection_list: '/t/article/my_collection_list', // 我的收藏列表
	
	/**
	 * 更新
	 */
	get_new_version: "nt/user/get_new_version", // 版本更新
	
	
}
