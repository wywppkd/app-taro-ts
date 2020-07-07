import { LOGIN, LOGOUT } from "../../constants"

/**
 * 登录
 */
export const loginAction = () => {
  return {
    type: LOGIN
  }
}

/**
 * 退出登录
 */
export const logoutAction = () => {
  return {
    type: LOGOUT
  }
}