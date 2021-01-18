import request from '@/utils/request'
/**
 * 爬取bd图片
 */
export function getImgData (data) {
  return request({
    url: '/api/baiduImg',
    method: 'get',
    params: data
  })
}
