import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Meals from "../pages/Meals";
import UpcomingMeals from "../pages/UpcomingMeals";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MealDetails from "../pages/MealDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddMeal from "../pages/Dashboar/AddMeal/AddMeal";
import AllMeals from "../pages/Dashboar/AllMeals/AllMeals";
import AllUser from "../pages/Dashboar/AllUsers/Allusers";
import AllReviews from "../pages/Dashboar/AllReviews/AllReviews";
import AllRequest from "../pages/Dashboar/AllRequest/Allrequest";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/meals",
          element: <Meals></Meals>
        },
        {
          path:"/upcomingMeals",
          element:<UpcomingMeals></UpcomingMeals>
        },
        {
          path:"/login",
          element:<Login></Login>
        }, 
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path: "/meal/:id",
          element:<PrivateRoute><MealDetails></MealDetails></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:3000/meals/${params.id}`)
        }
      ]
    },
    {
      path:"dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path:"/dashboard/addMeal",
          element: <AddMeal></AddMeal>
        },
        {
          path:"/dashboard/allMelas",
          element: <AllMeals></AllMeals>
        },
        {
          path:"/dashboard/allUsers", 
          element:<AllUser></AllUser>
        },
        {
          path:"/dashboard/allReviews",
          element:<AllReviews></AllReviews>
        },
        {
          path:"/dashboard/allRequest",
          element: <AllRequest></AllRequest>
        }
      ]
    }
  ]);

export default router;