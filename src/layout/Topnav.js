import React, { Component } from 'react';
import { Link } from 'react-router'
import { translate } from 'react-i18next';
import i18n from '../i18n';
import './Topnav.css';

class Topnav extends Component {
    handleLangClick(lang){
        i18n.changeLanguage(lang);
    }

    render() {
        const { t } = this.props;
        return (
            <nav className="navbar navbar-inverse navbar-toggleable">
                <a className="navbar-brand">
                    <img className="brand" src="images/brand.png" alt="brand" />
                </a>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/users" activeClassName="active">
                        {t('USER_LIST')}
                    </Link>
                    <Link className="nav-item nav-link" to="/posts" activeClassName="active">
                        {t('POST_LIST')}
                    </Link>
                </div>
                <div className="btn-lang">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.handleLangClick('it')}>{t('BUTTON_LANG_IT')}</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.handleLangClick('en')}>{t('BUTTON_LANG_EN')}</button>
                </div>
            </nav>
        );
    }
}

export default translate('lang')(Topnav);
