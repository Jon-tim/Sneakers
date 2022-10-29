import React from "react";
import "./DesktopSwiper.scss";
import { useState } from "react";

import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
// import bigImg from `../assets/images/${src}.jpg`;

function DesktopSwiper() {
  const [src, setSrc] = useState("image-product-1.jpg");
  const handleScr = function (event) {
    setSrc((prev) => (prev = event.target.dataset.image));
  };

  return (
    <div className="myDesktopSwiper">
      <div className="grid-container">
        <div className="large">
          <img
            src={`../src/assets/images/${src}`}
            // src={bigImg}
            alt="image product"
            data-image="image-product-1"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src={thumbnail1}
            alt="shoe product image"
            data-image="image-product-1.jpg"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src={thumbnail2}
            alt="shoe product image"
            data-image="image-product-2.jpg"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src={thumbnail3}
            alt="shoe product image"
            data-image="image-product-3.jpg"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src={thumbnail4}
            alt="shoe product image"
            data-image="image-product-4.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopSwiper;
