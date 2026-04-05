import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import Login from "../pages/Login/Login";
import PrivetRoute from "./PrivateRoute";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { superAdminPaths } from "./SuperAdmin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Login />
      </ProtectRoute>
    ),
  },
  {
    path: "/super_admin",
    element: (
      <PrivetRoute>
        <App />
      </PrivetRoute>
    ),
    children: routesGenerator(superAdminPaths),
  },
]);

export default router;
