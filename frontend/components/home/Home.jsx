import React      from 'react';
import { Link }   from 'react-router';
import constants  from '../../util/constants';

import Navigation from '../Navigation';
import Footer     from '../Footer';

export default class extends React.Component {
  render () {
    return(
      <div className="home-container">
        <Navigation location={this.props.location} />
        <div className="home-content">
          <div className="col-1">
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    );
  }
}