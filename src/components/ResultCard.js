import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import s from "./ResultCard.module.css";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  // prevent from adding same movie to watchlist more than once
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie || watchedMovie ? true : false;
  const watchedDisabled = watchedMovie ? true : false;
  // {s.}
  return (
    <div className={s.resultCard}>
      <div className={s.posterWrapper}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className={s.fillerPoster}></div>
        )}
      </div>

      <div className={s.info}>
        <div>
          <h3 className={s.title}>{movie.title}</h3>
          <h4 className={s.releaseDate}>
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className={s.controls}>
          <button
            className={s.btn}
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className={s.btn}
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
