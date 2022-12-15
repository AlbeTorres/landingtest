import React,{useContext} from 'react'
import { FaAd } from 'react-icons/fa'
import productoContext from '../context/productoContext'

const Navfilter = () => {
    const context= useContext(productoContext)

    const establecerAccionAux=(accion:{id:number,accion:string})=>{
            context?.establecerAccion(accion)
    }


  return (
    <label htmlFor="my-modal-6" onClick={()=>establecerAccionAux({id:0,accion:'filter'})} className="btn btn-ghost btn-circle">
    <FaAd/>
    </label>
  )
}

export default Navfilter