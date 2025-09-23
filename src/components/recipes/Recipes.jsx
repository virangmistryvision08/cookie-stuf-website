import React from "react";
import Title from "../title/Title";
import styles from "../feachured/Feachured.module.css";
import styles2 from "./Recipes.module.css";
import Card from "../card/Card";

const Recipes = () => {
  const cards = [
    {
      productImg:
        "../../../images/featured/6e75cf78d50d5e0980213923ad2536f80ce4f134.png",
      productName: "All in one Pack",
      productPrice: 1000,
      course: "Free Course",
      id: 50,
    },
    {
      productImg:
        "../../../images/featured/09f15988732a7b0c5c8f99f65f1d585c8256c9b9.png",
      productName: "Variety of Juice",
      productPrice: 350,
      id: 51,
    },
    {
      productImg:
        "../../../images/featured/dd9e04970a482dfb6bcadd0d841c4f08923cea1c.jpg",
      productName: "Variety of pork bar",
      productPrice: 200,
      course: "Free Course",
      id: 52,
    },
  ];

  return (
    <>
      <div id={styles2.main}>
        <div id={styles.container_fluid}>
          <div id={styles.container}>
            <Title text="Free Recipes" />

            <div id={styles2.cardContainer}>
              {cards.map((card) => {
                return (
                  <Card
                    src={card.productImg}
                    name={card.productName}
                    price={card.productPrice}
                    course={card.course}
                    product={card}
                  />
                );
              })}
            </div>

            <button id={styles2.button}>
              View All <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
