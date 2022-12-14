import React,{useContext} from 'react'
import productoContext from '../context/productoContext';

const Busqueda = () => {

  const context=useContext(productoContext)

    let busqueda=context?.busqueda;


    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        context?.establecerBusqueda(e.target.value) 
       
    }

  return (
    <>
    <input
      type="search" name="busqueda" value={busqueda} onChange={onChange}
      placeholder="Search"
      className="input input-bordered w-48 absolute top-20 right-1/2  -mr-24 md:m-0 md:static "
    />
  </>
  )
}

export default Busqueda