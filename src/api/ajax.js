/*
 * @Description: In User Settings Edit
 * @Author: 于达
 * @Date: 2019-10-17 20:06:25
 * @LastEditTime: 2019-10-17 20:26:15
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    //    执行异步ajax请求
    let promise;
    if(type==='GET'){
        let dataStr = "";
        Object.keys(data).forEach(key=>{
            dataStr+=key+'=' + data[key]+'&'
        })
        if(dataStr !==''){
            dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
            url = url+'?'+dataStr;
        }
        promise = axios.get(url)
    }else {
        axios.post(url,data)
    }
    promise.then(function(response){
                resolve(response.data)
    })
    .catch(function(error){
        reject(error)
    })
  })
}
