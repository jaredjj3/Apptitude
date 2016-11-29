import React      from 'react';
import { Link }   from 'react-router';
import constants  from '../util/constants';

export default () => {
  return(
    <div className="home-container">
      <div className="articles-container">
        <article>
          <div className="article-left">
            <div className="author-picture-container">
              <a href="http://jaredjohnson.me/">
                <img src="assets/author.jpg" alt="portfolio" />
              </a>
            </div>
          </div>
          <div className="article-right">
            <h1>Jared Johnson</h1>
            <h2>Software and Chemical Engineer</h2>
            <p>
              {constants.intro}
              <a href="http://jaredjohnson.me/">Let's connect.</a>
            </p>
            </div>
        </article>
        <article>
          <div className="article-center">
            <h1>{constants.appName}</h1>
            <h2>{constants.slogan}</h2>
            <p><b>Project time: {constants.projectTime}</b></p>
            <a href={`http://github.com/jaredjj3/${constants.appName}`}>Source Code</a>
            <p>{constants.projectDescription}</p>
            <p>{constants.appName} was brought to you by:</p>
            <ul className="devicons-list">
              <li><i className="devicons devicon-react-original-wordmark colored"></i></li>
              <li><i className="devicons devicon-javascript-plain colored"></i></li>
              <li><i className="devicons devicon-html5-plain-wordmark colored"></i></li>
              <li><i className="devicons devicon-css3-plain-wordmark colored"></i></li>
              <li><i className="devicons devicon-github-plain-wordmark colored"></i></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};