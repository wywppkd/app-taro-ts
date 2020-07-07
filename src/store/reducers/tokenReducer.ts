import { TypeSetTokenAction, SET } from "../../constants";

const initState = {
  token: ""
}
export function tokenReducer(state = initState, action: TypeSetTokenAction) {
  switch (action.type) {
    case SET:
      return {
        token: action.token
      }

    default:
      return state
  }
}