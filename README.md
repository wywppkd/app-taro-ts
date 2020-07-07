# 武汉权益卡小程序(中石油/中石化领券小程序)

## 小程序投放渠道

```js
// 支付宝:中石油
my.navigateToMiniProgram({
  appId: '2021001155656774',
  path: 'pages/equityCard/equityCard?cardPackagePartnerId=ECPP20200508160001&channel=xxx',// xxx换成渠道参数值
  success: (res) => {
    // 打开成功
  }
});

// 支付宝:中石化
my.navigateToMiniProgram({
  appId: '2021001155656774',
  path: 'pages/equityCard/equityCard?cardPackagePartnerId=ECPP20200508160002&channel=xxx',// xxx换成渠道参数值
  success: (res) => {
    // 打开成功
  }
});

// 微信:中石油
wx.navigateToMiniProgram({
  appId: 'wx587d55934d747460',
  path: 'pages/equityCard/equityCard?cardPackagePartnerId=ECPP20200508160001&channel=xxx',// xxx换成渠道参数值
  success(res) {
    // 打开成功
  }
})

// 微信:中石化
wx.navigateToMiniProgram({
  appId: 'wx587d55934d747460',
  path: 'pages/equityCard/equityCard?cardPackagePartnerId=ECPP20200508160002&channel=xxx',// xxx换成渠道参数值
  success(res) {
    // 打开成功
  }
})
```

## H5投放渠道

alipays://platformapi/startapp?appId=2021001155656774&page=pages/equityCard/equityCard?cardPackagePartnerId%3DECPP20200508160001%26channel%3Dxxx
- xxx 换成渠道参数值

## 环境配置

### 开发环境

- 微信小程序: y约油
- appid: wx8d4d43fa8d25d66b

- 微信小程序: i约油
- appid: wx698cb89422dc5fdd

### 生产环境

- 微信小程序: 油荟通
- appid: wx587d55934d747460

- 支付宝小程序: 油荟通
- appid: 2021001155656774

生产环境域名：
https://oilecard.19ego.cn
生产环境静态资源地址：
https://oilecard.oss-cn-beijing.aliyuncs.com/equityCardActivity

## 数据库基础数据

### 权益卡活动规则

```js
// cardPackageRuleDesc: \n表示换行
[{"rule_title":"购买规则:","rule_text":"1.医护人员XXX；\n2.医护人员yyy；"}]

// 购买规则：
// 1、医护人员在填写基本信息后免费领取本商品，非医护人员按标价付款购买。
// 2、本商品属于抢购商品，不支持退换。
// 使用规则：
// 1、购买后可将礼包添加至支付宝或微信卡包，点击对应的优惠券即可使用。
// 2、中石油加油券支持武汉区域内（除吴家湾、江南、和乐福德、双墩、沌口、中山路中石油加油站）所有油站。可直接在站内使用，具体请咨询油站工作人员 。
// 3、除加油券以外的券可在第三方页面查看使用说明，以第三方说明为准。

// 温馨提示：
// 1、本礼包数量有限，先到先得，售完为止，一旦售出不支持退换找零。
// 2、礼包内均为优惠券，无实物商品。
// 3、在使用中有任何问题，可咨询在线客服
```

### 卡券使用说明

```js
// couponRuleDesc: \n表示换行
"1. 使用说明xx; \n2.使用说明yy"
```

## 二码合一链接

```js
`https://oolp-equity-card-dev.19ego.cn/scan/jump?cardPackagePartnerId=ECPP20200508160001&channel=xxx&promoterId=15877778888` // 开发环境
`https://oolp-equity-card-test.19ego.cn/scan/jump?cardPackagePartnerId=ECPP20200508160001&channel=xxx&promoterId=15877778888` // 测试环境
`https://oilecard.19ego.cn/scan/jump?cardPackagePartnerId=ECPP20200508160001&channel=xxx&promoterId=15877778888` // 生产环境

cardPackagePartnerId // 权益卡包商户Id
channel // 渠道来源参数
promoterId // 推广人手机号
```

## 生活号/公众号关注组件代码块

```xml
<!-- 生活号 -->
<life-follow sceneId="6fa0811c04cf4023869a1504650a9d61" />

<!-- 公众号 -->
<official-account></official-account>
```

## 智能客服

- 文档: https://fchelp.cloud.alipay.com/helpDetail.htm?tntInstId=YVQQMMCN&helpCode=SCE_00168778&helpId=91934464&target=_blank
- 客服地址: https://izytox3ug5vwu.cschat.antcloud.com.cn/index.htm?tntInstId=Fq7_t7kj&scene=SCE00046576

## 相关库

- 二维码: https://taro-ext.jd.com/plugin/view/5cf7d15bcfb7630043191543
- 封装Taro.request(servers目录)参考了: https://github.com/TigerHee/taro-request

## src目录

```bash
│  app.jsx
│  app.scss
│  index.html
│
├─actions # redux的actions
│      actionLoginStatus.js
│      actionOutParams.js
│
├─assets
│  ├─img # 所有图片
│  │
│  └─styles # 公共sass变量
│          variable_dev.scss
│          variable_prod.scss
│
├─constants
│      actionTypes.js # 所有redux的action.type
│
├─pages
│  ├─components # 公共组件
│  │      customNavigation.jsx # 自定义标题栏
│  │      customNavigation.scss
│  │      login.jsx # 登录组件
│  │      login.scss
│  │      myQrcode.jsx # 二维码组件
│  │      myQrcode.scss
│  │
│  ├─equityCard # 权益卡购买页
│  │      equityCard.jsx
│  │      equityCard.scss
│  │
│  ├─h5 # webView
│  │      h5.jsx
│  │      h5.scss
│  │
│  ├─index # 首页
│  │      index.jsx
│  │      index.scss
│  │
│  └─medicalInfo # 医护人员填写信息页
│      │  medicalInfo.jsx
│      │  medicalInfo.scss
│      │
│      ├─medicalBanner
│      │      medicalBanner.jsx
│      │      medicalBanner.scss
│      │
│      └─medicalUpload
│              medicalUpload.jsx
│              medicalUpload.scss
│
├─reducers
│      index.js
│      loginStatus.js # 登录状态redux
│      outParams.js # 渠道参数redux
│
├─servers # ajax方法封装
│      baseUrl.js
│      http.js # ajax封装
│      interceptors.js # 拦截器
│      servers.js # 所有接口
│
└─utils # 公共方法
```

```js
1 商户
  商户ID              商户名称
  ECPP20200508160003  河北壳牌
  ECPP20200508160004  杭州海油(0元)
  ECPP20200508160005  公用不显示
  ECPP20200508160006  苏州海油(0.01元)
  
2 权益卡包
  权益卡包ID          权益卡包名称                   商户               商户ID
  ECBI20200624101001  测试-公用不显示权益卡包        公用不显示         ECPP20200508160005     
  ECBI20200624102222  高阳加油券测试权益卡包（0元）  杭州海油(0元)      ECPP20200508160004
  ECBI20200624103333  河北壳牌                       河北壳牌           ECPP20200508160003
  ECBI20200624104444  高阳加油券测试权益卡包(0.01元) 苏州海油(0.01元)   ECPP20200508160006
```