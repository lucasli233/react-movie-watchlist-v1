import React from "react";
import { FaEye } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import s from "./MovieControls.module.css";

export const MovieControls = ({ movie, type }) => {
  return (
    <div className="innerCardControls">
      {type === "watchlist" && (
        <>
          <button className={s.ctrlBtn}>
            <FaEye />
          </button>
          <button className={s.ctrlBtn}>
            <BiTrash />
          </button>
        </>
      )}
    </div>
  );
};
