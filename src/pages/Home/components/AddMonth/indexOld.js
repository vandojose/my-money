import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";

const minYear = 2020;
const maxYear = 2025;

function AddMonth() {
  const [redir, setRedir] = useState("");
  const refYear = useRef();
  const refMonth = useRef();
  const years = [];
  const months = [];
  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  const zeroPad = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };

  const addYearMonth = () => {
    setRedir(`${refYear.current.value}-${refMonth.current.value}`);
    console.log(`ano: ${refYear.current.value} mes: ${refMonth.current.value}`);
  };

  if (redir !== "") {
    return <Redirect to={`/moves/${redir}`} />;
  }

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 col-lg-2 mb-3">
          <select ref={refYear} className="custom-select">
            <option selected>Ano</option>

            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-lg-2 mb-3">
          <select ref={refMonth} className="custom-select ">
            <option selected>Mês</option>
            {months.map(zeroPad).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-lg-3 mb-3">
          <button className="btn btn-primary" onClick={addYearMonth}>
            Add Mês
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMonth;
