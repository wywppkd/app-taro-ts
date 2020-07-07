import Taro from '@tarojs/taro'
import { store } from '../store/index'
import BaseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

console.log("store.getState()", store.getState())

class HttpRequest {
  baseOptions(params, method = "GET") {
    const { url, data = "", customLoading } = params;
    const BASE_URL = BaseUrl;
    let contentType = "application/x-www-form-urlencoded";
    contentType = params.contentType || contentType;
    const option = {
      url: BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        // 优先从redux中获取token(速度快)
        'Authorization': store.getState().user.status || Taro.getStorageSync('token') || ''
      },
      customLoading,
      fail() {
        // 避免请求超时, 一直loading
        Taro.hideLoading()
      }
    };
    if (!customLoading) {
      // 显示loading
      Taro.showLoading({
        title: '加载中...'
      })
    }
    return Taro.request(option);
  }

  get(option) {
    return this.baseOptions(option);
  }

  post(option) {
    return this.baseOptions(option, "POST");
  }

  put(option) {
    return this.baseOptions(option, "PUT");
  }

  delete(option) {
    return this.baseOptions(option, "DELETE");
  }

}

export default new HttpRequest()
