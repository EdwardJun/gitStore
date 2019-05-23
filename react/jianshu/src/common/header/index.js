import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style.js'

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>热门搜索
          <SearchInfoSwitch>
            <i className='iconfont'>&#xea29;</i>换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>区块链</SearchInfoItem>
          <SearchInfoItem>小程序</SearchInfoItem>
          <SearchInfoItem>VUE</SearchInfoItem>
          <SearchInfoItem>React</SearchInfoItem>
          <SearchInfoItem>毕业</SearchInfoItem>
          <SearchInfoItem>故事</SearchInfoItem>
          <SearchInfoItem>PHP</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left"><i className='iconfont'>&#xe7bf;</i>首页</NavItem>
          <NavItem className="left"><i className='iconfont'>&#xe7b2;</i>下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <NavSearch className={ props.focus ? 'active' : '' } onFocus ={ props.handleInputFocus } onBlur={ props.handleInputBlur }></NavSearch>
            <i className="iconfont search-icon">&#xe7d6;</i>
            { getListArea(props.focus) }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);