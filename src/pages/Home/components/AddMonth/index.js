import React from "react";

function AddMonth() {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-3 mb-3">
          <select className="custom-select">
            <option selected>Ano</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="col-3 mb-3">
          <select className="custom-select ">
            <option selected>Mês</option>
            <option value="07">07</option>
            <option value="08">08</option>
          </select>
        </div>
        <div className="col-02 mb-3">
          <button className="btn btn-primary">Add Mês</button>
        </div>
      </div>
    </div>
  );
}

export default AddMonth;
