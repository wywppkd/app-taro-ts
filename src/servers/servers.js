import Taro from '@tarojs/taro'
import HTTPREQUEST from "./http"
import { getAuthCode } from '../utils'

// 获取token
export const getToken = async () => {
  const authCode = await getAuthCode()
  const data = {
    blockId: "1200011",
    areaId: "2200001",
    accessPlatForm: Taro.getEnv() === "ALIPAY" ? 5 : 6,
    authCode
  }
  return HTTPREQUEST.post({ url: '/joinUp/getToken', ...{ data } })
}

// 用户手机号登陆
export const dynamicAuthor = params => {
  return HTTPREQUEST.post({ url: '/joinUp/dynamicAuthor', ...params })
}
