import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import Header from '../Header';
import NavBar from '../Navbar';
import ListOfHouses from '../ListOfHouses';

const App = ({ isOpen }) => {
  console.log(isOpen)
  return (
    <div className="c-app">
      {isOpen ? (
        <NavBar />
      ) : (
        <>
          <NavBar />
          <Header />
          <ListOfHouses />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isOpen: state.isOpen };
};

// with redux we keep away from props drilling, even thought this component is
// a candidate for passing the state down to <Navbar />
export default connect(mapStateToProps)(App);
