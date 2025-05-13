import { useState } from "react";
import { FaBars, FaCalendarAlt, FaCcAmazonPay, FaHome } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import {
  MdFastfood,
  MdManageAccounts,
  MdNoMeals,
  MdOutlineCardMembership,
  MdOutlineRateReview,
  MdRateReview,
  MdRestaurantMenu,
} from "react-icons/md";
import { RiGitPullRequestFill, RiMapPinAddFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  return (
    <div className="flex flex-col md:flex-row">
      {/* Hamburger Menu for mobile */}
      <div className="md:hidden bg-orange-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed md:relative top-0 left-0 w-64 min-h-screen bg-orange-300 z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="menu px-4 pt-8">
          <div className="my-12">
            <li>
              <ActiveLink to="/dashboard/adminProfile" className="mb-2">
                <GrUserAdmin /> Admin Profile
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/allUsers" className="mb-2">
                <MdManageAccounts /> Manage Users
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/addMeal" className="mb-2">
                <RiMapPinAddFill /> Add Meal
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/allMelas" className="mb-2">
                <MdFastfood /> All Meals
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/allReview" className="mb-2">
                <MdRateReview /> All Reviews
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/allRequest" className="mb-2">
                <RiGitPullRequestFill /> All Requests
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/serveMeals" className="mb-2">
                <MdRestaurantMenu /> Serve Meals
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/upcomingMeals" className="mb-2">
                <FaCalendarAlt /> Upcoming Meals
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/addMembership" className="mb-2">
                <MdOutlineCardMembership /> Add Membership
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/membershipCard" className="mb-2">
                <FaCalendarAlt />
                Membership Card
              </ActiveLink>
            </li>
            <div className="divider"></div>
          </div>
          <div className="my-12">
            <li>
              <ActiveLink to="/dashboard/adminProfile" className="mb-2">
                <GrUserAdmin /> My Profile
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/requestedMeals" className="mb-2">
                <MdNoMeals /> Requested Meals
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/userAllReview" className="mb-2">
                <MdOutlineRateReview /> My Reviews
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/paymentsHistory" className="mb-2">
                <FaCcAmazonPay /> Payment History
              </ActiveLink>
            </li>
            <div className="divider"></div>
          </div>
         
          {/* Shared Links */}
          <li className="-mt-16">
            <ActiveLink to="/">
              <FaHome /> Home
            </ActiveLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="w-full p-4 md:p-8 mt-16 md:mt-0 bg-gray-50"
        onClick={() => setIsMenuOpen(false)} // Close menu when clicking on content
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
