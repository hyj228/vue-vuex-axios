import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import RoomList from '@/pages/RoomList'
import VuexTest from '@/pages/VuexTest'
import Second from '@/pages/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/second',
      component: Second
    },
    {
      path: '/',
      component: VuexTest
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:"/roomlist/:cateid",
      component:RoomList
    }
  ]
})
