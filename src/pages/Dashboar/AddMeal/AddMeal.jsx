import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddMeal = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const addMealInfo = {
      name: data?.name,
      email: data?.email,
      category: data?.category,
      price: parseInt(data?.price),
      ingredients: data?.ingredients,
      title: data?.title,
      deadline: data.deadline,
      description: data.description,
      photoUrl: data.photoUrl,
      like: {
        likes: 0,
      },
      review: 0,
      rating: 0,
    };
 
    axiosSecure
      .post("/meals", addMealInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${data?.title} has been added successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
      });
  };

  return (
    <div className="md:mt-12 w-full md:w-[90%] mx-auto">
      <Helmet>
        <title>Add Meal || Hostel Management</title>
      </Helmet>
      <div className="bg-blue-gray-100 box-content p-12 rounded-xl">
        <h3 className="mb-4 text-3xl font-bold text-center underline">
          Add Meal
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 justify-around">
            {/* Title */}
            <label className="form-control w-full">
              <span className="label-text mb-2">Title</span>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                className="input input-bordered w-full"
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </label>

            {/* Category */}
            <label className="form-control w-full">
              <span className="label-text mb-2">Category</span>
              <select
                {...register("category", { required: "Category is required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select a category</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Upcoming</option>
              </select>
              {errors.category && (
                <span className="text-red-500">{errors.category.message}</span>
              )}
            </label>

            {/* Ingredients */}
            <label className="form-control w-full">
              <span className="label-text mb-2">Ingredients</span>
              <input
                {...register("ingredients", {
                  required: "Ingredients are required",
                })}
                type="text"
                className="input input-bordered w-full"
              />
              {errors.ingredients && (
                <span className="text-red-500">
                  {errors.ingredients.message}
                </span>
              )}
            </label>

            {/* Price */}
            <label className="form-control w-full">
              <span className="label-text mb-2">Price</span>
              <input
                {...register("price", { required: "Price is required" })}
                type="number"
                className="input input-bordered w-full"
              />
              {errors.price && (
                <span className="text-red-500">{errors.price.message}</span>
              )}
            </label>

            {/* Post Date */}
            <label className="form-control w-full flex flex-col">
              <span className="label-text mb-2">Post Date</span>
              <Controller
                name="deadline"
                control={control}
                rules={{ required: "Deadline is required" }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => {
                      const formatted = date.toLocaleDateString("en-US");
                      field.onChange(formatted);
                    }}
                    className="border p-2 rounded-md w-full"
                    placeholderText="Select a date"
                  />
                )}
              />
              {errors.deadline && (
                <span className="text-red-500">{errors.deadline.message}</span>
              )}
            </label>

            {/* Name */}
            <label className="form-control w-full">
              <span className="label-text mb-2">Name</span>
              <input
                {...register("name", { required: "Name is required" })}
                defaultValue={user?.displayName || ""}
                type="text"
                className="input input-bordered w-full"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>

            {/* Email */}
            <label className="form-control w-full">
              <span className="label-text mb-2">Email</span>
              <input
                readOnly
                defaultValue={user?.email}
                {...register("email", { required: "Email is required" })}
                type="email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>

            {/* Photo file upload */}
            <label className="form-control w-full">
              <span className="label-text mb-2">Photo Url</span>
              <input
                {...register("photoUrl", { required: "photoUrl is required" })}
                type="url"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <span className="text-red-500">{errors.photoURl}</span>
              )}
            </label>

            {/* Description */}
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Description"
                  className="textarea textarea-bordered w-full md:col-span-2 mt-4"
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="justify-center px-6 w-full md:w-80 bg-blue-500 text-white py-2 mt-4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
          >
            Add Meal
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMeal;
