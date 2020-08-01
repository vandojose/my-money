/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyles } from "./theme/globalStyle";
import { defaultTheme } from "./theme/theme";
// import Moves from "./pages/Moves";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          {/* <Route path="/moves/:data" component={Moves} /> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
