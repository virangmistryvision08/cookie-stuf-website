import React from "react";
import styles from "./ContactUs.module.css";
import Title from "../title/Title";

const ContactUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title text="Contact Us" />
        <div className={styles.logoText}>
          <div className={styles.logo}>
            <img src="../../../images/Group.png" alt="" />
            <p className={styles.cooking}>
              Cooking <span className={styles.stuff}>Stuff</span>
            </p>
          </div>
          <div style={{color:"#00000080"}} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            nisi tortor tellus sagittis donec id est, dolor, morbi. Id facilisis
            sem sit maecenas metus, lacinia non. Lorem congue est at ultrices
            suscipit at nulla neque volutpat. Porta proin hdhhhjff.
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={`${styles.navigation} ${styles.tab}`}>
            <h1>Navigation</h1>
            <hr />

            <div className={styles.allTabs}>
              <div className={`${styles.courses} ${styles.displayFlex}`}>
                <i className="fa-solid fa-caret-right"></i>
                <p>All Courses</p>
              </div>
              <div className={`${styles.contact} ${styles.displayFlex}`}>
                <i className="fa-solid fa-caret-right"></i>
                <p>Contact Us</p>
              </div>
              <div className={`${styles.posts} ${styles.displayFlex}`}>
                <i className="fa-solid fa-caret-right"></i>
                <p>Posts</p>
              </div>
            </div>
          </div>

          <div className={`${styles.categories} ${styles.tab}`}>
            <h1>Categories</h1>
            <hr />

            <div className={styles.allTabs}>
              <div className={`${styles.featured} ${styles.displayFlex}`}>
                <i className="fa-solid fa-caret-right"></i>
                <p>Featured</p>
              </div>
              <div className={`${styles.recipes} ${styles.displayFlex}`}>
                <i className="fa-solid fa-caret-right"></i>
                <p>Free Recipes</p>
              </div>
              <div className={`${styles.paidCourses} ${styles.displayFlex}`}>
                <i className="fa-solid fa-caret-right"></i>
                <p>Paid Courses</p>
              </div>
            </div>
          </div>

          <div className={`${styles.touch} ${styles.tab}`}>
            <h1>Get in touch</h1>
            <hr />

            <div className={styles.allTabs}>
              <div className={`${styles.phone} ${styles.displayFlex}`}>
                <p>Phone: <span style={{color:"#00000080"}}>+123 456 7890</span></p>
                
              </div>
              <div className={`${styles.address} ${styles.displayFlex}`}>
                <p>Address: <span style={{color:"#00000080"}}>Lumbung Hidup St. Madiun City East Java 63125</span></p>
                
              </div>
              <div className={`${styles.email} ${styles.displayFlex}`}>
                <p>Email: <span style={{color:"#00000080"}}>cookingstuff@gmail.com</span></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
