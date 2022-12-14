import React,{useContext} from 'react'
import productoContext from '../context/productoContext'
import {FaCartPlus} from 'react-icons/fa'

type props={
    id:number
}

const ButtonMenu = ({id}:props) => {

const context=useContext(productoContext)

console.log(context?.carrito)

const añadirCarro=(id:number)=>{

    const carro={id,cantidad:1}
    context?.agregarCarrito(carro)
}


  return (
    <div className='flex flex-col justify-center items-center w-full'>

    <button className="btn  w-full text-sm  flex items-center justify-center h-10 " onClick={()=>añadirCarro(id)}>
        <span >Añadir</span>
        <FaCartPlus className='ml-1'/>
    </button>
    
</div>
  )
}

export default ButtonMenu