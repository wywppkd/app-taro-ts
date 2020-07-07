import { LOGIN, LOGOUT, TypeUserAction } from "../../constants";

const initState = {
  status: ""
}
export default function userReducer(state = initState, action: TypeUserAction) {
  switch (action.type) {
    case LOGIN:
      return { status: LOGIN }
    case LOGOUT:
      return { status: LOGOUT }
    default:
      return state
  }
}