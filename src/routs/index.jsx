import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/main/Home";
// import Footer from "../layouts/main/Footer";
import Foods from "../pages/main/Foods";
import TermsAndCondition from "../pages/main/TermsAndCondition";
import AboutUs from "../pages/main/AboutUs";
import Dashboard from "../layouts/dashboard/Dashboard";
import DashboardHome from "../pages/dahsboard/DashboardHome";
import Earnings from "../pages/dahsboard/Earnings";
import Auth from "../layouts/auth/Auth";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
        {
            path:"/dashboard",
            element:<DashboardHome />

        },
        {
            path:"/dashboard/earnigns",
            element:<Earnings />

        }
    ]
  },
  {
    path:"/auth",
    element:<Auth />,
    children:[
      {
        path:"/auth",
        element:<Login />
      },
      {
        path:"login",
        element:<Login />
      }
    ]
  }
]);
export default router;
