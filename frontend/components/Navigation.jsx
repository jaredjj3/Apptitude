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
      <nav>
        <div className="nav-left"> 
        </div>

        <div>
        </div>
      </nav>  
    );
  }

  // helpers
  
  isActive (pathname) {
    return this.props.location.pathname === pathname ? "active" : "";
  }
}