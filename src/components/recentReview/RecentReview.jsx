import React from "react";
import styles from "./RecentReview.module.css";
import Title from "../title/Title";
import Review from "../review/Review";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const RecentReview = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgOpacity}>
        <div className={styles.container}>
          <Title
            text="Check out Recent Review"
            content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            content2=" Accumsan neque pellentesque lorem eu sollicitudin congue ut amet."
          />

          <div className={styles.reviewContainer}>
            <Swiper
              className={styles.reviewSwiper}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 2 },
                768: { slidesPerView: 1 },
                540: { slidesPerView: 1 },
                320: { slidesPerView: 1 },
                20: { slidesPerView: 1 },
              }}
              // navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              <SwiperSlide>
                <Review
                  img="../../../images/reviews/083d92f12382d9039ca98727ed944befa9b034d7.jpg"
                  name="Clay Jhonson"
                  passion="Digital Marketer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Review
                  img="../../../images/reviews/8b670b55e794d296ad1112b8c3d9a61cc83abe91.jpg"
                  name="Nina Sin"
                  passion="Film Maker"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Review
                  img="../../../images/reviews/0a18dd808b321a33653da5617657a85c32010646.jpg"
                  name="Rose Merry"
                  passion="Developer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Review
                  img="../../../images/reviews/8b670b55e794d296ad1112b8c3d9a61cc83abe91.jpg"
                  name="Rose Merry"
                  passion="Developer"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentReview;
