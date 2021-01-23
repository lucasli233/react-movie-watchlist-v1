import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

import s from "./MovieControls.module.css";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="innerCardControls">
      {type === "watchlist" && (
        <>
          <button
            className={s.ctrlBtn}
            onClick={() => {
              addMovieToWatched(movie);
            }}
          >
            <FaEye />
          </button>
          <button
            className={s.ctrlBtn}
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <BiTrash />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className={s.ctrlBtn}
            onClick={() => {
              moveToWatchlist(movie);
            }}
          >
            <FaEyeSlash />
          </button>
          <button
            className={s.ctrlBtn}
            onClick={() => removeFromWatched(movie.id)}
          >
            <BiTrash />
          </button>
        </>
      )}
    </div>
  );
};
