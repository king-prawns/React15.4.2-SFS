import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { translate } from 'react-i18next';
import request from 'superagent';
import NProgress from 'nprogress';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      errMsg: ''
    };
  }

  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    request.get('http://localhost:4000/users')
      .end((err,res) => {
        NProgress.done();
        if (err || !res.ok) {
          this.setState({
            errMsg: 'Error: fix "getUsers" please...'
          });
        } else {
          this.setState({
            users: res.body
          });
        }
    });
  }

  handleUserClick(id){
    hashHistory.push('/user/'+id);
  }

  render() {
    const { t } = this.props;
    const users = this.state.users;
    const errMsg = this.state.errMsg;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
                <th>{t('ID')}</th>
                <th>{t('NAME')}</th>
                <th>{t('EMAIL')}</th>
            </tr>
          </thead>
          <tbody> 
            {users.map((user) => 
              <tr key={user.id} className="user-row" onClick={() => this.handleUserClick(user.id)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )}
          </tbody>
        </table>
        {errMsg &&
          <div>
            {errMsg}
          </div>
        }
      </div>
    );
  }
}

export default translate('lang')(Users);
