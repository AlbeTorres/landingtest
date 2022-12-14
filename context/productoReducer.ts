import {
  AÑADIR_CARRO,
  ELIMINAR_CARRO,
  ELIMINAR_CARRO_ALL,
  ESTABLECER_ACCION,
  MODIFICAR_PRODUCTO_CARRO,
  OBTENER_BUSQUEDA,
  OBTENER_CARRO,
  
} from "../types";


type carrito={
  id:number, cantidad:number

}
type state={
  busqueda: string,
  accion: { id:number, accion: number },
  carrito: Array<carrito>

}

type accion={
  id:number, accion:string

}

type action={
  type:string,
  payload:any

}


export default (state:state, action:action) => {
  switch (action.type) {
    case ESTABLECER_ACCION:
      return {
        ...state,
        accion: action.payload,
      };
    case AÑADIR_CARRO:
      return({
        ...state,
        carrito: action.payload,
      });
    case MODIFICAR_PRODUCTO_CARRO:
    case OBTENER_CARRO:
      return({
        ...state,
        carrito: action.payload
      });
    case ELIMINAR_CARRO:
      return({
        ...state,
        carrito: state.carrito.filter(producto=>producto.id!==action.payload.id)
      })
    case ELIMINAR_CARRO_ALL:
      return({
        ...state,
        carrito: []
      })
    case OBTENER_BUSQUEDA:
      return({
        ...state,
        busqueda:action.payload
      })
    default:
      return state;
  }
};
