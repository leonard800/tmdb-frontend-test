"use client";
import React from "react";
import type { TMDBMovie } from "../types";
import { getImageUrl } from "../api/tmdb";

interface MovieCardProps {
  movie: TMDBMovie;
  onClick?: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer w-40">
      <img
        src={getImageUrl(movie.poster_path ?? '')}
        alt={movie.title}
        className="rounded-md"
      />
      <h2 className="text-white font-semibold">{movie.title}</h2>
      <p className="text-gray-300 text-sm">{movie.release_date.substring(0, 4)}</p>
    </div>
  );
}