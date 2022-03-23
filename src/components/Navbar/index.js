import React, { useRef } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { toggleMenu } from '../../actions';

const Navbar = ({ isOpen, toggleMenu }) => {
  const hamburgerRef = useRef();

  const openMenu = (_e) => {
    toggleMenu(true);
  };

  const closeMenu = (_e) => {
    toggleMenu(false);
  };

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
        className={isOpen ? `c-hamburger --active` : `c-hamburger`}
        ref={hamburgerRef}
      >
        <span className="c-hamburger__line-wrapper" onClick={openMenu}>
          <span className="c-hamburger__line"></span>
        </span>
        <span className="c-hamburger__close-wrapper" onClick={closeMenu}>
        <span className="c-hamburger__close"></span>
        </span>
      </div>

      {/* make this its own component */}
      {/* toggle class of open/closed  */}
      <div className={isOpen ? `c-nav__menu --open` : `c-nav__menu`}>
        <ul className="c-menu__list">
          <li className="c-menu__item --active">About Us</li>
          <li className="c-menu__item">Projects</li>
          <li className="c-menu__item">Career</li>
          <li className="c-menu__item">Contacts</li>
          {/* TOFIX: language as a global state */}
          <li className="c-menu__item--langs">
            <span id="eng">En</span>
            <span>|</span>
            <span id="fr">Fr</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// pass menu state to navbar's menu
const mapStateToProps = (state) => {
  return { isOpen: state.isOpen };
};

export default connect(mapStateToProps, { toggleMenu: toggleMenu })(Navbar);
