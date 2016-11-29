import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      home: this.locationMatches('home'),
      upload: this.locationMatches('upload'),
      profile: this.locationMatches('profile'),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.onClick();
  }

  locationMatches (location) {
    const re = new RegExp(location);
    return !!window.location.hash.match(re);
  }

  render () {
    const { home, upload, profile } = this.state;
    return (
      <div className="navigation-container">
        <nav>
          <div className="logo-container">
            <img className="logo" src="assets/logo.png" alt="crowded" />
          </div>
          <ul onClick={this.onClick.bind(this)} className="navigation-links">
            <li className={home ? "navigation-selected" : ""}><Link to="home">home</Link></li>
            <li className={upload ? "navigation-selected" : ""}><Link to="upload">upload</Link></li>
            <li className={profile ? "navigation-selected" : ""}><Link to="profile">profile</Link></li>
          </ul>
        </nav>
        <div className="navigation-spacer"></div>
      </div>
    );
  }

  // event handlers

  onClick (e) {
    this.setState({ 
      home: this.locationMatches('home'),
      upload: this.locationMatches('upload'),
      profile: this.locationMatches('profile'),
    });
  }
}