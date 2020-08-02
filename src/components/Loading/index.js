import React from "react";

import { Container, Loader } from "./styles";

function Loading() {
  return (
    <Container>
      <Loader>
        <div />
        <div />
      </Loader>
    </Container>
  );
}

export default Loading;
