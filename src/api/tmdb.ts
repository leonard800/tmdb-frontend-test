import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchNowPlaying = async () => {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    return response.data;
}

export const fetchTopRated = async () => {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    return response.data;
}

export const fetchPopular = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data;
}

export const fetchMovieDetails = async (movieId: number) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
}

export const getImageUrl = (path: string) => {
    return `https://image.tmdb.org/t/p/w500/${path}`
}