/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Link } from "react-router-dom";

import Rest from "../../../../utils/rest";

const baseUrl = "https://mymoney-fb142.firebaseio.com/";

const { useGet } = Rest(baseUrl);

function Table() {
  const data = useGet("meses");

  return (
    <div className="col-12">
      {data.loading && (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!data.loading && (
        <table className="table">
          <thead>
            <tr>
              <th>Mês</th>
              <th>Previsão de entrada</th>
              <th>Entrada</th>
              <th>Previsão de saída</th>
              <th>Saída</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data.data).map((mes) => {
              return (
                <tr keys={mes}>
                  <td>
                    <Link to={`/moves/${mes}`}>{mes}</Link>
                  </td>
                  <td>{data.data[mes].previsao_entrada}</td>
                  <td>{data.data[mes].entrada}</td>
                  <td>{data.data[mes].previsao_saida}</td>
                  <td>{data.data[mes].saida}</td>
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
