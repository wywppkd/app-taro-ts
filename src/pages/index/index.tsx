import Taro, { useCallback } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux';
import { RootState } from '../../store/index'
import { loginAction, logoutAction } from '../../store/actions/userActions';
import { setTokenAction } from '../../store/actions/tokenActions';
import { getToken } from '../../servers/servers';

import './index.scss'

function Index() {

  // 引入store的state
  const { userReducer, tokenReducer } = useSelector((state: RootState) => state)
  // 引入store的dispatch
  const dispatch = useDispatch()

  // 登录
  const dispatchLogin = useCallback(() => {
    dispatch(loginAction())
  }, [dispatch])
  // 退出登录
  const dispatchLogout = useCallback(() => {
    dispatch(logoutAction())
  }, [dispatch])

  // 设置token
  const dispatchSetToken = useCallback(() => {
    dispatch(setTokenAction("132123"))
  }, [dispatch])

  // 请求
  const getData = async () => {
    const res = await getToken()
    console.log("getData -> res", res)
  }

  return (
    <View>
      {userReducer.status}
      <Button onClick={dispatchLogin}>登录</Button>
      <Button onClick={dispatchLogout}>退出</Button>
      <Button onClick={dispatchSetToken}>设置token{tokenReducer.token}</Button>
      <Button onClick={getData}>请求数据</Button>
    </View>
  );
}

export default Index;
