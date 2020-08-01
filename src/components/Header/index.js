import React from "react";
import { Link } from "react-router-dom";

import { Container, LogoBox } from "./styles";

function Header() {
  return (
    <Container>
      <LogoBox>
        <Link to="/">
          <h2>My Money</h2>
        </Link>
      </LogoBox>
    </Container>
  );
}

export default Header;
