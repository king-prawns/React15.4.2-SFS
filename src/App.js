import React, { Component } from 'react';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'nprogress/nprogress.css';
import './App.css';

import Header from './layout/Header';
import Topnav from './layout/Topnav';

class App extends Component {
  render() {
    return (     
      <div className="app">
          <div className="app-Header">
              <Header />
              <Topnav />
          </div>
          <div className="app-content">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
