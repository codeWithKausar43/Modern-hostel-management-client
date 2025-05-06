import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;