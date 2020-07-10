import Taro from '@tarojs/taro'
import { store } from '../store/index'
import BaseUrl from './baseUrl'
import interceptors from './interceptors'

// Taro.request之前, 调用 Taro.addInterceptor添加拦截器
interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

/**
 * 约束request入参
 */
type RequestOption = {
  /**
   * 请求相对地址
   */
  url: string
  /**
   * 请求参数
   */
  data?: any
  /**
   * content-type
   */
  contentType?: string
  /**
   * 展示/不展示loading
   */
  showLoading?: boolean
}

/**
 * 约束request入参: 请求方法
 */
enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/**
 * Promise二次封装Taro.request
 * @param option 请求相关配置
 * @param method 请求方法
 */
function request(option: RequestOption, method?: Methods) {
  const { url, data = "", showLoading = true, contentType = "application/x-www-form-urlencoded" } = option
  if (showLoading) {
    // 显示loading
    Taro.showLoading({
      title: '加载中...'
    })
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      method: method || Methods['GET'],
      url: `${BaseUrl}${url}`,
      data: data,
      header: {
        'content-type': contentType,
        'Authorization': store.getState().tokenReducer.token || Taro.getStorageSync('token') || ''
      },
      success: function (res) {
        console.log("request -> success")
        if (showLoading) {
          // 隐藏loading
          Taro.hideLoading()
        }
        resolve(res.data)
      },
      fail: function (err) {
        console.log("request -> fail")
        if (showLoading) {
          // 隐藏loading
          Taro.hideLoading()
        }
        reject(err)
      }
    })
  })
}

/**
 * 暴露请求方法
 */
export default {
  get(option: RequestOption): Promise<any> {
    return request(option)
  },
  post(option: RequestOption): Promise<any> {
    return request(option, Methods.POST)
  },
  put(option: RequestOption): Promise<any> {
    return request(option, Methods.PUT)
  },
  delete(option: RequestOption): Promise<any> {
    return request(option, Methods.DELETE)
  }
}

// class HttpRequest {
//   baseOptions(params, method?: string) {
//     const { url, data = "", showLoading } = params;
//     const BASE_URL = BaseUrl;
//     let contentType = "application/x-www-form-urlencoded";
//     contentType = params.contentType || contentType;
//     const option = {
//       url: BASE_URL + url,
//       data: data,
//       method: method || "GET",
//       header: {
//         'content-type': contentType,
//         // 优先从redux中获取token(速度快)
//         'Authorization': store.getState().userReducer.status || Taro.getStorageSync('token') || ''
//       },
//       showLoading,
//       fail() {
//         // 避免请求超时, 一直loading
//         Taro.hideLoading()
//       }
//     };
//     if (!showLoading) {
//       // 显示loading
//       Taro.showLoading({
//         title: '加载中...'
//       })
//     }
//     return Taro.request(option);
//   }

//   get(option) {
//     return this.baseOptions(option);
//   }

//   post(option) {
//     return this.baseOptions(option, "POST");
//   }

//   put(option) {
//     return this.baseOptions(option, "PUT");
//   }

//   delete(option) {
//     return this.baseOptions(option, "DELETE");
//   }

// }

// export default new HttpRequest()
