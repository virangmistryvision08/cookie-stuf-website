import React from "react";
import Title from "../title/Title";
import styles from "./Feachured.module.css";
import Card from "../card/Card";


const Feachured = () => {
  return (
    <div id={styles.main}>
      <div id={styles.container_fluid}>
        <div id={styles.container}>
          <Title text="Featured" content1="We Specialise in organising Professional" content2="Traning Courses" />

          <div id={styles.cardContainer}>
            <Card src={"../../../images/featured/a431ec0b36301c826df4b8bc7a409a49a4239e57.png"} name={`All in one Pack`} course={"Free Course"} />
            <Card src={"../../../images/featured/09f15988732a7b0c5c8f99f65f1d585c8256c9b9.png"} name={`Variety of Juice`} />
            <Card src={"../../../images/featured/dd9e04970a482dfb6bcadd0d841c4f08923cea1c.jpg"} name={`Variety of pork bar`} course={"Certified Course"} />
            <Card src={"../../../images/featured/a88b80762157ea1a0f17d614a5d277d588a1c9b8.jpg"} name={`Noodles with veggies`} />
            <Card src={"../../../images/featured/7d3647af9319f8917466c55717050d065975464d.jpg"} name={`Pan Cake with banana`} course={"Certified Course"} />
            <Card src={"../../../images/featured/934b19f537705f0ac93ac69c2cae68ca14c4d092.jpg"} name={`Variety of mix nuts`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feachured;
