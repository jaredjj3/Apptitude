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
        <section>
          I AM SECTION 1
        </section>
        <section>
          I AM SECTION 2
        </section>
      </div>
    );
  }
}