import Vue from 'vue'
import Router from 'vue-router'
import StoreTest from '@/components/StoreTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StoreTest',
      component: StoreTest
    }
  ]
})
