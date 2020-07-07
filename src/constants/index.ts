// 设置
export const SET = "SET"
export type TypeSetTokenAction = {
  type: typeof SET
  token: string
}

// 登录状态
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export type TypeLoginAction = {
  type: typeof LOGIN
}
export type TypeLogoutAction = {
  type: typeof LOGOUT
}
export type TypeUserAction = TypeLoginAction | TypeLogoutAction
