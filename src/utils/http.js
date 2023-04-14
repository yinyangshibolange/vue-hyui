import axios from "axios"
import Vue from "vue"

const axios_instance = axios.create({
  baseUrl: "/",
  timeout: 2000,
})

let loading;

axios_instance.interceptors.request.use(function (config) {
  if (typeof Vue.prototype.$loading === 'function' && !config.hideloading) {
    let loading_text = '加载中'
    if (['post', 'put'].includes(config.method)) {
      loading_text = '提交中'
    } else if (config.method === 'delete') {
      loading_text = '删除中'
    }
    loading = Vue.prototype.$loading({
      lock: true,
      text: loading_text,
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.3)'
    })
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
axios_instance.interceptors.response.use(function (response) {
 console.log(response)
  if (typeof Vue.prototype.$loading === 'function') {
    loading && loading.close()
  }

  if (response.status === 200) {
    if( response.data) {
      return  response.data
    }
    return response
  } else {
    // 对响应数据做点什么
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default axios_instance