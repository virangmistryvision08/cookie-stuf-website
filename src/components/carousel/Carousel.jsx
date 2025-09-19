import React from "react";
import firstCarousel from "./firstCarousel.module.css";
import secondCarousel from "./secondCarousel.module.css";
import thirdCarousel from "./thirdCarousel.module.css";

const Carousel = ({ img, liveImg, firstPage, secondPage, thirdPage }) => {
  return (
    <div
      id={!thirdPage ? firstCarousel.main : thirdCarousel.imgChange}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div id={!thirdPage ? firstCarousel.container_fluid : thirdCarousel.container_fluid}>
        <div id={firstCarousel.container}>
          <div id={firstCarousel.leftPart}>
            {liveImg && (
              <>
                <div id={firstCarousel.img}>
                  <img src={liveImg} alt="" />
                </div>
              </>
            )}{" "}
            {firstPage && (
              <>
                <div id={firstCarousel.content}>
                  Find Your <span>Favorite</span>
                  <p>Food & Make Better</p>
                  Your Cooking
                </div>
                <div id={firstCarousel.date}>10th - 20th May</div>
                <div id={firstCarousel.videoPdf}>
                  <p>Lifetime access</p>
                  <p>Videos</p>
                  <p>PDF</p>
                </div>
              </>
            )}
            {secondPage && (
              <>
                <div className={secondCarousel.content}>
                  <p style={{ color: "#FAEE21" }}>Variety of Juice </p>
                  Workshop
                </div>
                <div className={secondCarousel.secondDate}>
                  6th - 10th June 12:00PM
                </div>
                <div className={secondCarousel.price}>
                  <div className={secondCarousel.bigPrice}>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <p>5000</p>
                  </div>
                  <div className={secondCarousel.smallPrice}>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <p>500</p>
                    <div className={secondCarousel.lifeTimeAccess}>
                      (Lifetime access)
                    </div>
                  </div>
                </div>
                <div className={secondCarousel.recipes}>10+ Recipes</div>
                <div id={firstCarousel.videoPdf}>
                  <p>Lifetime access</p>
                  <p>Videos</p>
                  <p>PDF</p>
                </div>
              </>
            )}
            {thirdPage && (
              <>
                <div className={thirdCarousel.scaleXContent}>
                  <div className={thirdCarousel.content}>
                    <p style={{ color: "#B821FA" }}>Gaint Strawberry </p>
                    Workshop
                  </div>
                  <div
                    style={{ backgroundColor: "#f99106", color: "white" }}
                    className={thirdCarousel.thirdDate}
                  >
                    Coming Soon
                  </div>
                  <div
                    style={{ color: "#FA2147" }}
                    className={thirdCarousel.recipes}
                  >
                    10+ Recipes
                  </div>
                  <div id={firstCarousel.videoPdf}>
                    <p>Lifetime access</p>
                    <p>Videos</p>
                    <p>PDF</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
