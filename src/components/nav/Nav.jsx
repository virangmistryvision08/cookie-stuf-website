import React, { useState } from 'react'
import styles from './Nav.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
    setShow(false);
  }

  return (
    <>
      <div id={styles.wrapper}>
        <nav>
          <div onClick={() => goToHome()} className={styles.logo}>
            <img className={styles.logoImg} src="../.././images/Group.png" alt="Logo" />
            <div className={styles.logoText}>
              <p>Cooking</p> Stuff
            </div>
          </div>

          <span className={`${styles.tabs} ${show && styles.show}`}>
            <NavLink onClick={() => setShow(false)} to="/" className={styles.list}>Home</NavLink>
            <NavLink onClick={() => setShow(false)} to="/courses" className={styles.list}>All Course</NavLink>
            <NavLink onClick={() => setShow(false)} to="/contact-us" className={styles.list}>Contact Us</NavLink>
            <NavLink onClick={() => setShow(false)} to="/posts" className={styles.list}>Posts</NavLink>
          </span>

          <div className={`${styles.navButtons} ${show && styles.show}`}>
            <i className={`fa-solid fa-magnifying-glass ${styles.list}`}></i>
            <NavLink onClick={() => setShow(false)} to="/sign-in" className={styles.list}>Sign In</NavLink>
            <NavLink onClick={() => setShow(false)} to="sign-up">Sign Up</NavLink>
          </div>

          <div className={styles.hamburgerIcon} onClick={() => setShow(!show)}>
            {show ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav