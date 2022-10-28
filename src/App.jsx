import React, { useState } from "react";
import Navbar from "../features/Navbar/Navbar";
import MainContent from "../features/Main/MainContent";
function App() {
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState(0);

  const [toggleCart, setToggleCart] = useState(false);
  const showCartDetails = function () {
    setToggleCart((prev) => !prev);
  };
  const hideCartDetails = function () {
    setCart((prev) => 0);
    setToggleCart((prev) => false);
  };

  const deleteCart = function () {
    setCart((prev) => 0);
  };

  function handleAddCart(event) {
    event.preventDefault();
    setCart((prev) => (prev = amount));
  }

  return (
    <div className="App">
      <Navbar
        init={toggleCart}
        onHide={hideCartDetails}
        onShow={showCartDetails}
        addCart={handleAddCart}
        storeCart={cart}
        delCart={deleteCart}
      />
      <MainContent
        pickedAmount={amount}
        setPickedAmount={setAmount}
        addCart={handleAddCart}
      />
    </div>
  );
}

export default App;
