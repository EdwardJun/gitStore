// import str from './source.js'
// console.log(str)
// if (module.hot) {
//   module.hot.accept('./source.js', () => {
//     console.log('文件更新了')
//   })
// }

let button = document.createElement('button')
button.innerHTML = 'Hello'
button.addEventListener('click', function () {
  // es6 草案中的语法 jsonp 实现动态加载文件
  import('./source.js').then(data => {
    console.log(data.default)
  })
})

document.body.appendChild(button)

// import './a.js'
// import './b.js'
// console.log('index.js')

// import $ from 'jquery'
// console.log($)

// import jquery from 'jquery'
// import moment from 'moment'
// import 'moment/locale/zh-cn' // 手动引入中文包

// // 设置语言
// moment.locale('zh-cn')

// let r = moment().endOf('day').fromNow();
// console.log(r)