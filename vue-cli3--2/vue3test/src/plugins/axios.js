/* eslint-disable */
"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 8000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(config => {
  config.headers['Cache-control'] = 'no-cache'
  config.headers.Expires = -1
  config.headers.Pragma = 'no-cache'
  config.headers.Accept = '*/*'
  return config
}, error => {
  console.log('请求失败')
  return Promise.reject(error)
});

// Add a response interceptor
_axios.interceptors.response.use(response => {
  if (response.status === 200) {
    // const code = response.data.code || response.data.statusCode
    // switch (code) {
    //   case 200:
    //     return response.data.respData || response.data.data
    // }
    return response.data
  }
}, error => {
    console.log('返回失败')
    console.log('error', error.message)
    if (error.message.includes('timeout')) {
      console.log('网络超时')
    }
    return Promise.reject(error)
});

// Plugin.install = function(Vue, options) {
//   Vue.axios = _axios;
//   window.axios = _axios;
//   Object.defineProperties(Vue.prototype, {
//     // axios: {
//     //   get() {
//     //     return _axios;
//     //   }
//     // },
//     $axios: {
//       get() {
//         return _axios;
//       },
//       post() {
//         return _axios;
//       }
//     },
//   });
// };

// Vue.use(Plugin)

export default _axios;
