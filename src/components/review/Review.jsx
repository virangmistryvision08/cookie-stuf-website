import React from 'react'
import styles from "./Review.module.css";

const Review = ({img, name, passion}) => {
  return (
    <div className={styles.reviw}>
      <div className={styles.topOfReviw}>
        <img className={styles.img} src={img} alt={`${name} Image`} />
        <div className={styles.namePassion}>
          <div className={styles.name}>{name}</div>
          <div className={styles.passion}>{passion}</div>
        </div>
      </div>
      <div className={styles.middle}>Perfection! went above!</div>
      <p className={styles.content} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.</p>
      <div className={styles.rating}>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2605;</p>
            <p style={{ color: "#f99106" }}>&#x2606;</p>
      </div>
    </div>
  )
}

export default Review
