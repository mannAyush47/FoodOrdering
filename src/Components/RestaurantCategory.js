import  { useState } from "react";
import CategoryList from "./CategoryList";


const RestaurantCategory = (props) => {
  const { catData } = props;
//   console.log(catData);

const [showItems,setShowItems] = useState(false)
  const handleClick = () => {
  console.log("clicked")
  setShowItems(!showItems)

  };
  return (
    <div className="flex-col items-center justify-center b cursor-pointer">
      <div
        className="flex justify-between w-6/12 mx-auto bg-slate-50 p-4 shadow-lg my-2"
        onClick={handleClick}
      >
        <span>
          {catData.title} ({catData?.itemCards?.length}){" "}
        </span>
        <span>⬇️</span>
      </div>

      <div className="flex justify-between w-5/12 mx-auto bg-slate-50 p-4 border-red-300 shadow-lg ">
       {showItems && <CategoryList catItemList={catData} />} 
      </div>
    </div>
  );
};

export default RestaurantCategory;
