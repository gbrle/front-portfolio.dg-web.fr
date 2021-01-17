import React, { useContext } from "react";
import "./card.css";
import ToggleSideBarContext from "../../../../contexts/ExperiencesContext";

export default function Card({ date, image, title, link, description, technos }) {
  const contextValue = useContext(ToggleSideBarContext);

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <article
        onClick={() => {
          contextValue.sideBarToggleExperiences();
          contextValue.selectExperience(
            title,
            link,
            date,
            image,
            description,
            technos
          );
        }}
        className="card card--1"
      >
        <div className="card__info-hover">
          <div className="card__clock-info">
            <span className="card__time">{date}</span>
          </div>
        </div>
        <div className="card__img"></div>
        <div className="card_link">
          <div
            style={{
              backgroundImage: `url('${image}'`,
            }}
            className="card__img--hover"
          ></div>
        </div>
        <div className="card__info">
          <h3 className="card__title d-table backgroundColor-white">{title}</h3>
          <span className="card__by d-table backgroundColor-white">
            <div
              className="card__author d-table backgroundColor-white"
              title="author"
            >
              sdfsdfsd
            </div>
          </span>
        </div>
      </article>
    </div>
  );
}
