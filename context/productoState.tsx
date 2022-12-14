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
} from "../types";


type props ={
  children:JSX.Element[]| JSX.Element
}

type carrito={
  id:number, cantidad:number

}
type accion={
  id:number, accion:string

}



const ProductoState = ({children}:props) => {

  const initialState = {
    busqueda: "",
    accion: { id: 0, accion: "" },
    carrito:[{id:0, cantidad:0}]
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


  return (
    <productoContext.Provider
      value={{
        busqueda: state.busqueda,
        accion: state.accion,
        carrito:state.carrito,
        establecerBusqueda,
        establecerAccion,
        agregarCarrito,
        obtenerCarrito,
        eliminarCarrito,
        eliminarTodoElcarro,
      }}
    >
      {children}
    </productoContext.Provider>
  );
};

export default ProductoState;
