import Taro, { useCallback } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux';
import { RootState } from '../../store/index'
import { loginAction, logoutAction } from '../../store/actions/userActions';
import { setTokenAction } from '../../store/actions/tokenActions';
import { getToken, dynamicAuthor } from '../../servers/servers';

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
  const dispatchSetToken = useCallback((token) => {
    dispatch(setTokenAction(token))
  }, [dispatch])

  // 获取token接口
  const getData = async () => {
    const res = await getToken()
    console.log("getData -> res", res)
  }

  // 登录接口
  const getData2 = async () => {
    const res = await dynamicAuthor({ encryptedData: "aaa", iv: "bbb" })
    console.log("getData -> res", res)
    if (res.code === "0000") {
      // 登录成功
    }
  }

  return (
    <View>
      {userReducer.status}
      <Button onClick={dispatchLogin}>登录</Button>
      <Button onClick={dispatchLogout}>退出</Button>
      <Button onClick={dispatchSetToken}>设置token{tokenReducer.token}</Button>
      <Button onClick={getData}>请求数据</Button>
      <Button onClick={getData2}>请求数据2</Button>
    </View>
  );
}

export default Index;
