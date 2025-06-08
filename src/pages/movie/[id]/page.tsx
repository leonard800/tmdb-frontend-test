import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails, getImageUrl } from "../../../api/tmdb";
import { FaStar } from "react-icons/fa";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    fetchMovieDetails(Number(id)).then(setMovie);
  }, [id]);

  if (!movie) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* BACKDROP */}
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-6 md:p-12 flex items-start gap-8">
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              className="w-40 md:w-56 rounded-md shadow-lg"
            />
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                {movie.title}{" "}
                <span className="font-light text-gray-400">
                  ({movie.release_date?.slice(0, 4)})
                </span>
              </h1>
              <p className="text-gray-200 max-w-prose">{movie.overview}</p>
              <div className="flex gap-4 mt-4">
                <span className="border px-2 py-0.5 rounded">
                  {movie.runtime} min
                </span>
                <span className="border px-2 py-0.5 rounded">
                  {movie.genres?.map((g: any) => g.name).join(", ")}
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />{" "}
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}