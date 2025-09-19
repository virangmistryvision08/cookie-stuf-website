import React from "react";
import Title from "../title/Title.jsx";
import styles from "./ReadOurPost.module.css";
import Post from "../post/Post.jsx";

const ReadOurPost = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Title
            text="Read Our Post"
            content1="We Specialise in organising Professional Traning Courses"
          />

          <div className={styles.postContainer}>
            <Post
              name="Chef Cooking Life"
              img="../../../images/posts/a962caa22b7d2fdef73da58f3c1c73d07caf4ee9.png"
            />
            <Post
              name="Cool way to cook food"
              img="../../../images/posts/c99e3dac48598745df1946b94686619877d4c510.png"
            />
            <Post
              name="Make Spicy Food"
              img="../../../images/posts/c5b61459e390735629a91608b9df029ef3062b29.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadOurPost;
