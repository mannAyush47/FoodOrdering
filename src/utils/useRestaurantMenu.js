import { useEffect, useState } from "react";

const useRestaurantMenu = (
  swiggy_menu_api_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null); // use useState to store restaurant data
  const [menuItems, setMenuItems] = useState([]); // use useState to store restaurant Menu Item data
   const [jsonData,setjsonData] = useState([])

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
   setjsonData(json)
        // Set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];


            

              


        const categories = json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card).filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY).map((x) => x.title);
  

        // const categories = menuItemsDataa.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY).map((x) => x.title);
        // console.log(categories);

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems);
      }
    } catch (err) {
      setMenuItems([]);
      setRestaurant(null);
      console.error(err);
    }
  }
  return [restaurant,jsonData];
};

export default useRestaurantMenu;
