import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { Root } from "./root/Root";
import { NotFound } from "./NotFound";

export const router = createBrowserRouter([
  {
    path: "/nordic-rose-frontend/",
    element: <Root />,
    children: [
      {
        path: "/nordic-rose-frontend/",
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
