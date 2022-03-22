import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h3>About</h3>
      <p>Weather App is a simple page that help us to know the weather around the world.</p>
      <p>Developed by Julian Gonzalez.</p>
    </div>
  );
}
