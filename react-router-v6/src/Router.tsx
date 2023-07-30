import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";

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
      }
    ],
    errorElement: <NotFound />
  }
])

export default Router