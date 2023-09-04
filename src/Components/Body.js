import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");


  
  // use useEffect for one time call FetchRestaurants using empty dependency array
  useEffect(() => {
    FetchRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function FetchRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
               console.log(checkData)
          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
      console.log(filteredRestaurants)
    } catch (error) {
      console.log(error);
    }
  }

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  const onlineStatus = useOnline();

  if(onlineStatus === false) {
    return <h1 style={{"margin" : "80px"}}>Looks like youre offline</h1> 
  }

  return (
    <>
      <div className="border border-blue-500 dark:bg-black">
        <input
          type="text"
          className=" rounded-lg p-4 ml-16 m-4 border border-2 border-gray-600 w-6/12"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="w-40 h-18 border  h-10 p-2 bg-green-200 rounded-lg font-semibold"
          onClick={() => {
            // user click on button searchData function is called
            // searchData(searchText, allRestaurants);
           const filteredList =    allRestaurants.filter((restaurant) =>
                restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))

                setFilteredRestaurants(filteredList)
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="border-2 flex flex-wrap justify-center dark:bg-black">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              // <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;