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
            <div className={s.brand}>
              <Link to="/">Movie Watch List</Link>
            </div>
            <ul className={s.navLinks}>
              <li>
                <Link to="/">Watch List</Link>
              </li>

              <li>
                <Link to="/watched">Watched</Link>
              </li>

              <li>
                <Link to="/add" className="navButton">
                  Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
