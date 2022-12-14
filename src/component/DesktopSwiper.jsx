import React from "react";
import "./DesktopSwiper.scss";
import { useState } from "react";

import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import thumb1 from "../assets/images/image-product-1.jpg";
import thumb2 from "../assets/images/image-product-2.jpg";
import thumb3 from "../assets/images/image-product-3.jpg";
import thumb4 from "../assets/images/image-product-4.jpg";
// import bigImg from `../assets/images/${src}.jpg`;
import Bigthumbnail from "../assets/images/image-product-1.jpg";

function DesktopSwiper() {
  const [src, setSrc] = useState(thumb1);
  const handleScr = function (event) {
    setSrc((prev) => (prev = event.target.dataset.image));
  };

  // const bigImage = `../src/assets/images/${src}.jpg`;

  return (
    <div className="myDesktopSwiper">
      <div className="grid-container">
        <div className="large">
          <img
            // src="../assets/images/image-product-1.jpg"
            // src={Bigthumbnail}
            src={src}
            alt="image product"
            data-image="image-product-1"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img src={thumbnail1} alt="shoe product image" data-image={thumb1} />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img src={thumbnail2} alt="shoe product image" data-image={thumb2} />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img src={thumbnail3} alt="shoe product image" data-image={thumb3} />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img src={thumbnail4} alt="shoe product image" data-image={thumb4} />
        </div>
      </div>
    </div>
  );
}

export default DesktopSwiper;
