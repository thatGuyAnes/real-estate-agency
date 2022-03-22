import React from 'react';

import './styles.scss';

const Header = () => {
  return (
    <section className="c-header">
      <div className="c-header__text-wrapper">
        <h1 className="c-header__title">
          We are an award winning interior design Agency
        </h1>
        <span className="c-header__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit diam
          fames elit mauris quam nulla eu. Malesuada quis non a cursus sit
          accumsan mi. Rhoncus bibendum sem pretium faucibus sit ultrices.
          Vestibulum odio tortor, semper facilisi cras ut vitae.
        </span>
      </div>

      <button className="c-header__cta">
        View all properties
        <span className="c-header__cta__arrow"></span>
      </button>
    </section>
  );
};

export default Header;
