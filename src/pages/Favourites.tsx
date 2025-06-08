import React from "react";
import { useLists } from "../contexts/ListContext";
import MovieCard from "../components/MovieCard";

const Favourites: React.FC = () => {
    const favorites = localStorage.getItem("favourites");
    const favoritesJSON = JSON.parse(favorites || "[]");

  return (
    <div title="Favourites">
      {favoritesJSON.length > 0 ? (
        favoritesJSON.map((m) => <MovieCard key={m.id} movie={m} />)
      ) : (
        <p className="text-gray-400">No favourites yet.</p>
      )}
    </div>
  );
};

export default Favourites;
