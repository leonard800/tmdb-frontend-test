"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { TMDBMovie } from "../types";

interface ListCtx {
  favourites: TMDBMovie[];
  watchlist: TMDBMovie[];
  toggleFav: (m: TMDBMovie) => void;
  toggleWatch: (m: TMDBMovie) => void;
}

const ListContext = createContext<ListCtx | null>(null);
export const useLists = () => useContext(ListContext)!;

export function ListProvider({children}: {children: ReactNode}) {
  const [favourites, setFavourites] = useState<TMDBMovie[]>([]);
  const [watchlist, setWatchlist] = useState<TMDBMovie[]>([]);

  useEffect(() => {
    const favJson  = localStorage.getItem('favourites');
    const watchJson = localStorage.getItem('watchlist');
    if (favJson)   setFavourites(JSON.parse(favJson));
    if (watchJson) setWatchlist(JSON.parse(watchJson));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const toggle = (
    arr: TMDBMovie[],
    setter: React.Dispatch<React.SetStateAction<TMDBMovie[]>>,
    movie: TMDBMovie
  ) => {
    const exists = arr.find((m) => m.id === movie.id);
    exists
      ? setter(arr.filter((m) => m.id !== movie.id))
      : setter([...arr, movie]);
  };

  return (
    <ListContext.Provider
      value={{
        favourites,
        watchlist,
        toggleFav: (m) => toggle(favourites, setFavourites, m),
        toggleWatch: (m) => toggle(watchlist, setWatchlist, m),
      }}
    >
      {children}
    </ListContext.Provider>
  );
}