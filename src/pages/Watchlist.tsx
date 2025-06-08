import React from "react";
import { useLists } from "../contexts/ListContext";
import MovieCard from "../components/MovieCard";

const Watchlist: React.FC = () => {
    const favorites = localStorage.getItem("watchlist");
    const favoritesJSON = JSON.parse(favorites || "[]");

  return (
    <div title="watchlist">
      {favoritesJSON.length > 0 ? (
        favoritesJSON.map((m) => <MovieCard key={m.id} movie={m} />)
      ) : (
        <p className="text-gray-400">No watchlist yet.</p>
      )}
    </div>
  );
};

export default Watchlist;