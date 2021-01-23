import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

//rafc
export const Header = () => {
  return (
    <div>
      {/* {s.} */}
      <header className={s.navBar}>
        <div className="container">
          <div className={s.innerContent}>
            <Link to="/" className={s.brand}>
              MY MOVIE DATABASE
            </Link>
            <ul className={s.navLinks}>
              <li>
                <Link to="/" className={s.navButton}>
                  WATCHLIST
                </Link>
              </li>

              <li>
                <Link to="/watched" className={s.navButton}>
                  WATCHED
                </Link>
              </li>

              <li>
                <Link to="/add" className={s.navButton}>
                  ADD
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
