"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // ❤️ ← import here

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    setQuery("");
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-sky-500">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-12 py-4 text-white">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest">CINEMA</h1>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="hidden sm:flex items-center bg-white/20 rounded-md overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
            className="bg-transparent placeholder-gray-200 px-3 py-1 focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="px-3 py-1 hover:bg-white/30 transition"
            title="Search"
          >
            <FaHeart className="text-white text-sm" /> {/* ❤️ as magnifying glass */}
          </button>
        </form>

        {/* Navigation links */}
        <div className="flex gap-4 md:gap-6 text-md md:text-base">
          <a href="/Favourites" className="hover:underline">Favorite</a>
          <a href="/Watchlist" className="hover:underline">Watchlist</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
