import * as constants from './constants.js'

//加括号的函数体返回对象字面表达式：
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})