import axios from 'axios'
import { Loading, Message } from 'element-ui'
import router from '../router/index'
// axios.defaults.withCredentials = true
const ConfigBaseURL = 'http://localhost:3000' // 默认路径
let loadingInstance = null // 这里是loading
// 使用create方法创建axios实例
const Service = axios.create({
  timeout: 10000, // 请求超时时间
  baseURL: ConfigBaseURL,
  withCredentials: true,
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  }
})
const httpCode = {
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found'
}
// 添加请求拦截器
Service.interceptors.request.use(
  config => {
    /* if (window.sessionStorage.token) {
      config.headers.Authorization = window.sessionStorage.token // 将token设置成请求头
    } */
    /* if (config.method === 'post') {
      const curPost = config.url.split('/')[config.url.split('/').length - 1]
      if (curPost === 'upload') {
        return config
      }
    } */
    loadingInstance = Loading.service({
      lock: true,
      text: 'loading...'
    })
    return config
  },
  error => {
    // loadingInstance.close()
    return Promise.reject(error)
  }
)
// 添加响应拦截器
Service.interceptors.response.use(
  response => {
    loadingInstance.close()
    // console.log(response)
    return Promise.resolve(response)
  },
  error => {
    loadingInstance.close()
    if (error.response) {
      // 根据请求失败的http状态码去给用户相应的提示
      const tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.status
      Message({
        message: tips,
        type: 'error'
      })
      if (error.response.status === 401) {
        // token或者登陆失效情况下跳转到登录页面
        router.push({
          path: '/Login'
        })
      }
      return Promise.reject(error)
    } else {
      return console.log(error.response)
      /*  Message({
        message: '请求超时, 请刷新重试',
        type: 'error'
      })
      return Promise.reject(new Error('请求超时, 请刷新重试')) */
    }
  }
)
/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    Service({
      method: 'get',
      url,
      params,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/* 统一封装post请求（参数为data）  */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    Service({
      method: 'post',
      url,
      data,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export const post2 = (url, { params, data }, config = {}) => {
  return new Promise((resolve, reject) => {
    Service({
      method: 'post',
      url,
      params,
      data,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 统一封装post（参数为params）
export const postparams = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    Service({
      method: 'post',
      url,
      params,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
// 统一封装put\
export const put = (url, { params, data }, config = {}) => {
  return new Promise((resolve, reject) => {
    Service({
      method: 'put',
      url,
      params,
      data,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export const put2 = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    Service({
      method: 'put',
      url,
      params,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
