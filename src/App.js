import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { Add } from "./components/Add";
// import { BiTrash, BiEdit } from "react-icons/bi";

import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Router exact path="/">
            <Watchlist />
          </Router>

          <Router path="/watched">
            <Watched />
          </Router>

          <Router path="/add">
            <Add />
          </Router>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
