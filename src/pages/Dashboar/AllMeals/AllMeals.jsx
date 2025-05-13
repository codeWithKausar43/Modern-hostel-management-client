import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { Rating } from "@smastrom/react-rating";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllMeals = () => {
  const [sortBy, setSortBy] = useState("title");
  const axiosSecure = useAxiosSecure();

  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals", sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals?sortBy=${sortBy}`);
      return res.data;
    },
  });

  //   meals deleted
  const handleMealDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/meals/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="md:mt-11 md:w-[90%] mx-auto">
      <Helmet>
        <title>All Meals || Hostel Management</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black">
          Total Meals : {"meals.length"}
        </h3>
        <div className="flex justify-between mb-4">
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="title">Sort by title</option>
            <option value="like">Sort by Likes</option>
            <option value="review">Sort by Review</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th className="hidden md:flex">Name</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {meals.map((meal) => (
              <tr key={meal._id}>
                <th>{}</th>
                <td>
                  <div className="md:flex items-center gap-3 ">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={meal.photoUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{meal.name}</div>
                      <div className="text-sm opacity-50 flex gap-2 items-center">
                        <AiFillLike /> {meal?.like.likes}
                        <IoEye />
                        {meal.review}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="md:flex hidden  flex-col justify-center">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={"meal?.rating"}
                    readOnly
                  />
                  <span className="">{meal.name}</span>
                </td>
                <td>
                  <div className="flex gap-3 ">
                    <span className=" text-2xl bg-blue-400 p-3 btn hover:text-black text-white rounded-xl">
                      <Link to={`/meal/${meal._id}`}>
                        <IoEye />
                      </Link>
                    </span>
                    <Link to={`/dashboard/updateMeal/${meal._id}`}>
                      <span className=" text-2xl hover:text-green-700 bg-blue-400 p-3 btn text-white rounded-xl">
                        <GrDocumentUpdate />
                      </span>
                    </Link>
                    <span onClick={() => handleMealDelete(meal._id)} className=" text-2xl bg-blue-400 p-3 btn hover:text-red-700 text-white rounded-xl">
                      <RiDeleteBack2Fill />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeals;
