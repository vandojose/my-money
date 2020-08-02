import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";

import { Container, Select, Add, PlusIcon } from "./styles";

const minYear = 2020;
const maxYear = 2025;

export default function AddMonth() {
  const [redir, setRedir] = useState("");
  const refYear = useRef();
  const refMonth = useRef();
  const years = [];
  const months = [];
  for (let i = minYear; i <= maxYear; i += 1) {
    years.push(i);
  }
  for (let i = 1; i <= 12; i += 1) {
    months.push(i);
  }

  const zeroPad = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };

  const addYearMonth = () => {
    if (refYear.current.value !== "Ano" && !refMonth.current.value !== "Mês") {
      setRedir(`${refYear.current.value}-${refMonth.current.value}`);
    }
  };

  if (redir !== "") {
    return <Redirect to={`/moves/${redir}`} />;
  }
  return (
    <Container>
      <Select ref={refYear}>
        <option>Ano</option>

        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <Select ref={refMonth}>
        <option>Mês</option>
        {months.map(zeroPad).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>
      <Add onClick={addYearMonth}>
        <PlusIcon />
      </Add>
    </Container>
  );
}
