/*
 * @Description: In User Settings Edit
 * @Author: yoda
 * @Date: 2019-10-13 22:38:05
 * @LastEditTime: 2019-10-16 20:30:13
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home/Mist.vue"
import Order from "../pages/Order/Order.vue"
import Search from "../pages/Search/Search.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from "../pages/Login/Login"

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:"/home",
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/order",
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/search",
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/profile",
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/login",
      component:Login,
      meta:{
        showFooter:false
      }
    },
    {
      path: '/',
      redirect:'/home',
      meta:{
        showFooter:true
      }
    }
  ]
})
