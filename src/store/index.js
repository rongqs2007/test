/**
 * VUEX 的创建   安装  npm install vuex --save
 * 1、引入vuex
 * 2、创建store
 * 3、配置store中的数据存取
 * 4、将store对象关联到vue实例
 */
import Vue from 'vue'
import Vuex from 'VUEX'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 取数据
  getters: {
    _getCount (state) {
      return state.count
    }
  },
  // 操作数据
  mutations: {
    increment (state, payload) {
      state.count += payload.count // 调用传递的数量
    }
  }
})
