import * as React from "react";

const Titles: React.FC = ({}) => {
  return (
    <div className="title-content text-aboutMe-aboutMeText">
      <div className="title-content__container inline-flex overflow-hidden font-semibold items-center">
        <h1 className="hidden">
          Wir sind Software Engineers, Marketing Experten, Designer und Process Engineers.
        </h1>
        <p className="title-content__container__text m-0  inline-flex">Wir sind</p>
        <span className="blinker">[</span>
        <ul className="title-content__container__list text-center list-none">
          <li className="title-content__container__list__item m-0">
          Software Developer
          </li>
          <li className="title-content__container__list__item m-0">
          Shopify Experten
          </li>
          <li className="title-content__container__list__item m-0">
          Shop Designer
          </li>
          <li className="title-content__container__list__item m-0">
          E-Commerce Spezialisten
          </li>
        </ul>
        <span className="blinker">]</span>
      </div>
    </div>
  );
};

export default Titles;
