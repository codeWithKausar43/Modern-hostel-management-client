import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const MealCard = ({ item }) => {
  const { _id, title, rating, photoUrl, price, description } = item || {};
 
  return (
    <div className=" sm:px-2 px-2 md:px-0">
      <div className="card h-[330px] bg-base-100 shadow-xl group overflow-hidden relative hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out">
        {/* Image Section */}
        <figure className="relative">
          <img
            src={photoUrl}
            alt={title}
            className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <p className="absolute top-4 left-4 bg-orange-200 text-orange-600 px-4 py-1 rounded-lg font-bold shadow-md">
            ${price}
          </p>

          {/* Hover Button */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <Link to={`/meal/${_id}`}>
              <button className="cursor-pointer px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300">
                🍽️ Details 
              </button>
            </Link>
          </div>
        </figure>

        {/* Card Body */}
        <div className="card-body">
          <div className="flex justify-between items-start">
            <p className="text-sm font-semibold">{title}</p>
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
          </div>
          <p className="text-gray-600 mt-2">
            {description?.length > 80
              ? `${description.slice(0, 75)}...`
              : description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
