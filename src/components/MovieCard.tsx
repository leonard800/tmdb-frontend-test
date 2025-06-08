"use client";
import React, { useState } from "react";
import type { TMDBMovie } from "../types";
import { getImageUrl } from "../api/tmdb";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: TMDBMovie;
  onClick?: () => void;
  isFavorite?: boolean;
  isWatchlist?: boolean;
}

export default function MovieCard({ movie, onClick, isFavorite }: MovieCardProps) {
  const navigate = useNavigate(); 
  const [isFav, setIsFav] = useState(isFavorite);
  const [inWatchlist, setInWatchlist] = useState(false);

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      className="relative cursor-pointer w-40 flex-shrink-0"
      onClick={handleCardClick} 
    >
      <div className="w-40 h-60 overflow-hidden rounded-md bg-gray-800 relative">
        <img
          src={getImageUrl(movie.poster_path ?? "")}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onClick={onClick}
        />

        <button
          className="absolute bottom-2 left-2 text-white z-10"
          onClick={(e) => {
            !isFav
              ? localStorage.setItem(
                  "favourites",
                  JSON.stringify([
                    ...JSON.parse(localStorage.getItem("favourites") || "[]"),
                    movie,
                  ])
                )
              : localStorage.setItem(
                  "favourites",
                  JSON.stringify(
                    JSON.parse(
                      localStorage.getItem("favourites") || "[]"
                    ).filter((m) => m.id !== movie.id)
                  )
                );
            setIsFav(!isFav);
          }}
        >
          {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>

        <button
          className="absolute bottom-2 right-2 text-white z-10"
          onClick={(e) => {
            localStorage.setItem(
              "watchlist",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("watchlist") || "[]"),
                movie,
              ])
            )
            setInWatchlist(!inWatchlist);
          }}
        >
          {inWatchlist ? (
            <FaBookmark className="text-blue-400" />
          ) : (
            <FaRegBookmark />
          )}
        </button>
      </div>

      <h2 className="text-white font-semibold mt-2 truncate">{movie.title}</h2>
      <p className="text-gray-300 text-sm">
        {movie.release_date?.substring(0, 4)}
      </p>
    </div>
  );
}
