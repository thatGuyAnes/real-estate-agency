import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { toggleMenu } from '../../actions';

const Navbar = ({ menuState, toggleMenu }) => {

  const handleClick = (_e) => {
    menuState(true)
    console.log('ham clicked')
  }

  return (
    <div className="c-navbar">

      <span className="c-nav__logo"></span>

      <ul className="c-navbar__list">
        <li className="c-navbar__item">About Us</li>
        <li className="c-navbar__item">Projects</li>
        <li className="c-navbar__item">Career</li>
        <li className="c-navbar__item">Contacts</li>
      </ul>

      <span className="c-navbar__lang">En</span>

      {/* click events will call the action creator */}
      <div
        className="c-nav__hamburger"
        onClick={handleClick}
      >

        <span className="c-nav__hamburger__line"></span>
      </div>

      {/* make this its own component */}
      {/* toggle class of open/closed  */}
      <span
        className={ menuState ? `c-nav__menu` : `c-nav__menu --open` }
      >
        <li className="c-menu__item">About Us</li>
        <li className="c-menu__item">Projects</li>
        <li className="c-menu__item">Career</li>
        <li className="c-menu__item">Contacts</li>
        {/* probably a the language as a global state */}
        <span className="c-menu__langs"></span>
      </span>
    </div>
  );
};

// pass menu state to navbar's menu
const mapStateToProps = (state) => {
  return { menuState: state.menuState };
};

export default connect(mapStateToProps, { toggleMenu: toggleMenu })(Navbar);
