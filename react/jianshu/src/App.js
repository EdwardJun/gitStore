import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { IconFontStyle } from './static/iconfont/iconfont.js'
import Header from './common/header/index.js';
import store from './store/index.js'

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
