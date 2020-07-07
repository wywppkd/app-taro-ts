const getBaseUrl = () => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    // 开发打包
    BASE_URL = 'http://rap2.taobao.org:38080/app/mock/253723' // mock
    // BASE_URL = 'https://oolp-equity-card-dev.19ego.cn' // 开发
    // BASE_URL = "https://oolp-equity-card-test.19ego.cn" // 测试
  } else {
    // 生产打包
    BASE_URL = 'http://rap2.taobao.org:38080/app/mock/253723' // mock
    // BASE_URL = 'https://oolp-equity-card-dev.19ego.cn' // 开发
    // BASE_URL = "https://oolp-equity-card-test.19ego.cn" // 测试
  }
  return BASE_URL
}
export default getBaseUrl();