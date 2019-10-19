<!--
 * @Description: In User Settings Edit
 * @Author: 于达
 * @Date: 2019-10-17 21:08:28
 * @LastEditTime: 2019-10-19 22:59:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="msite">
      <HeaderTop :title="address.name">
            <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
      </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="category">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item ,index) in category" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(ele,index) in item" :key="index">
                  <div class="food_container">
                    <img :src="ele.image_url">
                  </div>
                  <span>{{ele.title}}</span>
                </a>
               
              </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/nav/msite_back.svg" alt="back" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
       <ShopList/>
        </div>
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import HeaderTop from "../../components/HeaderTop/HeaderTop"
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.min.css'
import ShopList from "../../components/ShopLIst/ShopList"
export default {
    components:{
      HeaderTop,ShopList
    },
       computed:{
        ...mapState(['address','categories']),
        category(){
               let {categories} = this;
              const arr = [];
              let minArr = [];
              categories.forEach(item => {
                if(minArr.length===8){
                  minArr=[];
                }
                   if(minArr.length===0){
                  arr.push(minArr);
                }
                minArr.push(item)
              });
              return arr;
        }

      },
      watch:{
            category(value){
                  this.$nextTick(function(){  //数据变化立即调用this.$nextTIck
   var mySwiper = new Swiper(".swiper-container",{
        loop:true,
        // direction:'vertical',
        pagination:{
          el:'.swiper-pagination'
        }
      })
                  })
            }
      },
    mounted(){
      this.getAddress();
      this.$store.dispatch('getCategory')
      console.log(this.category)
   
    },
    methods:{
      ...mapActions(['getAddress'])
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl";
         .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            .shop_container
              margin-bottom 50px
 </style>