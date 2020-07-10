/**
 * 所有接口返回数据约束
 */
export interface Result<T> {
  code: string
  data: T
}