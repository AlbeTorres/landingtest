import React from 'react'
import CarritoCompras from './CarritoCompras'

const Modal = () => {

    let accion= 'carro'


  return (
    <div>
    <input type="checkbox" id="my-modal-6" className="modal-toggle " />
    <div className="modal ">
    {accion === "carro" &&
        <div className="w-full flex items-center justify-center ">
        <CarritoCompras/>
        </div>}
    </div>
  </div>
  )
}

export default Modal