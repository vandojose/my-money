import React from "react";
import { Link } from "react-router-dom";

import Main from "../../components/Main";
import Table from "./components/Table";
import { Container } from "./styles";

export default function Moves({ match }) {
  return (
    <Main>
      <Container>
        <h2>Movimentações</h2>
        <Table match={match} />
        <Link to="/">Voltar</Link>
      </Container>
    </Main>
  );
}
