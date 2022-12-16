import {createContext} from 'react';

type carrito={
    id:number, cantidad:number
  
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
  
  
  interface Deparmet{
          id: number,
          en_name: string,
          es_name: string,
          icon:string|null,
          cover: string|null,
          sections:Section[]
  }
  
  
type filter={
  dep?:Deparmet|null,
  sec?:Section|null,
  min:number,
  max:number
 }

interface ctx{
    busqueda: string,
    accion: {id:number, accion:string},
    carrito:carrito[],
    filtro:filter,
    establecerBusqueda:(word:string)=>void,
    establecerAccion:(accion:{id:number, accion:string})=>void,
    agregarCarrito:({id,cantidad}:{id:number, cantidad:number})=>void,
    obtenerCarrito:()=>void,
    eliminarCarrito:(id:number)=>void,
    eliminarTodoElcarro: ()=>void,
    establecerFiltro:(filtro:filter)=>void

}


const productoContext= createContext<ctx|null>(null);

export default productoContext;