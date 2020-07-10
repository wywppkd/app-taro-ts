import Taro from "@tarojs/taro";
/**
 * @description 获取当前页url
 */
export default (): string => {
  const pages = Taro.getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const url = currentPage.route
  return url
}