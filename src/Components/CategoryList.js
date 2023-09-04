import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";

import { useDispatch } from "react-redux";

import { addItem } from "../utils/cartSlice";
import { addPrice } from "../utils/TotalPriceSlice";

const CategoryList = (props) => {
  const { catItemList } = props;
  //    console.log(catItemList)

  //   let item =
  //  console.log(item)

  // let c = catItemList?.itemList?.map((item) =>
  //   item?.map((x) => x?.card?.info?.id)
  // );
  // console.log(c)
  let d = catItemList?.itemCards?.map((item) => item?.card?.info);

  console.log(d);

  const dispatch = useDispatch();

  const dispatchReduxAction = (item) => {
    //  Dispatch an action
    dispatch(addItem(item));
    dispatch(addPrice(item.price))
    
  };

  return (
    <div className=" flex-col items-center justify-center w-full">
      {d.map((item) => (
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
              <button
                onClick={()=>dispatchReduxAction(item)}
                className="text-orange-500 bg-white-600 w-18 absolute mt-20 -mr-16 rounded-xl shadow-lg p-2 m-auto"
              >
                Add+
              </button>
            </div>
            <span className="font-semibold">₹{item.price / 100}</span>
          </div>

          <p className="text-xs my-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
