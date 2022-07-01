import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Day from "./Schedule/Day";
import UpdateActivity from "./Schedule/UpdateActivity";

function App() {
  return (
    <div>
      <center>
        <h1>📚 My Schedule List ⚽</h1>
      </center>
      <hr />
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Day/:id">
          <Day />
        </Route>
        <Route exact path="/Edit">
          <UpdateActivity />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
