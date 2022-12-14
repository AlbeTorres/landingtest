import axios,{AxiosResponse}  from 'axios'
import React,{useContext} from 'react'
import Container from './Container'
import ProductoCard from './ProductoCard'
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



const ListaProductos = ({productos}:props) => {

  const context=useContext(productoContext)




let auxProductolist=productos


if(context?.busqueda){
        
  auxProductolist = auxProductolist.filter((producto) => {
    return Object.values(producto)
      .join(" ")
      .toLowerCase()
      .includes(context?.busqueda.toLowerCase());
  });
}


  return (
    <Container>

    <div className="mt-36   my-10 md:mt-20 w-full">
    <div className="w-full">
      <h2 className="text-2xl py-4 ">Productos</h2>

      <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {auxProductolist?.map((producto) => (
          <ProductoCard key={producto.id} _id={producto.id} nombre={producto.name} precio={producto.price}   img={producto.main_image}   />
        ))}
      </div>
    </div>
  </div>
    </Container>
  )
}

export default ListaProductos;

