import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import uView from "uview-ui";
Vue.use(uView);

import fetch from './libs/request.js'
import api from './api'

Vue.prototype.$fetch = fetch
Vue.prototype.$api = api

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' // 引入相对时间
import 'dayjs/locale/zh-cn' // 引入中文
dayjs.locale('zh-cn') // 引入中文
dayjs.extend(relativeTime)
Vue.prototype.$dayjs = dayjs // 放入原型中

import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)	


import Status from './components/Status/Status.vue'
Vue.component('Status', Status)
import Stick from './components/Stick/Stick.vue'
Vue.component('Stick', Stick)
import ArticleMain from './components/ArticleMain/ArticleMain.vue'
Vue.component('ArticleMain', ArticleMain)
import NavButton from './components/NavButton/NavButton.vue'
Vue.component('NavButton', NavButton)
import Fab from './components/Fab/Fab.vue'
Vue.component('Fab', Fab)
import uniLoadMore from './components/uni-load-more/uni-load-more.vue'
Vue.component('uniLoadMore',uniLoadMore);
import shareBox from './components/ShareBox/ShareBox.vue'
Vue.component('shareBox', shareBox)

const app = new Vue({
    ...App
})
app.$mount()
