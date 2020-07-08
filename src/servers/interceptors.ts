// 响应拦截器
import Taro from "@tarojs/taro";
// import HTTP_STATUS from './httpStatus'

const customInterceptor = (chain) => {

  // 请求拦截器
  const requestParams = chain.requestParams

  // 调用下一个拦截器或发起请求
  return chain.proceed(requestParams).then(res => {
    // 响应拦截器

    // 只要请求成功，不管返回什么状态码，都走这个回调
    if ((res.statusCode >= 200 && res.statusCode < 300) || res.statusCode === 304) {
      // 成功状态码
      if (res.data && res.data.code && res.data.code === "0001") {
        // 登录过期
        Taro.showModal({
          content: '长时间未操作，登录过期',
          showCancel: false
        }).then(() => {
          Taro.reLaunch({
            url: "/pages/index/index"
          })
        })
      }
      return res.data
    } else {
      // 其他异常状态码
      return Promise.reject(res)
    }

    // 只要请求成功，不管返回什么状态码，都走这个回调
    // if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
    //   return Promise.reject("请求资源不存在")

    // } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
    //   return Promise.reject("服务端出现了问题")

    // } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
    //   Taro.setStorageSync("Authorization", "")
    //   // 根据自身业务修改
    //   return Promise.reject("没有权限访问");

    // } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
    //   Taro.setStorageSync("Authorization", "")
    //   return Promise.reject("需要鉴权")

    // } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
    //   return res.data

    // }
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]

export default interceptors
