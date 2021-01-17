import React from "react";
import { Link } from "react-router-dom";

//rafc
export const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
              <Link to="/">Watch List</Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">Watch List</Link>
              </li>

              <li>
                <Link to="/">Watched</Link>
              </li>

              <li>
                <Link to="/add" className="button">
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
