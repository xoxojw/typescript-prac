import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
])

export default Router