import React, { useState } from "react";

import Loading from "../../../../components/Loading";
import Rest from "../../../../utils/rest";
import { Container, BinIcon } from "./styles";

const baseUrl = "https://mymoney-fb142.firebaseio.com/";

const { useGet, usePost, useDelete, usePatch } = Rest(baseUrl);

export default function Table({ match }) {
  const data = useGet(`moves/${match.params.data}`);
  const dataMonth = useGet(`months/${match.params.data}`);
  const [postData, save] = usePost(`moves/${match.params.data}`);
  const [patchData, patch] = usePatch();
  const [removeData, remove] = useDelete();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

  const onChangeDescripition = (evt) => {
    setDescription(evt.target.value);
  };

  const onChangeValue = (evt) => {
    setValue(evt.target.value);
  };

  const saveMovement = async () => {
    if (!isNaN(value) && value.search(/^[-]?\d+(\.)?\d+?$/) >= 0) {
      await save({
        description,
        value: parseFloat(value),
      });
      setDescription("");
      setValue("");
      data.refetch();
      await sleep(500);
      dataMonth.refetch();
    }
  };

  const removeMovement = async (id) => {
    await remove(`moves/${match.params.data}/${id}`);
    data.refetch();
    await sleep(500);
    dataMonth.refetch();
  };

  const addEntryForecast = async (evt) => {
    await patch(`months/${match.params.data}`, {
      entry_forecast: evt.target.value,
    });
    await sleep(500);
    dataMonth.refetch();
  };

  if (data.loading) {
    return <Loading />;
  }

  if (!data.data) {
    return (
      <Container>
        <span>Nenhuma movmentação encontrada</span>
      </Container>
    );
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.data).map((move, index) => {
            return (
              <tr key={move}>
                <td>{index + 1}</td>
                <td>{data.data[move].description}</td>
                <td>{data.data[move].value} </td>
                <td className="text-center">
                  <button type="button" onClick={() => removeMovement(move)}>
                    <BinIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
