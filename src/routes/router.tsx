import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import Users from "../pages/users/Users";
import Profile from "../pages/profile/Profile";
import EditProfile from "../widgets/EditProfile/EditProfile";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import NotFound from "../pages/notFoundPage/NotFound";
import Post from "../ui/posts/Post";
import AddPost from "../pages/add/AddPost";

export const router = createBrowserRouter([
  {
    id: "root",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Users /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/add/post", element: <AddPost /> },
      { path: "/profile", element: <Profile /> },
      { path: "/profile/:id", element: <Profile /> },
      { path: "/editProfile", element: <EditProfile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
