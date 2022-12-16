import React,{useContext, useEffect} from 'react'
import CarroItem from './CarroItem'
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

type produarray={
  cantidad: number; id: number; name: string; price: number; main_image: string; extra_images: string[]; description: string; extra_info: string; stock: number; shop: Shop; section: Section;
 }

const CarritoCompras = ({productos}:props) => {


  const context=useContext(productoContext)


  let compras:produarray[]=[]
  let monto_total=0



  productos.map(producto=>{
    context?.carrito.map(carro=>carro.id===producto.id && compras.push({...producto,cantidad:carro.cantidad}))
    
  })

  compras.map(compra=>monto_total= monto_total+compra.price*compra.cantidad)


   

    const eliminar=(id:number):void=>{
    
        context?.eliminarCarrito(id)
        console.log('eliminado'+id)
      }
    
      const onSubmit=()=>{
        context?.eliminarTodoElcarro();
        context?.establecerFiltro({dep:null,sec:null,min:0,max:0})
        alert('Gracias por la compra')
      }


  return (
    <div className="modal-box ">
     <h2 className='my-2 text-xl'>Órdenes</h2>
     <div className=' overflow-y-scroll h-72 p-2'>
       {compras.length !=0 ?
         compras.map(producto=><CarroItem key={producto.id} id={producto.id}  img={producto.main_image} nombre={producto.name} cantidad={producto.cantidad} precio={producto.price}  eliminar={eliminar} />):
         <h1>Carro vacío</h1>
       }
     </div>

     <div className='my-2'>
         <div className='flex items-center'>
           <h2 className='mr-1'>Monto total:</h2>
           <p><span>$</span>{monto_total}</p>
         </div>

         <div className='flex items-center '>
           <h2  className='mr-1'>A pagar:</h2>
           <p><span>$</span>{monto_total}</p>
         </div>
 
     </div>

     <div className='flex  items-center mt-5 w-full justify-end'>
       <label htmlFor="my-modal-6" onClick={onSubmit} className='btn btn-primary mr-3'>Comprar</label>
       <label htmlFor="my-modal-6" className='btn '>Cancelar</label>
     </div>
   </div>
  )
}

export default CarritoCompras