import React from "react";
import styles from "./Card.module.css";

const Card = ({ src, name, course }) => {
  return (
    <div id={styles.card}>
      <div id={styles.divImg}>
        <img id={styles.featuredIMG} src={src} alt="" />
      </div>
      <div id={styles.content}>
        <h2 id={styles.name}>{name} </h2>
        <p className={styles.lifeTimeAccess}>(Lifetime Access)</p>
        <div id={styles.rating}>
          <p style={{ color: "#f99106" }}>4.2</p>
          <div id={styles.stars}>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2606;</p>
          </div>
          <p style={{color:"#949494ff"}}>(2,002)</p>
        </div>
        <div id={styles.price}>
          {" "}
          <span id={styles.bigRuppesIcon}>&#8377; 500</span>
          <span id={styles.smallRuppesIcon}>&#8377; 5000</span>
        </div>
      </div>
      {
        course ? <div id={styles.course}>{course}</div> : ""
      }
    </div>
  );
};

export default Card;
