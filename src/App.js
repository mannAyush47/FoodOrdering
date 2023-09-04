// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "../Food Fire Logo.png";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
import Switcher from "./utils/Switcher";
// import About from "./Components/About";

const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  return (
    // Provding redux to the app, ie. creating bridge bw react app and redux
    <Provider store={appStore}>

      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Fallback code</h1>}>
            <About />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
