import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const CartButton = ({ logoOn }) => {
  return (
    <div className={["cart-div", logoOn ? "" : "invisible"].join(" ")}>
      <RiShoppingCartLine></RiShoppingCartLine>
    </div>
  );
};

export default CartButton;
