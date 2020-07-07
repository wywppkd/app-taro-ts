import Taro from "@tarojs/taro";
/**
 * @description 获取当前页url
 */
export default () => {
  let pages = Taro.getCurrentPages()
  let currentPage = pages[pages.length - 1]
  let url = currentPage.route
  return url
}