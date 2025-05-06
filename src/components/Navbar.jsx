import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <div className="flex-col md:flex md:gap-3 w-full">
      <div className=" md:flex md:gap-3 *:block w-full">
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "text-purple-500 underline " : "text-md"}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-purple-500 underline" : ""}`
          }
          to="/meals"
        >
          Meals
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-purple-500 underline " : "text-md"}`
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
          <a className="text-2xl font-bold">Hostel Management</a>
        </div>

        <div className="navbar-end ml-5">
          <div className=" hidden lg:flex ">
            <ul>{link}</ul>
          </div>
          <Link
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300
               ease-in-out transform hover:scale-105"
            to="/login"
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
