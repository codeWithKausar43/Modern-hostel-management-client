import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { BiSolidLike } from "react-icons/bi";
import { FaStarOfDavid } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const {
    photoUrl,
    title,
    price,
    ingredients,
    like,
    email,
    description,
    deadline,
    category,
    name,
  } = useLoaderData();
  console.log();
  const meal = useLoaderData();
  console.log(meal);
  const [rating, setRating] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Helmet>
        <title>Details || Hostel Management</title>
      </Helmet>
      <div className="my-12">
        <div className="mt-6 grid mx-auto md:w-[90%] lg:w-[70%] grid-cols-1 lg:grid-cols-2 gap-12 border p-8 rounded-md border-gray-400">
          <div>
            <div className="flex justify-between">
              <div className="md:flex gap-4 items-center">
                <p className="mb-2">
                  <img
                    className="rounded-full size-20 object-cover"
                    src={photoUrl}
                    alt=""
                  />
                </p>
                <div>
                  <p className="mb-2 text-xl">{title}</p>
                  <p className="mb-2 text-xl">{name}</p>
                  <p className="mb-2 text-xl">{email}</p>
                </div>
              </div>
              <p className="text-md mt-32 md:mt-0 ml-2 md:ml-0">{deadline}</p>
            </div>
            <div className="divider"></div>
            <div className="grid md:grid-cols-4 items-end justify-end  grid-cols-2 mb-2 text-2xl">
              <p className="text-lg"> {category}</p>
              <p className="text-lg">${price}</p>
              <p className="text-lg flex items-center gap-1 cursor-pointer">
                <BiSolidLike />
                {like.likes}
              </p>
              <p className="text-lg flex items-center gap-1">
                <FaStarOfDavid />
                {meal.rating}
              </p>
            </div>
            <p>{ingredients}</p>
            <p>{description}</p>
            <p>
              <button className="btn mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                Request Meal
              </button>
            </p>
          </div>
          <div>
            <h3 className="mb-8 text-xl ">Review : </h3>
            <form>
              {/* Date Picker Input Field */}
              <div className="flex flex-col md:flex-row  justify-between ">
                <div>
                  <p className="text-gray-700">Deadline :</p>
                  <DatePicker
                    className="border p-2 rounded-md"
                    selected={startDate}
                    name="deadline"
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="text-left">
                  <label className="text-gray-700">Rating :</label>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                    required
                  />
                </div>
              </div>
              <div className="md:flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Title :</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="service title"
                    defaultValue={"meal.title"}
                    readOnly
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">User Email:</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="user email"
                    defaultValue={"user?.email"}
                    readOnly
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <label className="label">
                <span className="label-text">Review :</span>
              </label>
              <textarea
                name="review"
                className="textarea textarea-bordered w-full"
                placeholder="review"
                required
              ></textarea>
              <input
                className="btn mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealDetails;
