/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-13 22:38:05
 * @LastEditTime: 2019-10-18 21:05:56
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App),
  // components: { App },
  // template: '<App/>'
})
