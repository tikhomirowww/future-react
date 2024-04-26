import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import Users from "../pages/users/Users";
import Profile from "../pages/profile/Profile";

export const router = createBrowserRouter([
  {
    id: "root",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Users /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
