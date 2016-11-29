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
          <div className="logo-container">
            <img className="logo" src="assets/logo.jpg" alt={constants.companyName}/>
          </div>
          <ul onClick={this.onClick.bind(this)} className="navigation-links">
            <li className="home"><Link to="home">home</Link></li>
          </ul>
        </nav>
        <div className="navigation-spacer"></div>
      </div>
    );
  }

  // event handlers

  onClick (e) {
    e.preventDefault();
  }
}