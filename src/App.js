/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Moves from "./pages/Moves";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/moves/:data" component={Moves} />
      </div>
    </Router>
  );
}

export default App;
