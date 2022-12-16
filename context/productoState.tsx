import productoReducer from "./productoReducer";
import productoContext from "./productoContext";
import { useReducer } from "react";
import {
  ESTABLECER_ACCION,
  OBTENER_BUSQUEDA,
  AÑADIR_CARRO,
  OBTENER_CARRO,
  ELIMINAR_CARRO,
  ELIMINAR_CARRO_ALL,
  SET_FILTER
} from "../types";


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


type props ={
  children:JSX.Element[]| JSX.Element
}

type carrito={
  id:number, cantidad:number

}
type accion={
  id:number, accion:string

}

type filter={
 dep?:Deparmet|null,
 sec?:Section|null,
 min:number,
 max:number
}

type initialState={
  busqueda:string,
  carrito:carrito[],
  accion:accion,
  filtro:filter
}



const ProductoState = ({children}:props) => {

  const initialState:initialState = {
    busqueda: "",
    accion: { id: 0, accion: "" },
    carrito:[{id:0, cantidad:0}],
    filtro:{dep:null,sec:null,min:0,max:0}
  };

  const [state, dispatch] = useReducer(productoReducer, initialState);


  const establecerBusqueda = (search:string) => {
    dispatch({
      type: OBTENER_BUSQUEDA,
      payload: search,
    });
  };


  const establecerAccion = (accion:accion) => {
    dispatch({
      type: ESTABLECER_ACCION,
      payload: accion,
    });
  };

  const agregarCarrito=({id,cantidad}:carrito):void=>{

      let carrito= localStorage.getItem('carrito');
      let carritoarray=[]
      let index=null;
     

      if(carrito){
        carritoarray = JSON.parse(carrito);
        index= carritoarray.findIndex((carritoaux:carrito)=>carritoaux.id===id)
        console.log(index)
      }else(
        carritoarray=[]
      )
      
      if(index!==-1 && index!==null){
        carritoarray[index].cantidad=carritoarray[index].cantidad+cantidad
        
      }else{

        carritoarray.push({id, cantidad})
        
      }
      
      localStorage.setItem('carrito', JSON.stringify(carritoarray))

      
      
      dispatch({
        type:AÑADIR_CARRO,
        payload:carritoarray
      })
     
      

     
  }


  const eliminarCarrito=(id:number)=>{

      let carrito= localStorage.getItem('carrito');
      let carritoarray=[]

      if(carrito){
        carritoarray = JSON.parse(carrito);
        carritoarray=carritoarray.filter((carritoaux:carrito)=>carritoaux.id!==id  )
        
      }
      

      localStorage.setItem('carrito', JSON.stringify(carritoarray))

      console.log(carritoarray)

      dispatch({
        type:ELIMINAR_CARRO,
        payload:id
      })
  }

  const eliminarTodoElcarro=()=>{
    let carrito='[]';
    localStorage.setItem('carrito', carrito)

    dispatch({
      type:ELIMINAR_CARRO_ALL,
      payload:null
      
    })
  }

  const obtenerCarrito=()=>{

      let carrito= localStorage.getItem('carrito');
      let carritoarray=[]

      if(carrito){
        carritoarray = JSON.parse(carrito);
        
        dispatch({
          type:OBTENER_CARRO,
          payload:carritoarray
        }) }
      }
      
  const establecerFiltro=(filtro:filter)=>{
    dispatch({
      type:SET_FILTER,
      payload:filtro
    }) 
  }


  return (
    <productoContext.Provider
      value={{
        busqueda: state.busqueda,
        accion: state.accion,
        carrito:state.carrito,
        filtro:state.filtro,
        establecerBusqueda,
        establecerAccion,
        agregarCarrito,
        obtenerCarrito,
        eliminarCarrito,
        eliminarTodoElcarro,
        establecerFiltro,
      }}
    >
      {children}
    </productoContext.Provider>
  );
};

export default ProductoState;
