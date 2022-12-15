import React,{useContext} from 'react'
import CarritoCompras from './CarritoCompras'
import Filter from './Filter'
import productoContext from '../context/productoContext'


interface Producto{
  id:number,
  name:string,
  price:number,
  main_image:string,
  extra_images:Array<string>,
  description:string,
  extra_info:string,
  stock:number,
  shop: Shop,
  section: Section,
}

interface Shop{
  id:number,
  cover:null|string ,
  name:string,
  description:string,
 created:string,
 update:string,
 delivery_cost:number,
 user_id:number,
 location:number,
 logo:string,
 fixed_delivery:boolean,
 fixed_delivery_cost:number,
 aproved:boolean,
}

interface Section{
  id:number,
  cover:null|string ,
  icon:null|string ,
  en_name:string,
  es_name:string,
  department:number
 created:string,
 update:string
}
type props={
   productos:Array<Producto>
}

const Modal = ({productos}:props) => {

  const context= useContext(productoContext)

    let accion= context?.accion.accion


  return (
    <div>
    <input type="checkbox" id="my-modal-6" className="modal-toggle " />
    <div className="modal ">
    {accion === "carro" &&
        <div className="w-full flex items-center justify-center ">
        <CarritoCompras productos={productos} />
        </div>}
    {accion === "filter" &&
        <div className="w-full flex items-center justify-center ">
        <Filter  />
        </div>}
    </div>
  </div>
  )
}

export default Modal