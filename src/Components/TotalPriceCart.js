import React, { useState } from "react";
import { useSelector } from "react-redux";

const TotalPriceCart = ({ price }) => {
  console.log(price);

  const totalPrice = useSelector((store) => store.totalPrice.price);
  console.log(totalPrice / 100);
  return (
    <div>
      <h1 className="font-bold">Total :                {totalPrice/100}</h1>{" "}
    </div>
  );
};

export default TotalPriceCart;
