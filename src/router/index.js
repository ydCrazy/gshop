/*
 * @Description: In User Settings Edit
 * @Author: yoda
 * @Date: 2019-10-13 22:38:05
 * @LastEditTime: 2019-10-15 22:47:49
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home/Mist.vue"
import Order from "../pages/Order/Order.vue"
import Search from "../pages/Search/Search.vue"
import Profile from "../pages/Profile/Profile.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:"/home",
      component:Home
    },
    {
      path:"/order",
      component:Order
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/profile",
      component:Profile
    },
    {
      path: '/',
      redirect:'/home'
    }
  ]
})
