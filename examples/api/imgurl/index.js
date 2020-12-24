import request from '@/utils/request'
/**
 * 爬取bd图片
 */
export function getImgData (data) {
  return request({
    url: '/api/spider4',
    method: 'get',
    params: data
  })
}
