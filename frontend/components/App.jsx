import React from 'react';

import Footer from './Footer';

export default ({ children }) => (
  <div className="app-container">
    <div className="children-container">
      { children }  
    </div>
    <Footer />
  </div>
);