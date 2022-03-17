import React from "react";
import CardStyles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.btn}>
        <button
          onClick={() => props.onClose(props.id)}
          className={CardStyles.btnStyle}
        >
          X
        </button>
      </div>
      <div className={CardStyles.title}>
        <Link to={`/city/${props.id}`}>
          <h1 className={CardStyles.titleStyle}>{props.name}</h1>
        </Link>
      </div>
      <div>
        <div className={CardStyles.content}>
          <div className={CardStyles.hijo}>
            <p>Min</p>
            <p>{props.min}°</p>
          </div>
          <div className={CardStyles.hijo}>
            <p>Max</p>
            <p>{props.max}°</p>
          </div>
          <div className={CardStyles.icon}>
            <img
              className={CardStyles.iconStyle}
              src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
