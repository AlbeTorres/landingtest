import React from "react";

const Filter = () => {
  return (
    <div>
      <select className="select w-full max-w-xs">
        <option disabled selected>
          Departamento
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <select className="select w-full max-w-xs">
        <option disabled selected>
          Sección
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="0.01"
            className="input input-bordered"
          />
          <span>Min</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="0.01"
            className="input input-bordered"
          />
          <span>Máx</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
