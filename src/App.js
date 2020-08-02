/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";
import Moves from "./pages/Moves";
import { GlobalStyles } from "./theme/globalStyle";
import { defaultTheme } from "./theme/theme";

function App() {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/moves/:data" component={Moves} />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
