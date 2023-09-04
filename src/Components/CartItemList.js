import React from 'react'
import {
  
    ITEM_IMG_CDN_URL,
   
  } from "../utils/constants";
import TotalPriceCart from './TotalPriceCart';

const CartItemList = (props) => {

const cartItem = props.item;

  return (
    <>
    <div className=" flex-col items-center justify-center w-full">
    {cartItem.map((item) => (
      <div
        key={item.id}
        className="w-12/12 border-b-2 p-2 m-2 w-12/12 text-left "
      >
        <div className="flex my-2">
          <span className=" flex justify-between w-full font-semibold">
            {item.name}{" "}
          </span>

          <img
            src={ITEM_IMG_CDN_URL + item.imageId}
            className="w-40 mx-4"bord
            alt=""
          />
          <div className="  ">
           
          </div>
          <span className="font-semibold">₹{item.price / 100}</span>
        </div>

        <p className="text-xs my-1">{item.description}</p>

      </div>
      
    ))}

  </div>
  <div><TotalPriceCart/></div>
  </>
);
  
}

export default CartItemList