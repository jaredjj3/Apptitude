import React                 from 'react';
import { Link, hashHistory } from 'react-router';

import constants from '../../util/constants';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="navigation-container">
        <nav>
          <div className="navigation-left">
            <Link to="home" className="logo-container">
              <img className="logo" src="assets/logo.jpg" alt={constants.companyName}/>
            </Link>
          </div>
          <div className="navigation-right">
            <ul onClick={this.onClick.bind(this)} className="navigation-links">
              <li className="home"><Link to="home">home</Link></li>
            </ul>
          </div>
        </nav>
        <div className="navigation-spacer navigation-container"></div>
      </div>
    );
  }

  // event handlers

  onClick (e) {
    e.preventDefault();
  }
}