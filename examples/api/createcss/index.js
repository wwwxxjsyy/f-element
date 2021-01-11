import request from '@/utils/request'
/**
 * 写入css
 */
export function setCreatecss (data) {
  return request({
    url: '/api/createcss',
    method: 'post',
    data
  })
}

/**
 * 获取css
 */
export function getCss () {
  return request({
    url: '/api/getcss',
    method: 'get',
  })
}
