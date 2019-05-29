import axios from 'axios'

const service = axios.create({
  timeout: 8000, // 请求时间
  withCredentials: true // 允许携带cookie
})

service.interceptors.request.use(config => {
  console.log('111111111')
  config.headers.Accept = '*/*'
  return config
}, error => {
  console.log('request--------error', error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (response.status === 200 || response.status === 304) {
    return response.data
  } else {
    return Promise.reject('error')
  }
}, error => {
    console.log('response----error', error)
    return Promise.reject(error)
})

export default service