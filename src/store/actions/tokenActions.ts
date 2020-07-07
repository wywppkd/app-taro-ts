import { SET } from "../../constants"

export const setTokenAction = (token: string) => {
  return {
    type: SET,
    token
  }
}