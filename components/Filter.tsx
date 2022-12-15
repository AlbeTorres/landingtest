import React from "react";

const Filter = () => {
  return (
    <div className="modal-box ">
        <div className="flex flex-col items-center justify-center">
        <h4 className="dark:text-white text-lg font-semibold ">Filtrar</h4>

      <select className="select select-bordered w-full max-w-xs my-2">
        <option disabled selected>
          Departamento
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Sección
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Precio mínimo</span>
        </label>
          <input
            type="text"
            placeholder="0.01"
            className="input input-bordered"
          />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Precio máximo</span>
        </label>
        
          <input
            type="text"
            placeholder="0.01"
            className="input input-bordered"
          />
        
      </div>

      <div className='flex  items-center mt-5 w-full justify-end'>
       <label htmlFor="my-modal-6"  className='btn btn-primary mr-3'>Comprar</label>
       <label htmlFor="my-modal-6" className='btn '>Cancelar</label>
     </div>
        </div>
    </div>
  );
};

export default Filter;
