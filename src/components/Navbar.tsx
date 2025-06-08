"use client";
import React from "react";

const Navbar = () => {
    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-sky-500">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-12 py-4 text-white">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest">CINEMA</h1>
                <div className="flex gap-4 md:gap-6 text-md md:text-base">
                    <a href="/Favourites" className="text-white visited:text-white hover:underline">Favorite</a>
                    <a href="/Watchlist" className="text-white visited:text-white hover:underline">Watchlist</a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
