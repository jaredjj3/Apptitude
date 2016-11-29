import React from 'react';

import NavigationContainer from './navigation/NavigationContainer';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <NavigationContainer />
    <div className="children-container">
      { children }
    </div>
    <Footer />
  </div>
);