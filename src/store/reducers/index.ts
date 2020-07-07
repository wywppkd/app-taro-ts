import { combineReducers } from 'redux'
import userReducer from './userReducer'
import { tokenReducer } from './tokenReducer'

/**
 * 合并自定义reducer
 */
export default combineReducers({
  userReducer,
  tokenReducer
})
