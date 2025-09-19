import Slider from "react-slick";

// Import slick-carousel default styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../carousel/Carousel";
import carousel1IMG from "../../../images/24d1cd2409044a4c8eac7e9a3049c0720a09fd2b.jpg"
import carousel2IMG from "../../../images/a0a10131a3ee01e32612f71cbaff044634b8f498.jpg"
import carousel3IMG from "../../../images/40dd71dae683c4b54073f8945b98c2b7fb78dcca.jpg"

const Section1 = () => {
  const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  arrows: false,
  customPaging: () => <div className="custom-dot"></div>,
  appendDots: (dots) => (
    <ul style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
      {dots}
    </ul>
  ),
};

  const carouselContent = [
    {
      img: carousel1IMG,
      liveImg: "../../../images/d536106affbd8da0197a209335b667f3d0b0daf3.png",
      firstPage:"firstPage"
    },
    {
      img: carousel2IMG,
      liveImg: "../../../images/d536106affbd8da0197a209335b667f3d0b0daf3.png",
      secondPage:"secondPage"
    },
    {
      img: carousel3IMG,
      imgChange:"horizontaly",
      thirdPage:"thirdPage"
    },
  ];

  return (
    <Slider {...settings}>
      {carouselContent.map((item, index) => {
        return (
          <Carousel
            key={index}
            img={item.img}
            liveImg={item.liveImg}
            firstPage={item.firstPage}
            secondPage={item.secondPage}
            thirdPage={item.thirdPage}
          />
        );
      })}
    </Slider>
  );
};

export default Section1;
