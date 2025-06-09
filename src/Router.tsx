import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Watchlist from "./pages/Watchlist";
import MovieDetail from "./pages/movie/[id]/page";
import MainLayout from "./layouts/MainLayout";
import SearchResults from "./pages/SearchResult";

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
      {
        path: "movie/:id", 
        element: <MovieDetail />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);
