import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { IconFontStyle } from './static/iconfont/iconfont.js'
import Header from './common/header/index.js';
import store from './store/index.js'
// import axios from './utils/_axios.js'

// Component.prototype.$axios = axios

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <GlobalStyle/>
          <IconFontStyle/>
          <Header></Header>
        </Provider>
      </div>
    );
  }
}

export default App;
