import React from "react";

import AddMonth from "./components/AddMonth";
import Table from "./components/Table";

function Home() {
  return (
    <div className="container pt-3">
      <AddMonth />
      <Table />
    </div>
  );
}

export default Home;
