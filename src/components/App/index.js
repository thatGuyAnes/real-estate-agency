import React from 'react';

import './styles.scss';
import Header from '../Header';
import NavBar from '../Navbar';

const App = () => {
  return (
    <div className="c-app">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
