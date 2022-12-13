import React from 'react'
import CarroItem from './CarroItem'

const CarritoCompras = () => {

    let compras= [
        {_id:1, img:'imagen', nombre:'nada',cantidad:4, precio:10},
        {_id:2, img:'imagen', nombre:'nada',cantidad:4, precio:10},
        {_id:3, img:'imagen', nombre:'nada',cantidad:4, precio:10},
        {_id:4, img:'imagen', nombre:'nada',cantidad:4, precio:10},
        {_id:5, img:'imagen', nombre:'nada',cantidad:4, precio:10},
    ]

    let monto_total=20

    const eliminar=(id:number):void=>{
    
        console.log(id)
      }
    


  return (
    <div className="modal-box ">
     <h2 className='my-2 text-xl'>Órdenes</h2>
     <div className=' overflow-y-scroll h-72 p-2'>
       {compras.length !=0 ?
         compras.map(producto=><CarroItem key={producto._id} _id={producto._id}  img={producto.img} nombre={producto.nombre} cantidad={producto.cantidad} precio={producto.precio}  eliminar={eliminar} />):
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
       <label htmlFor="my-modal-6"  className='btn btn-primary mr-3'>Comprar</label>
       <label htmlFor="my-modal-6" className='btn '>Cancelar</label>
     </div>
   </div>
  )
}

export default CarritoCompras