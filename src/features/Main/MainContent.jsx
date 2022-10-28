import React from "react";
import "../Styles/main.scss";
import DesktopSwiper from "../../component/DesktopSwiper";
import MobileSwiper from "../../component/MobileSwiper";
import { useState } from "react";

function MainContent(props) {
  const [cart, setCart] = useState();

  function handleAdd() {
    // setAmount((prevAmount) => prevAmount + 1);
    props.setPickedAmount((prevAmount) => prevAmount + 1);
  }
  function handleMinus() {
    props.setPickedAmount((prevAmount) => prevAmount - 1);
    // setAmount((prevAmount) => prevAmount - 1);
    if (props.pickedAmount < 1) {
      props.setPickedAmount(0);
    }
  }
  return (
    <div className="main">
      <div className="product-holder">
        <div className="product">
          <MobileSwiper />
          <DesktopSwiper />
        </div>
      </div>
      <div className="product-details">
        <div className="details">
          <span>sneaker company</span>
          <h1>fall limited edition sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="cost-section">
            <div className="cost">
              <h1>$125.00</h1>
              <div>
                <span>50%</span>
              </div>
            </div>
            <p>$250.00</p>
          </div>
          <div className="order-quantity">
            <div className="order">
              <img
                src="./src/images/icon-minus.svg"
                alt="minus sign"
                onClick={handleMinus}
                style={{ opacity: props.pickedAmount === 0 ? "0.5" : "1" }}
              />
              <p>{props.pickedAmount}</p>
              <img
                src="./src/images/icon-plus.svg"
                alt="plus sign"
                onClick={handleAdd}
              />
            </div>
            <button type="submit" onClick={props.addCart}>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
              <p> Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
