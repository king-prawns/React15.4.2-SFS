import React, { Component } from 'react';
import { Link } from 'react-router'
import { translate } from 'react-i18next';
import request from 'superagent';
import NProgress from 'nprogress';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errMsg: ''
    };
  }

  componentWillMount() {
    NProgress.start();
  }

  componentDidMount(){
    request.get('http://localhost:4000/posts')
      .end((err,res) => {
        NProgress.done();
        if (err || !res.ok) {
          this.setState({
            errMsg: 'Error: fix "getPosts" please...'
          });
        } else {
          this.setState({
            posts: res.body
          });
        }
    });
  }

  render() {
    const { t } = this.props;
    const posts = this.state.posts;
    const errMsg = this.state.errMsg;
    return (
        <div id="posts">
            {posts.map((post)=> 
                <div key={post.id} className="card card-block">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text">{post.body}</p>
                    <Link to={`/user/${post.userId}`}>{t('GO_TO_USER')}</Link>
                </div>
            )}
            {errMsg &&
            <div>
                {errMsg}
            </div>
            }
        </div>
    );
  }
}

export default translate('lang')(Posts);
