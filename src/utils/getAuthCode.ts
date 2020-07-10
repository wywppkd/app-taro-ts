import Taro, { ENV_TYPE } from '@tarojs/taro'

/**
 * 获取支付宝/微信的authCode, 用来换取uid/openId
 */
export default (): Promise<string> => {
  const env = Taro.getEnv();
  if (env === ENV_TYPE.ALIPAY) {
    // 支付宝
    return new Promise((resolve, reject) => {
      my.getAuthCode({
        success: (res) => {
          resolve(res.authCode);
        },
        fail: () => {
          reject("获取authCode失败")
        }
      });
    })
  } else if (env === ENV_TYPE.WEAPP) {
    // 微信
    return new Promise((resolve, reject) => {
      Taro.login({
        success: function (res) {
          if (res.code) {
            resolve(res.code)
          } else {
            reject("获取authCode失败")
          }
        }
      })
    })
  } else {
    return Promise.reject("既不是微信也不是支付宝")
  }
}