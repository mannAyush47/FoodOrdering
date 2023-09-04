import {useState } from "react";
// import FoodFireLogo from "../../logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Switcher from "../utils/Switcher";

// Title component for display logo
// const Title = () => (
//   <a href="/">
//     <img
//       className="w-24 ml-4"
//       src={FoodFireLogo}
//       alt="Food Fire Logo"
//       title="Food Fire"
//     />
//   </a>
// );

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const onlineStatus = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
 
  console.log(cartItems);
  return (
    <div className="flex bg-blue-300 flex justify-between items-center shadow-lg h-24 dark:bg-gray-700 dark:border border-yellow-400">
      {/* <Title />
       */}

<a href="/">
    <img
      className="w-24 ml-4"
      src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
      alt="Food Fire Logo"
      title="Food Fire"
    />
  </a>

      <div className="flex justify-center items-center dark:text-white">

        <ul className="flex justify-center items-center">
          <li className="p-4 font-extrabold">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-4 font-semibold">
            <Link to="/Body">Home</Link>
          </li>
          <li className="p-4 font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 font-bold">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <li className="p-4 font-semibold">

            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li className="p-4 font-semibold">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn "
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
          <li className="p-4 mt-6 mr-1">
          <Switcher />

          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
