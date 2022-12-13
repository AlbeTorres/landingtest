import React from 'react'
import {FaCartPlus} from 'react-icons/fa'

type props={
    id:number
}

const ButtonMenu = ({id}:props) => {

    const añadirCarro=(id:number)=>{
        console.log(id)
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