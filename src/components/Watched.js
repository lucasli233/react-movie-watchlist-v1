import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

//rafc
export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="moviePage">
      <div className="container">
        <div className="pageHeader">
          <h1>Watched Movies</h1>
          <span className="count">
            {watched.length} {watched.length == 1 ? 'Movie' : 'Movies'}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movieGrid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched"></MovieCard>
            ))}
          </div>
        ) : (
          <h2 className="noMovies">No movies in your watched list, go add some!</h2>
        )}
      </div>
    </div>
  );
};
