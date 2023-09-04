import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const CartItemsFromStore = useSelector((store) => store.cart.items);
  console.log(CartItemsFromStore);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <CartItemList item={CartItemsFromStore} />

        {/* {CartItemsFromStore?.map(x=>x?.name)} */}
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
