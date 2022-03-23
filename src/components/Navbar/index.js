import React, {useRef} from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { toggleMenu } from '../../actions';

const Navbar = ({ isOpen, toggleMenu }) => {

  const hamburgerRef = useRef();

  const openMenu = (_e) => {
    toggleMenu(true)
  };

  const closeMenu = (_e) => {
    toggleMenu(false)
  };

    console.log(isOpen)
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
        <span className="c-hamburger__line" onClick={openMenu}></span>
        <span className="c-hamburger__close" onClick={closeMenu}></span>
      </div>

      {/* make this its own component */}
      {/* toggle class of open/closed  */}
      <span
        className={ isOpen ? `c-nav__menu --open` : `c-nav__menu` }
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
  return { isOpen: state.isOpen };
};

export default connect(mapStateToProps, { toggleMenu: toggleMenu })(Navbar);
