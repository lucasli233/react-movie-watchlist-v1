import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import s from "./Watchlist.module.css";
//rafc
export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className={s.moviePage}>
      <div className="container">
        <div className={s.header}>
          <div className={s.heading}>My Watchlist</div>
        </div>

        {watchlist.length > 0 ? (
          <div className={s.movieGrid}>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist"></MovieCard>
            ))}
          </div>
        ) : (
          <h2 className="noMovies">No movies in your list, go add some!</h2>
        )}
      </div>
    </div>
  );
};
