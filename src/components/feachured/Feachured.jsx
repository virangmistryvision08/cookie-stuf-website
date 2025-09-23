import React from "react";
import Title from "../title/Title";
import styles from "./Feachured.module.css";
import Card from "../card/Card";


const Feachured = () => {

  const cards = [
    {
      productImg:"../../../images/featured/a431ec0b36301c826df4b8bc7a409a49a4239e57.png",
      productName:"All in one Pack",
      productPrice: 550,
      course:"Free Course",
      id:1
    },{
      productImg:"../../../images/featured/09f15988732a7b0c5c8f99f65f1d585c8256c9b9.png",
      productName:"Variety of Juice",
      productPrice: 510,
      id:2
    },
    {
      productImg:"../../../images/featured/dd9e04970a482dfb6bcadd0d841c4f08923cea1c.jpg",
      productName:"Variety of pork bar",
      productPrice: 200,
      course:"Certified Course",
      id:3
    },
    {
      productImg:"../../../images/featured/a88b80762157ea1a0f17d614a5d277d588a1c9b8.jpg",
      productName:"Noodles with veggies",
      productPrice: 110,
      id:4
    },
    {
      productImg:"../../../images/featured/7d3647af9319f8917466c55717050d065975464d.jpg",
      productName:"Pan Cake with banana",
      productPrice: 80,
      course:"Certified Course",
      id:5
    },
    {
      productImg:"../../../images/featured/934b19f537705f0ac93ac69c2cae68ca14c4d092.jpg",
      productName:"Variety of mix nuts",
      productPrice: 240,
      id:6
    },
  ]
  return (
    <div id={styles.main}>
      <div id={styles.container_fluid}>
        <div id={styles.container}>
          <Title text="Featured" content1="We Specialise in organising Professional" content2="Traning Courses" />

          <div id={styles.cardContainer}>
            {
              cards.map((card) => {
                return (
                  <Card src={card.productImg} name={card.productName} price={card.productPrice} course={card.course} product={card} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feachured;
