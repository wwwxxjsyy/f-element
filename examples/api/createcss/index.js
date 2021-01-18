import request from '@/utils/request'
/**
 * 写入css
 */
export function setCss (data) {
  return request({
    url: '/api/createCss',
    method: 'post',
    data
  })
}

/**
 * 获取css
 */
export function getCss () {
  return request({
    url: '/api/getCss',
    method: 'get',
  })
}
