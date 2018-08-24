// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 如果支持的浏览器并没有实现 Promise (比如 IE)，那么可以使用一个polyfill的库，例如 es6-promise
// 安装 npm install es6-promise --save
import 'es6-promise/auto'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
