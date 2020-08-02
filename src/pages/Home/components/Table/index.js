import React from "react";
import { Link } from "react-router-dom";

import Loading from "../../../../components/Loading";
import Rest from "../../../../utils/rest";
import { Container } from "./styles";

const baseUrl = "https://mymoney-fb142.firebaseio.com/";

const { useGet } = Rest(baseUrl);

export default function Table() {
  const data = useGet("months");

  return (
    <Container>
      {data.loading ? (
        <Loading />
      ) : (
        <table>
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
                    <td>{index + 1}</td>
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
    </Container>
  );
}
