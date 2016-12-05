import React from 'react';
import { 
  Link, 
  hashHistory,
  withRouter 
} from 'react-router';

import $ from '../util/constants';

export default class extends React.Component {
  render () {
    return (
      <nav className="nav-container">
        <div className="nav-left">
          <div className="logo row-flex">
            <Link to="home">{$.appName}</Link>
          </div>
        </div>
        <div className="nav-right">
          <ul className="nav-links-list">
            <li><Link to="home"><i className="material-icons">home</i></Link></li>
          </ul>
        </div>
      </nav>  
    );
  }

  // helpers
  
  isActive (pathname) {
    return this.props.location.pathname === pathname ? "active" : "";
  }
}