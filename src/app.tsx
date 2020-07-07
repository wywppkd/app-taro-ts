import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'

import { store } from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// const store = configStore()

class App extends Component {
  componentWillMount() {
    Taro.onNetworkStatusChange(res => {
      console.log(res.isConnected)
      if (res.isConnected) {
        // Taro.showToast({
        //   icon: "none",
        //   title: "与互联网建立了连接"
        // });
      } else {
        Taro.showToast({
          icon: "none",
          title: "似乎与互联网断开了连接"
        });
      }
    })
  }
  /**
  * 指定config的类型声明为: Taro.Config
  *
  * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
  * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
  * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
  */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/Center/Center',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'taro 项目模板',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#999",
      backgroundColor: "#fff",
      borderStyle: 'white',
      selectedColor: "#FF9801",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./assets/img/tabBar/icon-home.png",
          selectedIconPath: "./assets/img/tabBar/icon-home-active.png"
        },
        {
          pagePath: "pages/Center/Center",
          text: "我的",
          iconPath: "./assets/img/tabBar/icon-center.png",
          selectedIconPath: "./assets/img/tabBar/icon-center-active.png"
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
