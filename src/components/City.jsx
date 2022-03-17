import React from "react";
import styles from "./City.module.css";

export default function City({ city }) {
  return (
    <div className={styles.container}>
      <h2>{city.name}</h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoText}>Temperature: {city.max} ºC</div>
        <div className={styles.infoText}>Climate: {city.weather}</div>
        <div className={styles.infoText}>Wind: {city.wind} km/h</div>
        <div className={styles.infoText}>Amount of clouds: {city.clouds}</div>
        <div className={styles.infoText}>Latitude: {city.latitud}º</div>
        <div className={styles.infoText}>Longitude: {city.longitud}º</div>
      </div>
    </div>
  );
}
