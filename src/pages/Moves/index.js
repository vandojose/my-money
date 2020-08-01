import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Moves({ match }) {
  return (
    <Container>
      <h2>Movimentações</h2>
      <div>
        <Link to="/">Voltar</Link>
      </div>
    </Container>
  );
}

export default Moves;
