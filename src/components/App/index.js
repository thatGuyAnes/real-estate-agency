import React from 'react';

import './styles.scss';
import Header from '../Header';
import NavBar from '../Navbar';
import ListOfHouses from '../ListOfHouses';

const App = () => {
  return (
    <div className="c-app">
      <NavBar />
      <Header />
      <ListOfHouses />
    </div>
  );
}

export default App;
