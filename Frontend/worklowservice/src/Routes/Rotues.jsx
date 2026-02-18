import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
