import React from 'react';

import './styles.scss';

const HouseCard = ({ house }) => {
  return (
    <div className="c-card-container">
      <div className="c-card">
        {/* I want to set the sizes dynamically with srcset ( I forgot the syntax ) */}
        <span className="c-card__image-wrapper">
          {/* TOFIX: use picture elm */}
          {/* <img src={`./assets/${house.image}.png`} alt="a house" /> */}
          <picture>
            <source
              srcset={`./assets/${house.image}.png`}
              media="(min-width: 1024px)"
            />
            <source
              srcset={`./assets/${house.image}_md.png`}
              media="(min-width: 768px)"
            />
            <img
              src={`./assets/${house.image}_sm.png`}
              alt="Front of a house"
            />
          </picture>
        </span>
        <div className="c-card__buttons">
          <span className="c-card__buttons__heart">
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8822 22.9527L12.8827 22.9532C13.0086 23.0648 13.1684 23.125 13.3333 23.125C13.4982 23.125 13.6583 23.0646 13.784 22.9534L13.7842 22.9532C14.8687 21.9938 15.9129 21.0935 16.8306 20.3026C16.8306 20.3026 16.8307 20.3025 16.8307 20.3025L16.831 20.3023C19.5366 17.9697 21.7896 16.0236 23.3451 14.1247L23.3452 14.1247C25.054 12.0389 25.7917 10.1402 25.7917 8.10709C25.7917 6.08618 25.1075 4.25799 23.9047 2.93809C22.691 1.60648 21.0319 0.875 19.2173 0.875C17.8784 0.875 16.6575 1.2988 15.5666 2.15225L15.5666 2.15229C15.0719 2.53931 14.6127 3.00816 14.196 3.55656C13.7629 4.12676 12.9036 4.12662 12.4706 3.55646L13.1674 3.02722L12.4706 3.55645C12.0542 3.00822 11.5949 2.53935 11.1002 2.15225C10.0094 1.2988 8.78849 0.875 7.44954 0.875C5.63481 0.875 3.9759 1.60647 2.7622 2.93809L12.8822 22.9527ZM12.8822 22.9527C11.8015 21.9968 10.7601 21.0989 9.84492 20.31L9.84343 20.3087L9.84346 20.3087M12.8822 22.9527L9.84346 20.3087M9.84346 20.3087L9.83686 20.303M9.84346 20.3087L9.83686 20.303M9.83686 20.303C7.13072 17.9701 4.87734 16.0237 3.3217 14.1249M9.83686 20.303L3.3217 14.1249M3.3217 14.1249C1.61277 12.0389 0.875 10.1402 0.875 8.10709M3.3217 14.1249L0.875 8.10709M0.875 8.10709C0.875 6.08625 1.55929 4.25806 2.76217 2.93813L0.875 8.10709Z"
                stroke="#0A0A0A"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="c-card__buttons__arrow">
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
        </div>
        <div className="c-card__text">
          <span className="c-card__text__price">{house.price}</span>
          <span className="c-card__text__desc">{house.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
