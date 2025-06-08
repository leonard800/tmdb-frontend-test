import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Watchlist from "./pages/Watchlist";
import MainLayout from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);
