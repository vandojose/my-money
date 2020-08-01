/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Rest from "../../../../utils/rest";

const baseUrl = "https://mymoney-fb142.firebaseio.com/";

const { usePost, useGet } = Rest(baseUrl);

function AddMove({ match }) {
  const data = useGet(`moves/${match.params.data}`);
  const [postData, save] = usePost(`moves/${match.params.data}`);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

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
    }
  };

  return (
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
  );
}

export default AddMove;
