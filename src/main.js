// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入新建的插件
import MyHttpServer from './plugins/http.js'

// 引入公共的样式
import './assets/css/reset.css'
import router from './router'

// 引入的两个文件在这里使用
Vue.use(ElementUI)
Vue.use(MyHttpServer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
