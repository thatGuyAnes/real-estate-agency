import React from 'react';

import './styles.scss';

const Navbar = () => {
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
    </div>
  )
};

export default Navbar;
