import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          MyMoney
        </Link>
      </div>
    </nav>
  );
}

export default Header;
