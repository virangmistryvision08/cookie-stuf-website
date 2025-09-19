import React from 'react'
import styles from "../feachured/Feachured.module.css";
import styles2 from "../recipes/Recipes.module.css";
import styles3 from "./HealthyRecipes.module.css";
import Card from '../card/Card';
import Title from '../title/Title';

const HealthyRecipes = () => {
    return (
        <>
            <div id={styles3.main}>
                <div id={styles3.container_fluid}>
                    <div id={styles.container}>
                        <Title text="Healthy & Tasty Recipes" />

                        <div id={styles2.cardContainer}>
                            <Card
                                src={
                                    "../../../images/healthyTastyRecipes/e0cd9ffa91d13509fc2aa564c3a19e0a36555bc7.png"
                                }
                                name={`Variety of rice jeera`}
                                course={"Free Course"}
                            />
                            <Card
                                src={
                                    "../../../images/healthyTastyRecipes/0d1438efa42b95f0ad42ced51062b98b1faab86a.png"
                                }
                                name={`Healthy salad`}
                            />
                            <Card
                                src={
                                    "../../../images/healthyTastyRecipes/11bfe93f490bb823a7988ff32f82aa4b5b92e0d9.png"
                                }
                                name={`Soup and curry`}
                                course={"Certified Course"}
                            />
                        </div>

                        <button id={styles2.button}>View All <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealthyRecipes