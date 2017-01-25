import React, { Component } from 'react';
import { Link } from 'react-router'
import './PageNotFound.css';

class PageNotFound extends Component {
  render() {
    return (
        <div>
            <h2>Page not Found</h2>
            <Link to="/"><button>Back to Homepage</button></Link>
        </div>       
    );
  }
}

export default PageNotFound;
