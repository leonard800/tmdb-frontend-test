"use client";
import { useEffect, useState } from "react";
import { fetchNowPlaying } from "../api/tmdb";
import MovieCard from "./MovieCard";
import type { TMDBMovie } from "../types";

export default function NowPlaying() {
  const [movies, setMovies] = useState<TMDBMovie[]>([]);
  const favorites = JSON.parse(localStorage.getItem("favourites") || "[]");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchNowPlaying();
      setMovies(response.results);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl text-white mb-4">Now Playing</h1>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hidden">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.find((m) => m.id === movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
