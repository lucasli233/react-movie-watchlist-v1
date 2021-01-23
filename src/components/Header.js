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
              Movie Watch List
            </Link>
            <ul className={s.navLinks}>
              <li>
                <Link to="/" className={s.button1}>
                  Watch List
                </Link>
              </li>

              <li>
                <Link to="/watched" className={s.button1}>
                  Watched
                </Link>
              </li>

              <li>
                <Link to="/add" className={s.button1}>
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
