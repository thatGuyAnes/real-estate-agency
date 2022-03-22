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
        <span className="c-header__cta__arrow">

            <svg
              width="54"
              height="16"
              viewBox="0 0 54 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H0V9H1V7ZM53.7071 8.70711C54.0976 8.31658 54.0976 7.68342 53.7071 7.29289L47.3431 0.928932C46.9526 0.538408 46.3195 0.538408 45.9289 0.928932C45.5384 1.31946 45.5384 1.95262 45.9289 2.34315L51.5858 8L45.9289 13.6569C45.5384 14.0474 45.5384 14.6805 45.9289 15.0711C46.3195 15.4616 46.9526 15.4616 47.3431 15.0711L53.7071 8.70711ZM1 9H53V7H1V9Z"
                fill="black"
              />
            </svg>
        </span>
      </button>
    </section>
  );
};

export default Header;
