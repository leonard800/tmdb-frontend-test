"use client";
import { useEffect, useState } from "react";
import { fetchTopRated } from "../api/tmdb";
import MovieCard from "./MovieCard";
import type { TMDBMovie } from "../types";

export default function TopRated() {
    const [movies, setMovies] = useState<TMDBMovie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchTopRated();
            setMovies(response.results);
        };
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold text-white mb-4">Top Rated</h1>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hidden">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}