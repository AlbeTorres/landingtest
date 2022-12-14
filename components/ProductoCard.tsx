import React from 'react'
import {FaDollarSign} from 'react-icons/fa'
import ButtonMenu from './ButtonMenu'

type props={
    img:string,
    _id:number,
    nombre:string,
    precio:number,
    
}


const ProductoCard = ({_id,nombre,precio, img}:props) => {
  return (
    <div className="relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <label  className="group cursor-pointer  ">
          <figure className='md:h-60 h-36  '>
          <img
            src={img}
            alt={"todo bine"}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />

          </figure>
        </label>
      </div>
      <div className="flex flex-col items-center justify-between px-2 w-full">
        <div className="w-full flex items-center justify-between mt-4 mb-2">
          <h3 className=" text-sm  dark:text-white text-gray-700 truncate">{nombre}</h3>
          <div className=" flex items-center ">
            <FaDollarSign/>
            <p className=" text-lg font-medium dark:text-white text-gray-900">{precio}</p>
          </div>
        </div>
        <ButtonMenu id={_id}   />
      </div>
    </div>
  )
}

export default ProductoCard