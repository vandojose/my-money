import React from "react";
import { Link } from "react-router-dom";

import Table from "./components/Table";

function Moves({ match }) {
  return (
    <div className="container">
      <h2 className="mt-5">Movimentações</h2>
      <Table match={match} />
      <Link to="/" className="text-primary">
        Voltar
      </Link>
    </div>
  );
}

export default Moves;
