import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  // const truncatedCuisines = cuisines.slice(0, 4);
  // console.log(truncatedCuisines)

  return (
    <div className="w-64 rounded-xl p-2 m-4 flex-col text-black flex-wrap flex bg-gray-50 hover:bg-gray-200 hover:shadow-xl transition duration-100 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-500">
      <img className="rounded-xl" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold">{name}</h3>
      <h5 className="flex flex-wrap">{cuisines.join(",").slice(0,30)}</h5>
      <h5>{areaName}</h5>
      <span>
      <h4 className={ ` flex justify-center font-c ${avgRatingString < 4 ? 'bg-red-500' : 'bg-green-500'} text-white w-6 rounded-sm`}>
  <i className="fa-solid fa-star"></i>
  {avgRatingString}
</h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
