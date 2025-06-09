"use client";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import type { TMDBMovie } from "../types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = "https://api.themoviedb.org/3";

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query") || "";
  const [results, setResults] = useState<TMDBMovie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(
      `${BASE}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
        query
      )}&page=1&include_adult=false`
    )
      .then((r) => r.json())
      .then((data) => setResults(data.results || []))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="pt-24 px-6 text-white">
      <h1 className="text-2xl mb-6">
        Search results for <span className="italic">“{query}”</span>
      </h1>

      {loading ? (
        <p>Loading…</p>
      ) : results.length ? (
        <div className="flex flex-wrap gap-6">
          {results.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
