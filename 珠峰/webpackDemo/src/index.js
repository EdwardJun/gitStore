import logo from './logo.png'
console.log(logo)
let image = new Image()
image.src = logo
document.body.appendChild(image)

import './index.css'

// import $ from 'expose-loader?$!jquery'
// require('jquery')
// import $ from 'jquery'
// console.log($)

// console.log('hello')

// require('./index.css')
// require('./index.less')
// require('@babel/polyfill')

// let fn = () => {
//   console.log('log--------------')
// }
// fn()

// @log
// class A {
//   a = 1
// }
// let a = new A()
// console.log(a.a)

// function log() {
//   console.log(A)
// }

// async function b () {
//   await console.log('aaaaaaa')
// }

// function * gen(params) {
//   yield 1
// }
// console.log(gen().next())

// 'aaa'.includes('a')