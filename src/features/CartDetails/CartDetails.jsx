import React from "react";
import "./cartDetails.scss";
function CartDetails(props) {
  return (
    <section style={{ display: props.initChildShow ? "block" : "none" }} className="cart-modal">
      <div className="cart-modal-content">
        <div className="cart-box">
          <p>cart</p>
        </div>
        <div>
          <div className="detail-cont">
            {/* ------ */}
            {props.checkCart === 0 ? (
              <p className="err" style={{ height: "100px" }}>
                Your cart is empty!
              </p>
            ) : (
              <>
                <div className="cart-details">
                  <div>
                    <img
                      src="../src/images/image-product-1-thumbnail.jpg"
                      alt="shoe image"
                      className="thumbnail"/>
                    <div className="prod-name">
                      <p className="name-edition">fall limited edition sneakers</p>
                      <p className="total-cont">
                        $125.00 x <span>{props.cartNum} =</span>
                        <span className="total">
                          ${125.0 * props.cartNum}.00
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="../src/images/icon-delete.svg"
                      alt="delete icon"
                      className="delete"
                      onClick={props.delCartFunc}
                    />
                  </div>
                </div>
                <button onClick={props.hideCart}>checkout</button>
              </>
            )}
            {/* ......... */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartDetails;
