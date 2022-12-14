import React, {useContext, useEffect} from "react";
import productoContext from "../context/productoContext";


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

type accion={
  id:number, accion:string

}


type produarray={
  cantidad: number; id: number; name: string; price: number; main_image: string; extra_images: string[]; description: string; extra_info: string; stock: number; shop: Shop; section: Section;
 }

const NavCarrito = ({productos}:props) => {

  const context=useContext(productoContext)

  useEffect(()=>{
    context?.obtenerCarrito();
  },[])

  let monto = 0
  let cantida= context?.carrito.length

  let compras:produarray[]=[]
  
  
  productos.map(producto=>{
    context?.carrito.map(carro=>carro.id===producto.id && compras.push({...producto,cantidad:carro.cantidad}))
    
  })
  
  
  compras?.map( producto=> monto = monto + (producto?.price* producto.cantidad)  )

  const establecerAccionAux=(accion:accion):void=>{
    console.log({accion})

  }


  return (
    <div className="dropdown dropdown-end">
    <label tabIndex={1} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {cantida!==0 &&  
        <span className="badge badge-sm indicator-item">{cantida} </span>}
      </div>
    </label>
    <div
      tabIndex={1}
      className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
    >
      <div className="card-body">
        <span className="font-bold text-lg">{cantida} { cantida!==undefined && cantida > 1 ? 'productos' : 'producto' } </span>
        <span className="text-info">Subtotal: ${monto} </span>
        <div className="card-actions">
          <label  htmlFor="my-modal-6" 
          onClick={() => establecerAccionAux({id:0,accion:"carro"})}
          className="btn btn-primary btn-block">Ver carro</label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavCarrito