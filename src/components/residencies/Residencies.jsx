import React from "react";
import "./residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings inner-width r-container">
        <div className="r-head flex-col-start">
          <span className="orange-text">Best Choices</span>
          <span className="primary-text">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flex-col-start r-card">
                <img src={card.image} alt="home" />

                <span className="secondary-text r-price">
                  <span style={{ color: "green" }}>UGX </span>
                  <span>{card.price}</span>
                </span>

                <span className="primary-text">{card.name}</span>
                <span className="secondary-text">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex-center r-buttons">
      <button onClick={() => swiper.slidePrev()}> &lt; </button>
      <button onClick={() => swiper.slideNext()}> &gt; </button>
    </div>
  );
};
