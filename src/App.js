import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
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
        <Nav />
        <Switch>
          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/add">
            <Add />
          </Route>

          <Route path="/">
            <Watchlist />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
