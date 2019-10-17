/*
 * @Description: In User Settings Edit
 * @Author: 于达
 * @Date: 2019-10-17 20:06:33
 * @LastEditTime: 2019-10-18 00:08:23
 * @LastEditors: Please set LastEditors
 */
import ajax from './ajax'
const BASE_URL = '/api';
// const BASE_URL = 'http://localhost:4000'
export const repFoodCategory = ()=> ajax(`${BASE_URL}/index_category`)
export const reqAddress = (address)=>ajax(`${BASE_URL}/position/${address}`)
export const reqShops = (longitude,latitude)=>ajax(`${BASE_URL}/shops`,{longitude,latitude})