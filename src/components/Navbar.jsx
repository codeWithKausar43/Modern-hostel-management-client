import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import { FaUser } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

const Navbar = () => {
  const { user, singOutuser } = useContext(AuthContext);
  const handleSingOut = () => {
    singOutuser()
      .then(() => {
        console.log("successful singOUt");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const link = (
    <div className="flex-col md:flex md:gap-3 w-full">
      <div className=" md:flex md:gap-3 *:block w-full">
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "text-orange-500 underline-offset-3 underline " : "text-md"}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-orange-500 underline-offset-3 underline " : ""}`
          }
          to="/meals"
        >
          Meals
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-orange-500 underline-offset-3 underline " : "text-md"}`
          }
          to="/upcomingMeals"
        >
          Upcoming Meals
        </NavLink>
      </div>
    </div>
  );
  return (
    <div className="py-4 sticky top-0 z-20 bg-white/30  backdrop-blur-xl  shadow-sm">
      <div className="navbar flex mx-auto md:w-[90%] lg:w-[70%]  text-black font-semibold ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content min-w-[200px] bg-base-100 rounded-box z-[1] mt-3 p-4 shadow"
            >
              <li>{link}</li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
          <IoFastFood className="size-6 text-orange-400 mr-2" />
          <a className="text-2xl font-bold text-orange-300 hidden md:flex"><span className="text-orange-500 mr-2">Hostel</span>Management</a>
          </div>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex ">
            <ul>{link}</ul>
          </div>
          {user ? (
            <>
              <Link
                className="flex ml-4 items-center gap-2 text-orange-500 font-semibold hover:shadow-md px-4 py-2 rounded-lg shadow-lg
                shadow-orange-200 transition duration-300 ease-in-out bg-white"
                to="/"
                onClick={handleSingOut}
              >
                SignOut
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex ml-4 items-center gap-2 text-orange-500 font-semibold hover:shadow-md px-4 py-2 rounded-lg shadow-lg
                shadow-orange-200 transition duration-300 ease-in-out bg-white"
              >
                <FaUser />
                <span>Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
