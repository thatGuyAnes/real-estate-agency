import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import toggleMenu from '../../actions/openMenu';

const Navbar = ({ menuState, toggleMenu }) => {
  return (
    <div className="c-navbar">
      <span className="c-nav__logo"></span>

      <ul className="c-navbar__list">
        <li className="c-navbar__item">About Us</li>
        <li className="c-navbar__item">Projects</li>
        <li className="c-navbar__item">Career</li>
        <li className="c-navbar__item">Contacts</li>
        <li className="c-navbar__item __lang">En</li>
      </ul>

      <span className="c-nav__hamburger"></span>

      {/* make this its own component */}
      <span className="c-nav__menu">
        <li className="c-menu__item">About Us</li>
        <li className="c-menu__item">Projects</li>
        <li className="c-menu__item">Career</li>
        <li className="c-menu__item">Contacts</li>

        <span className="c-menu__langs"></span>
      </span>
    </div>
  );
};

// pass menu state to navbar's menu
const mapStateToProps = (state) => {
  return { menuState: state.menuState };
};

export default connect(mapStateToProps, { toggleMenu: toggleMenu })(NavBar);
