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
  Addition,
  Button
} from './style.js'

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
            <i className="iconfont">&#xe7d6;</i>
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
    // focus: state.header.focus
    // focus: state.get('header').get('focus')
    focus: state.getIn(['header', 'focus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      // const action = {
      //   type: 'search_focus'
      // }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      // const action = {
      //   type: 'search_blur'
      // }
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header