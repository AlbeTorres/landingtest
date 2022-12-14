import {createContext} from 'react';

type carrito={
    id:number, cantidad:number
  
  }

interface ctx{
    busqueda: string,
    accion: {id:number, accion:string},
    carrito:carrito[],
    establecerBusqueda:(word:string)=>void,
    establecerAccion:(accion:{id:number, accion:string})=>void,
    agregarCarrito:({id,cantidad}:{id:number, cantidad:number})=>void,
    obtenerCarrito:()=>void,
    eliminarCarrito:(id:number)=>void,
    eliminarTodoElcarro: ()=>void,

}


const productoContext= createContext<ctx|null>(null);

export default productoContext;