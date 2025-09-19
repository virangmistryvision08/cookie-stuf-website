import React from "react";
import styles from "./Title.module.css";

const Title = ({ text, content1, content2 }) => {
  return (
    <>
      <div id={styles.wrapper}>
        <h1 id={styles.title}>{text}</h1>
        {content1 || content2 ? (
          <p id={styles.content}>
            {content1} <br /> {content2}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Title;
