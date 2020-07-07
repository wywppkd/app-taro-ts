import Taro from '@tarojs/taro'

// 获取auCode: 用于换取支付宝uid, 微信openid
export default () => {
  const env = Taro.getEnv();
  if (env === "ALIPAY") {
    // 支付宝
    return new Promise((resolve, recject) => {
      my.getAuthCode({
        success: (res) => {
          resolve(res.authCode);
        },
        fail: (err) => {
          recject(err)
        }
      });
    })
  } else if (env === "WEAPP") {
    // 微信
    return new Promise((resolve, recject) => {
      Taro.login({
        success: function (res) {
          if (res.code) {
            resolve(res.code)
          } else {
            recject(res)
          }
        }
      })
    })
  }
}