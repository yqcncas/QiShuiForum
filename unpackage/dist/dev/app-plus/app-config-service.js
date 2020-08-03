
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Start/Start","pages/index/index","pages/Invitation/Invitation","pages/Find/Find","pages/Market/Market","pages/My/My","pages/Search/Search","pages/IndexTabConfig/IndexTabConfig","pages/Login/Login","pages/weather/weather","pages/Login/PhoneLogin","pages/Login/ForgetPassWord","pages/My/MyCheerBag","pages/My/MyCollect","pages/Market/JiFenMarket","pages/Market/JiFenMarket","pages/HotHouse/HotHouse","pages/HotHouse/HotCar","pages/My/MyInfo","pages/Find/historyFind","pages/Find/FindDetail","pages/Find/Apply","pages/My/shareMoney","pages/Withdraw/Withdraw","pages/Advertising/PublishAdvertising","pages/index/Topic","pages/Login/Register","pages/Message/Message","pages/Message/Comment","pages/Sign/Sign","pages/index/TopicDetail","pages/index/ArticleDetail","pages/My/UserHomePage","pages/index/ArticleComment","pages/HouseProperty/HouseProperty","pages/HouseProperty/House","pages/HouseProperty/HouseDetail","pages/ShopDetail/ShopDetail","pages/My/MyOrder","pages/My/Merchant","pages/My/MyOrderDetail","pages/RichText/RichText","pages/TopArticles/TopArticles","pages/Pay/Pay","pages/Chat/Chat","pages/MyWallet/Recharge","pages/MyWallet/Particulars","pages/HouseProperty/HouseConsult","pages/My/SettledEnterprise","pages/index/Publish","pages/My/Setting","pages/Login/ChangePwd","pages/My/MessagePush","pages/My/FootPrint","pages/My/Advertising","pages/My/Drafts","pages/MyWallet/MyWallet","pages/WebViewPage/WebViewPage"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"汽水网","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","bounce":"none","scrollIndicator":"none"},"tabBar":{"borderStyle":"white","color":"#4D4D4D","selectedColor":"#FF682D","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/image/tabbar/1.png","selectedIconPath":"static/image/tabbar/1-active.png","text":"首页"},{"pagePath":"pages/Invitation/Invitation","iconPath":"static/image/tabbar/2.png","selectedIconPath":"static/image/tabbar/2-active.png","text":"帖子"},{"pagePath":"pages/Find/Find","iconPath":"static/image/tabbar/3.png","selectedIconPath":"static/image/tabbar/3-active.png","text":"发现"},{"pagePath":"pages/Market/Market","iconPath":"static/image/tabbar/4.png","selectedIconPath":"static/image/tabbar/4-active.png","text":"积分商城"},{"pagePath":"pages/My/My","iconPath":"static/image/tabbar/5.png","selectedIconPath":"static/image/tabbar/5-active.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"汽水论坛","compilerVersion":"2.6.16","entryPagePath":"pages/Start/Start","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Start/Start","meta":{"isQuit":true,"isNVue":true},"window":{"titleNView":"false"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/Invitation/Invitation","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"帖子"}},{"path":"/pages/Find/Find","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现"}},{"path":"/pages/Market/Market","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"积分商城"}},{"path":"/pages/My/My","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","titleNView":{"buttons":[{"type":"none","text":"消息","fontSize":"16px"}]}}},{"path":"/pages/Search/Search","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/pages/IndexTabConfig/IndexTabConfig","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/pages/Login/Login","meta":{},"window":{"navigationBarTitleText":"用户登录"}},{"path":"/pages/weather/weather","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/pages/Login/PhoneLogin","meta":{},"window":{"navigationBarTitleText":"用户登录"}},{"path":"/pages/Login/ForgetPassWord","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/My/MyCheerBag","meta":{},"window":{"navigationBarTitleText":"加油包充值"}},{"path":"/pages/My/MyCollect","meta":{},"window":{"navigationBarTitleText":"我的收藏"}},{"path":"/pages/Market/JiFenMarket","meta":{},"window":{"navigationBarTitleText":"积分商城"}},{"path":"/pages/HotHouse/HotHouse","meta":{},"window":{"navigationBarTitleText":"热卖楼盘"}},{"path":"/pages/HotHouse/HotCar","meta":{},"window":{"navigationBarTitleText":"热卖车款"}},{"path":"/pages/My/MyInfo","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/pages/Find/historyFind","meta":{},"window":{"navigationBarTitleText":"活动"}},{"path":"/pages/Find/FindDetail","meta":{},"window":{"navigationBarTitleText":"活动详情","titleNView":{"buttons":[{"type":"share"}]}}},{"path":"/pages/Find/Apply","meta":{},"window":{"navigationBarTitleText":"填写表单"}},{"path":"/pages/My/shareMoney","meta":{},"window":{"navigationBarTitleText":"分享赚钱","titleNView":{"buttons":[{"type":"share"}]}}},{"path":"/pages/Withdraw/Withdraw","meta":{},"window":{"navigationBarTitleText":"提现"}},{"path":"/pages/Advertising/PublishAdvertising","meta":{},"window":{"navigationBarTitleText":"发布广告"}},{"path":"/pages/index/Topic","meta":{},"window":{"navigationBarTitleText":"话题"}},{"path":"/pages/Login/Register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/Message/Message","meta":{},"window":{"navigationBarTitleText":"消息"}},{"path":"/pages/Message/Comment","meta":{},"window":{"navigationBarTitleText":"评论管理"}},{"path":"/pages/Sign/Sign","meta":{},"window":{"navigationBarTitleText":"签到"}},{"path":"/pages/index/TopicDetail","meta":{},"window":{"navigationBarTitleText":"话题"}},{"path":"/pages/index/ArticleDetail","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/My/UserHomePage","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/ArticleComment","meta":{},"window":{"navigationBarTitleText":"评论详情"}},{"path":"/pages/HouseProperty/HouseProperty","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/HouseProperty/House","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/HouseProperty/HouseDetail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/ShopDetail/ShopDetail","meta":{},"window":{"navigationBarTitleText":"商品详情"}},{"path":"/pages/My/MyOrder","meta":{},"window":{"navigationBarTitleText":"我的订单","popGesture":"none"}},{"path":"/pages/My/Merchant","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/My/MyOrderDetail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages/RichText/RichText","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/TopArticles/TopArticles","meta":{},"window":{"navigationBarTitleText":"置顶购买"}},{"path":"/pages/Pay/Pay","meta":{},"window":{"navigationBarTitleText":"支付"}},{"path":"/pages/Chat/Chat","meta":{},"window":{"navigationBarTitleText":"私信","softinputMode":"adjustResize"}},{"path":"/pages/MyWallet/Recharge","meta":{},"window":{"navigationBarTitleText":"充值"}},{"path":"/pages/MyWallet/Particulars","meta":{},"window":{"navigationBarTitleText":"明细"}},{"path":"/pages/HouseProperty/HouseConsult","meta":{},"window":{"navigationBarTitleText":"咨询"}},{"path":"/pages/My/SettledEnterprise","meta":{},"window":{"navigationBarTitleText":"商家入驻"}},{"path":"/pages/index/Publish","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/My/Setting","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/Login/ChangePwd","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/My/MessagePush","meta":{},"window":{"navigationBarTitleText":"消息推送"}},{"path":"/pages/My/FootPrint","meta":{},"window":{"navigationBarTitleText":"浏览足迹"}},{"path":"/pages/My/Advertising","meta":{},"window":{"navigationBarTitleText":"我的广告","titleNView":{"buttons":[{"type":"none","text":"投放","fontSize":"16px"}]}}},{"path":"/pages/My/Drafts","meta":{},"window":{"navigationBarTitleText":"草稿箱","titleNView":{"buttons":[{"type":"none","text":"清空","fontSize":"16px"}]}}},{"path":"/pages/MyWallet/MyWallet","meta":{},"window":{"navigationBarTitleText":"我的钱包","titleNView":{"buttons":[]}}},{"path":"/pages/WebViewPage/WebViewPage","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
