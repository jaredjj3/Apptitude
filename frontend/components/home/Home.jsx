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
            <article className="content-container">
              <div className="row-1">

              </div>
              <div className="row-2">
                <ul className="feature-icons">
                  <li><i className="devicon-ruby-plain colored"></i></li>
                  <li><i className="devicon-rails-plain colored"></i></li>
                  <li><i className="devicon-react-original colored"></i></li>
                  <li><i className="devicon-angularjs-plain colored"></i></li>
                  <li><i className="devicon-postgresql-plain colored"></i></li>
                  <li><i className="devicon-javascript-plain colored"></i></li>
                  <li><i className="devicon-jquery-plain colored"></i></li>
                  <li><i className="devicon-nodejs-plain colored"></i></li>
                  <li><i className="devicon-html5-plain colored"></i></li>
                  <li><i className="devicon-sass-original colored"></i></li>
                  <li><i className="devicon-git-plain colored"></i></li>
                  <li><i className="devicon-python-plain colored"></i></li>
                  <li><i className="devicon-heroku-original colored"></i></li>
                  <li><i className="devicon-amazonwebservices-plain colored"></i></li>
                  <li><i className="devicon-github-plain colored"></i></li>
								</ul>
              </div>
            </article>
          </div>
          <div className="col-2">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}