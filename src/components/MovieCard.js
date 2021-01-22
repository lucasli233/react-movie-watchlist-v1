import React from "react";
import { MovieControls } from "./MovieControls";
import s from "./MovieCard.module.css";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movieCard">
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <MovieControls type={type} movie={movie} />
    </div>
  );
};
