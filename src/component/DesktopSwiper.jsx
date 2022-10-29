import React from "react";
import "./DesktopSwiper.scss";
import { useState } from "react";

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
            alt="image product"
            data-image="image-product-1"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src="../src/assets/images/image-product-1-thumbnail.jpg"
            alt="image product"
            data-image="image-product-1.jpg"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src="../src/assets/images/image-product-2-thumbnail.jpg"
            alt="image product"
            data-image="image-product-2.jpg"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src="../src/assets/images/image-product-3-thumbnail.jpg"
            alt="image product"
            data-image="image-product-3.jpg"
          />
        </div>
        <div className="grid-items" onClick={handleScr}>
          <img
            src="../../src/assets/images/image-product-4-thumbnail.jpg"
            alt="image product"
            data-image="image-product-4.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopSwiper;
