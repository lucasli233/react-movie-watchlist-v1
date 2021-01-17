import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { Add } from "./components/Add";
import { BiTrash, BiEdit } from "react-icons/bi";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Router exact path="/">
          <Watchlist />
        </Router>

        <Router exact path="/watched">
          <Watched />
        </Router>

        <Router exact path="/add">
          <Add />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
