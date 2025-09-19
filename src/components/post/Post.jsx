import React from "react";
import styles from "./Post.module.css";

const Post = ({ img, name }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postImg}>
        <img src={img} alt={`${name} Image`} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.date} >March 11, 2022  No Comments</p>
        <p className={styles.text} >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        <div className={styles.button}>Read More <i className="fa-solid fa-angles-right"></i></div>
      </div>
    </div>
  );
};

export default Post;
