"use client";
import { useEffect, useState } from "react";
import { fetchNowPlaying } from "../api/tmdb";
import MovieCard from "./MovieCard";
import type { TMDBMovie } from "../types";

export default function NowPlaying() {
  const [movies, setMovies] = useState<TMDBMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchNowPlaying();
      setMovies(response.results);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-white mb-4">Now Playing</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}