import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
// import {MenuShimmer} from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  // const [category , setCategory] = useState([])
  const [restaurant,jsonData] = useRestaurantMenu(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

// For categories next 2 lines
  const menuItemsDataa = jsonData?.data?.cards
    .find((x) => x.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card);
  
// console.log(menuItemsDataa)

  const categories = menuItemsDataa?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
    // .map((x) => x.title);
  console.log(categories);

  // setCategory(categories)
  

//  console.log(category)

  return (
    <div className="border">
      <div className="border-2 flex flex items-center justify-center">
        <img
          className="w-80 m-6"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="font-bold text-2xl my-1">{restaurant?.name}</h2>
          <p className="restaurant-tags my-1">
            {restaurant?.cuisines?.join(",")}
          </p>
          <div className="restaurant-details my-1">
            <div className="restaurant-rating my-1">
              <h4
                className={`my-1 flex justify-center font-c ${
                  restaurant?.avgRatingString < 4
                    ? "bg-red-500"
                    : "bg-green-500"
                } text-white w-6 rounded-sm`}
              >
                <i className="fa-solid fa-star"></i>
                {restaurant?.avgRatingString}
              </h4>
            </div>
            <div className="my-1">{restaurant?.slugs?.city}</div>
            <div className="my-1">{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      {/* <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}


      <div className="menu-content">
        <div className="text-center">
          <h1 className="font-bold">{restaurant?.name}</h1>
       
       <p className="font-semibold">
        {restaurant?.cuisines?.join(",")} -- {restaurant?.costForTwoMessage}
       </p>
       {/*Accoridian */}
       {/* {categories?.map((cat)=> (<RestaurantCategory/>))} */}

         {categories?.map((cat,index)=>(
          <RestaurantCategory  key={index} catData={cat} />
          ))} 
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
