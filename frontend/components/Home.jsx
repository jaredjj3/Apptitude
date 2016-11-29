import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <div className="home-container">
      <section className="cover-picture-container"></section>
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
              I’m an engineer. I thoroughly enjoy taking things apart, learning how they work, and rebuilding them to be better. In the past, I’ve done this with chemical processes. Today, I make user experiences that inspire and change peoples lives. <a href="http://jaredjohnson.me/">Let's connect.</a>
            </p>
            </div>
        </article>
        <article>
          <div className="article-center">
            <h1>I AM APP NAME</h1>
            <h2>I AM SLOGAN</h2>
            <p>
              <b>Project time: I AM PROJECT TIME</b>
            </p>
            <a href="http://github.com/jaredjj3/">Source Code</a>
            <p>
              I AM APP NAME was brought to you by:
            </p>
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