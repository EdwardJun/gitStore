import * as constants from './constants.js'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false,
  list: []
})

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable 对象的 set 方法，会结合之前 immutable 对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focus', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focus', false)
  }
  if (action.type === constants.CHANGE_LIST) {
    console.log('action.data', action)
    return state.set('list', action.data)
  }
  return state
}