import React from 'react';
import { 
  Link, 
  hashHistory,
  withRouter 
} from 'react-router';

import constants from '../util/constants';

export default class extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="home" className="navbar-brand">Brand</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className={this.isActive('/home')}><Link to="home">home</Link></li>
              <li className=""><Link to="#">Link</Link></li>
              <li className=""><Link to="#">Link</Link></li>
            </ul>
          </div>
        </div>
      </nav>  
    );
  }

  // helpers
  
  isActive (pathname) {
    return this.props.location.pathname === pathname ? "active"  : "";
  }
}