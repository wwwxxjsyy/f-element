import axios from 'axios'
import { Notification } from 'element-ui'
// import store from "@/store";

const service = axios.create({
  timeout: 3000, // request timeout
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = 'http://192.168.10.23:8088'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.status === 400) {
      Notification.error({
        title: '请求内部错误',
        message: res.message,
        duration: 2000
      })

      return Promise.resolve(res)
    } else {
      return res
    }
  },
  error => {
    const err = error.response
    if (err.status === 404) {
      Notification.error({
        title: '请求内部错误',
        message: '你的请求路径写错了',
        duration: 2000
      })

      return Promise.reject(err)
    } else {
      console.log('axios-err:', err)
      return Promise.reject(err)
    }
  }
)

export default service
