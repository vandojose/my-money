import React, { useState } from "react";

import Rest from "../../../../utils/rest";

const baseUrl = "https://mymoney-fb142.firebaseio.com/";

const { useGet, usePost, useDelete } = Rest(baseUrl);

function Table({ match }) {
  const data = useGet(`moves/${match.params.data}`);
  const [postData, save] = usePost(`moves/${match.params.data}`);
  const [removeData, remove] = useDelete();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const onChangeDescripition = (evt) => {
    setDescription(evt.target.value);
  };

  const onChangeValue = (evt) => {
    setValue(parseFloat(evt.target.value));
  };

  const saveMovement = async () => {
    await save({
      description,
      value,
    });
    setDescription("");
    setValue("");
    data.refetch();
  };

  const removeMovement = async (id) => {
    await remove(`moves/${match.params.data}/${id}`);
    data.refetch();
  };
  if (!data.data) {
    return (
      <>
        <div className="col-12">
          <div className="border border-warning text-center my-5 py-2">
            <span className="text-warning text-uppercase">
              Nenhuma movmentação encontrada
            </span>
          </div>
        </div>
        <div className="col-12">
          <h5 className="text-primary m-0 my-3">Add nova movimentação</h5>
          <div className="row mx-0">
            <div className="col-12 col-lg-6 m-0 mb-3">
              <input
                placeholder="Descrição"
                type="text"
                className="form-control"
                value={description}
                onChange={onChangeDescripition}
              />
            </div>
            <div className="col-12 col-lg-6 m-0 mb-3">
              <div className="input-group">
                <input
                  placeholder="Valor"
                  type="number"
                  className="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  value={value}
                  onChange={onChangeValue}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={saveMovement}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {data.loading ? (
        <div className="col-12">
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th className="text-danger text-center">Deletar</th>
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
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={() => removeMovement(move)}>
                        -
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="col-12">
        <h5 className="text-primary m-0 my-3">Add nova movimentação</h5>
        <div className="row mx-0">
          <div className="col-12 col-lg-6 m-0 mb-3">
            <input
              placeholder="Descrição"
              type="text"
              className="form-control"
              value={description}
              onChange={onChangeDescripition}
            />
          </div>
          <div className="col-12 col-lg-6 m-0 mb-3">
            <div className="input-group">
              <input
                placeholder="Valor"
                type="number"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={value}
                onChange={onChangeValue}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={saveMovement}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
