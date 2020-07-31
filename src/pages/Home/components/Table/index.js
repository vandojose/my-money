/* eslint-disable jsx-a11y/scope */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Link } from "react-router-dom";

import Loading from "../../../../components/Loading";
import Rest from "../../../../utils/rest";

const baseUrl = "https://mymoney-fb142.firebaseio.com/";

const { useGet } = Rest(baseUrl);

function Table() {
  const data = useGet("months");

  return (
    <div className="col-12 overflow-auto">
      {data.loading && <Loading />}
      {!data.loading && (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Mês</th>
              <th>Previsão de entrada</th>
              <th>Entrada</th>
              <th>Previsão de saída</th>
              <th>Saída</th>
            </tr>
          </thead>
          <tbody>
            {data.data &&
              Object.keys(data.data).map((month, index) => {
                return (
                  <tr key={month}>
                    <td scope="row">{index + 1}</td>
                    <td>
                      <Link to={`/moves/${month}`}>{month}</Link>
                    </td>
                    <td>{data.data[month].entry_forecast}</td>
                    <td>{data.data[month].entry}</td>
                    <td>{data.data[month].output_forecast}</td>
                    <td>{data.data[month].output}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
