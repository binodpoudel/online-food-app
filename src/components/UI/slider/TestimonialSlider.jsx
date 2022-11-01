import React from "react";
import Slider from "react-slick";
import av1 from "../../../assets/images/av-1.png";
import av2 from "../../../assets/images/av-2.png";
import av3 from "../../../assets/images/av-1.png";
import "../../../styles/slider.css";



const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
         We cook such mouth-watering food. If you find something to be delicious, you could simply say "Yummy Yummy!".
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={av1} alt="avatar" className=" rounded" />
          <h6>Mike Deo</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "We cook such mouth-watering food. If you find something to be delicious, you could simply say "Yummy Yummy!"."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={av2} alt="avatar" className=" rounded" />
          <h6>John Mi</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Such mouth-watering food "Yummy Yummy!"."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={av3} alt="avatar" className=" rounded" />
          <h6>Harry Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
