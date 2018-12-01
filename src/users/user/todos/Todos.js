import React, { Component } from 'react';
import { Link } from 'react-router'
import { translate } from 'react-i18next';
import request from 'superagent';
import NProgress from 'nprogress';
import './Todos.css';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      errMsg: ''
    };
  }

  componentWillMount() {
    NProgress.start();
  }

  componentDidMount(){
    request.get('http://localhost:4000/user/'+ this.props.params.id + '/todos')
    .end((err,res) => {
        NProgress.done();
        if (err || !res.ok) {
          this.setState({
            errMsg: 'Error: fix "getTodos" please...'
          });
        } else {
          this.setState({
            todos: res.body
          });
        }
    });
  }
 
	completedTodos(todos) {
		return todos.filter(t => t.completed).length;
	}

  render() {
    const { t } = this.props;
    const todos = this.state.todos;
    const errMsg = this.state.errMsg;
    return (
        <div id="todos">
            {/* Un esempio di commento JSX */}
            <Link to={`/user/${this.props.params.id}`}>
            <button type="button" className="btn btn-success top-right">{t('BACK_TO_USER')}</button>
            </Link>
            <h4>TODO:
            {this.completedTodos(todos)}
            /
            {todos.length}</h4>
            {todos.map((todo)=> 
                <div key={todo.id} className="form-check disabled">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" disabled checked={todo.completed} />
                        {todo.title}
                    </label>
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

export default translate('lang')(Todos);
