import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import UserProfile from "../Pages/UserProfile";

const Router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children : [
      {
        path : "tenantRegister/:tenantId",
        index : true,
        element : <UserProfile/>
      }
    ]
  },
]);

export default Router;
