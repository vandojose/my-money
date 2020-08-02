import React from "react";

import Main from "../../components/Main";
import AddMonth from "./components/AddMonth";
import Table from "./components/Table";
import { Container } from "./styles";

export default function Home() {
  return (
    <Main>
      <Container>
        <h2>Home</h2>
        <AddMonth />
        <Table />
      </Container>
    </Main>
  );
}
