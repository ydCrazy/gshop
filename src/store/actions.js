/*
 * @Description: In User Settings Edit
 * @Author: 于达 
 * @Date: 2019-10-14 16:42:32
 * @LastEditTime: 2019-10-18 00:11:05
 * @LastEditors: Please set LastEditors
 */
import {RECEIVE_ADDRESS,RECEIVE_SHOP,RECEIVE_CATEGORY} from "./mutations_type.js"
// 页面this.$store.dispatch("add_todo")
import {
    repFoodCategory,
    reqAddress,
    reqShops
} from '../api'
export default {
      //异步获取地址
      getAddress({commit,state}) {
          const geohash = state.latitude + ','+state.longitude
        reqAddress(geohash).then(res=>{
            if(res.code===0) {
                const address = res.data.name;
                console.log(address)
                commit(RECEIVE_ADDRESS,{address})
            }
            

        })
      },
    //   获商家
      getShpos({commit,state}) {
        // const geohash = state.latitude + ','+state.longitude
       const {latitude,longitude} = state;
        reqShops(latitude,longitude).then(res=>{
          if(res.code===0) {
              const data = res.data.name;
              commit(RECEIVE_SHOP,{data})
          }

      })
    }
}