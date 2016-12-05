import React      from 'react';
import { Link }   from 'react-router';

import Navigation from '../Navigation';
import Footer     from '../Footer';

import $ from '../../util/constants';

export default class extends React.Component {
  render () {
    return(
      <div className="home-container">
        <Navigation location={this.props.location} />
        <div className="jumbotron col-flex">
          <h1>{$.appName}</h1>
          <h2>{$.slogan}</h2>
        </div>
        <div className="features">
          <ul className="row-flex feature-list">
            <li className="feature-list-item">
              <i className="material-icons">person</i>
              <h1>PURPOSE</h1>
              <p>{$.appName} was made to show you how I can work for you.</p>
            </li>
            <li className="feature-list-item">
              <i className="material-icons">show_chart</i>
              <h1>POTENTIAL</h1>
              <p>This prototype was developed in only {$.projectTime}.</p>
            </li>
            <li className="feature-list-item">
              <i className="material-icons">event_seat</i>
              <h1>PASSION</h1>
              <p>This is one of many projects. Let's connect.</p>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}