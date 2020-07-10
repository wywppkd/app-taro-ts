/**
 * 手机号登录接口请求参数
 */
export interface PhoneNumberLoginReq {
  /**
   * 授权手机号后的加密串: 支付宝/微信
   */
  encryptedData: string
  /**
   * 授权手机号后的加密算法初始向量: 微信
   */
  iv?: string
}
