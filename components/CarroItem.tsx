import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

type props={
    id:number,
    img:string,
    nombre:string,
    cantidad:number,
    precio:number,
    eliminar: (id:number)=>void, }

const CarroItem = ({id,img,nombre,cantidad,precio,eliminar }:props) => {


  return (
    <div className='flex items-center justify-between p-2 my-2 border-2 rounded-lg  '>
    <div className='flex items-center justify-center rounded-md w-full '>
        <figure className="w-12 h-12 rounded-md ">
            <img src={img} className='w-full h-full object-cover rounded-md '  alt="producto carrito"/>
        </figure>
        <div className='mx-2 w-32 md:w-3/4  '>
            <h2 className='text-sm truncate '>{nombre}</h2>
            <div className='flex items-start justify-start'>
                <p><span>$</span>{precio*cantidad}</p>
                <p className='ml-2'><span>Cant:</span>{cantidad}</p>
            </div>
        </div>
    </div>
    <div className='flex items-center justify-end text-2xl w-1/2 '>
        <button onClick={()=>eliminar(id)} className='text-red-600'><FaTrashAlt/></button>
    </div>
</div>
  )
}

export default CarroItem 