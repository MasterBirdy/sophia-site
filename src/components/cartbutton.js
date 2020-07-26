import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const CartButton = ({ logoOn }) => {
  return (
    <div className={["cart-div", logoOn ? "" : "invisible"].join(" ")}>
      <RiShoppingCartLine size={"2.5rem"}></RiShoppingCartLine>
    </div>
  );
};

export default CartButton;
