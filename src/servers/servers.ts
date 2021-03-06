import Taro from '@tarojs/taro'
// import HTTPREQUEST from "./http"
import { getAuthCode } from '../utils'
import $http from './http'
import { Result } from "../schema/Result"
import { GetToken } from '../schema/GetToken'
import { PhoneNumberLoginReq } from '../schema/PhoneNumberLogin'

export const getToken = async (): Promise<Result<GetToken>> => {
  const auth_code = await getAuthCode()
  const data = {
    blockId: "1200011",
    areaId: "2200001",
    accessPlatForm: Taro.getEnv() === "ALIPAY" ? 5 : 6,
    auth_code
  }
  return $http.post({
    url: "/joinUp/getToken",
    data
  })
}

// 用户手机号登陆
export const dynamicAuthor = (params: PhoneNumberLoginReq): Promise<Result<null>> => {
  return $http.post({ url: '/joinUp/dynamicAuthor', data: params, showLoading: false })
}

// // 获取token
// export const getToken = async () => {
//   const authCode = await getAuthCode()
//   const data = {
//     blockId: "1200011",
//     areaId: "2200001",
//     accessPlatForm: Taro.getEnv() === "ALIPAY" ? 5 : 6,
//     authCode
//   }
//   return HTTPREQUEST.post({ url: '/joinUp/getToken', ...{ data } })
// }

// // 用户手机号登陆
// export const dynamicAuthor = params => {
//   return HTTPREQUEST.post({ url: '/joinUp/dynamicAuthor', ...params })
// }
