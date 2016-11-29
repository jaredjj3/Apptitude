import React          from 'react';
import ReactDOM       from 'react-dom';
import configureStore from './store/configureStore';
import Root           from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});