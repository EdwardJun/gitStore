import * as constants from './constants.js'
import { fromJS } from 'immutable'
import axios from 'axios'

//加括号的函数体返回对象字面表达式：
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    console.log(123)
    // axios.get('/trending_search').then((res) => {
    //   const data = res.data
    //   dispatch(changeList(data.data))
    // }).catch(() => {
    //   console.log('error')
    // })
    axios({
      method: 'get',
      url: 'api/headerList.json',
      // headers: {
      //   Accept: "text/html; charset=UTF-8"
      // }
    }).then((res) => {
      console.log(res)
      const data = res.data
      dispatch(changeList(data.data))
    }).catch((err) => {
      console.log(err)
    })
  }
}