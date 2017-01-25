import React, { Component } from 'react';
import { translate } from 'react-i18next';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
        <header>
          <div className="app-title">
            <img src={logo} className="app-logo" alt="logo" />
            <h1>{t('TITLE')}</h1>
          </div>
        </header> 
    );
  }
}

export default translate('lang')(Header);
