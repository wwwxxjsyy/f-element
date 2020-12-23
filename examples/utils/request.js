import axios from "axios";
import { MessageBox, Message, Notification } from "element-ui";
// import store from "@/store";

const service = axios.create({
  timeout: 3000, // request timeout
  headers: { "Content-Type": "application/json;charset=utf-8" }
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = "http://192.168.10.23:8000";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.status === 400) {
      Notification.error({
        title: '请求内部错误',
        message: res.message,
        duration: 2000
      })

      return Promise.resolve(res);
    } else {
      return res;
    }
  },
  error => {
    const err = error.response;
    console.log("axios-err:", err)
    return Promise.reject(err);
  }
);

export default service;
