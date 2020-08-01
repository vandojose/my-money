import React from "react";
import { Link } from "react-router-dom";

import Main from "../../components/Main";
import { Container } from "./styles";

function Home({ match }) {
  return (
    <Main>
      <Container>
        <h2>Home</h2>
        <div>
          <Link to="/">Voltar</Link>
        </div>
      </Container>
    </Main>
  );
}

export default Home;
