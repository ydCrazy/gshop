<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-13 22:38:05
 * @LastEditTime: 2019-10-18 00:04:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from "./components/Footer/Footer.vue"
export default {
  components:{
    Footer,
  },
  name: 'App',
  mounted(){
    this.$store.dispatch('getAddress')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app 
  width 100%
  height 100%
  background-color #f5f5f5
</style>
