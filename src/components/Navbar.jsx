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
            ` ${
              isActive
                ? "text-orange-500 underline-offset-3 underline "
                : "text-md"
            }`
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
            `${
              isActive
                ? "text-orange-500 underline-offset-3 underline "
                : "text-md"
            }`
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
            <a className="text-2xl font-bold text-orange-300 hidden md:flex">
              <span className="text-orange-500 mr-2">Hostel</span>Management
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex ">
            <ul>{link}</ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-end  ml-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  className="w-10 rounded-full border-2 border-orange-400 shadow-2xl 
                  transition duration-300 ease-in-out"
                >
                  <img
                    alt="User Avatar"
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg rounded-xl w-64 bg-white border border-gray-200"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full object-cover size-20 border-2 border-orange-400 shadow-lg
                shadow-orange-200 transition duration-300 ease-in-out"
                    alt="User Avatar"
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                  />
                  <p className="mt-2 font-semibold text-gray-800">
                    {user?.displayName}
                  </p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>

                <div className="divider my-2"></div>

                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:bg-indigo-100 px-3 py-2 rounded-lg transition-all duration-200"
                  >
                    🧭 Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/updateProfile"
                    className="text-gray-700 hover:bg-indigo-100 px-3 py-2 rounded-lg transition-all duration-200"
                  >
                    ✏️ Update Profile
                  </Link>
                </li>

                <div className="divider my-2"></div>
                <li>
                  <button
                    onClick={handleSingOut}
                    className=" flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-400 text-white text-lg font-semibold py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H8.25M15.75 9l3.75 3-3.75 3"
                      />
                    </svg>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
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
