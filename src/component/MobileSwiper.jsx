import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/navigation";
import "./styles.scss";

// import required modules
import { Navigation } from "swiper";

export default function MobileSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="../../../src/assets/images/image-product-1.jpg"
            alt="image product"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../src/assets/images/image-product-2.jpg" alt="image product" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../src/assets/images/image-product-3.jpg"
            alt="image product"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../src/assets/images/image-product-4.jpg"
            alt="image product"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
