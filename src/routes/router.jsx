import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Meals from "../pages/Meals";
import UpcomingMeals from "../pages/UpcomingMeals";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        }
      ]
    },
  ]);

export default router;