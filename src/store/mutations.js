/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 16:42:44
 * @LastEditTime: 2019-10-18 22:24:00
 * @LastEditors: Please set LastEditors
 */
import {RECEIVE_ADDRESS,RECEIVE_SHOP,RECEIVE_CATEGORY} from "./mutations_type"

export default {
    [RECEIVE_ADDRESS](state,{address}){
    state.address = address;
    },

    [RECEIVE_SHOP](state,{shops}){
    state.shops = shops;
    },

    [RECEIVE_CATEGORY](state,{category}){
        state.categories = category;
    
    }
}