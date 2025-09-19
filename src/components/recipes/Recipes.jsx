import React from "react";
import Title from "../title/Title";
import styles from "../feachured/Feachured.module.css";
import styles2 from "./Recipes.module.css";
import Card from "../card/Card";

const Recipes = () => {
  return (
    <>
      <div id={styles2.main}>
        <div id={styles.container_fluid}>
          <div id={styles.container}>
            <Title text="Free Recipes" />

            <div id={styles2.cardContainer}>
              <Card
                src={
                  "../../../images/featured/6e75cf78d50d5e0980213923ad2536f80ce4f134.png"
                }
                name={`All in one Pack`}
                course={"Free Course"}
              />
              <Card
                src={
                  "../../../images/featured/09f15988732a7b0c5c8f99f65f1d585c8256c9b9.png"
                }
                name={`Variety of Juice`}
              />
              <Card
                src={
                  "../../../images/featured/dd9e04970a482dfb6bcadd0d841c4f08923cea1c.jpg"
                }
                name={`Variety of pork bar`}
                course={"Free Course"}
              />
            </div>

            <button id={styles2.button}>View All <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
