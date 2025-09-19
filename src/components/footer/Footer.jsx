import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
     <div className={styles.container}>
            <div>@ Copyright 2022. All Rights Reserved by Cooking Stuff</div>
            <div className={styles.terms}>
                <p>Terms & Condition</p>
                <p>License</p>
                <p>Support</p>
            </div>
     </div>
    </div>
  )
}

export default Footer
