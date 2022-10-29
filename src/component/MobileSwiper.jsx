import React, { useState } from "react";
//import all images
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";

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
          <img src={image1} alt="shoe product image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="shoe product image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="shoe product image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="shoe product image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
