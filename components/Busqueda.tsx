import React from 'react'

const Busqueda = () => {

    // const {busqueda, establecerBusqueda}= useContext(productoContext);

    let busqueda='';

    const establecerBusqueda=(a:string)=>{
        console.log(a)
        busqueda=a
    }

    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        establecerBusqueda(e.target.value) 
        console.log()
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