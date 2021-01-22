import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import s from "./ResultCard.module.css";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, watchlist } = useContext(GlobalContext);

  // prevent from adding same movie to watchlist more than once
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;
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
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};
