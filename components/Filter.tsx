import React,{useState, useEffect, useContext} from "react";
import productoContext from "../context/productoContext";
import axios from "axios";

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
  
  
  interface Deparmet{
          id: number,
          en_name: string,
          es_name: string,
          icon:string|null,
          cover: string|null,
          sections:Section[]
  }
  
  
  type props={
    secciones:Section[],
    departamentos:Deparmet[]
  }

  type state={
    dep?:Deparmet|null,
    sec?:Section|null,
    min:number,
    max:number
  }

const Filter = () => {

  const context = useContext(productoContext);

    let filte:state={dep:null,sec:null,min:0,max:0}
    let depaux:Deparmet={id:0,es_name:'empty', sections:[], en_name:'', icon:'', cover:''}

    const [filter,setFilter]=useState(filte)
    const [departamentos,setDepartamentos]=useState([depaux])

    useEffect(()=>{
        const clienteAxios = axios.create({
            baseURL: 'http://sibucan-shop-staging.herokuapp.com'
        });

        const apiCalls=async()=>{

            let departaments= await clienteAxios.get('/departments/')
            setDepartamentos(departaments.data)
            
        }

        apiCalls()
       
      
    },[])


    const getDeparmet=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const depa= departamentos.find(dep=>dep.id===parseInt(e.target.value ) )
        setFilter({
            ...filter,
            dep:depa,
            sec:depa?.sections[0],
        })

    }
    const getSection=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const sect= filter?.dep?.sections.find(section=>section.id===parseInt(e.target.value ) )
        setFilter({
            ...filter,
            sec:sect,
        })
        console.log(sect?.es_name)
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFilter({

        
            ...filter,
            [e.target.name]:e.target.value,
        }
        )
    }


    const filtrar=()=>{
        context?.establecerFiltro(filter);
    }
    const filtrarBack=()=>{
        context?.establecerFiltro({dep:null,sec:null,min:0,max:0});
        setFilter(filte)
    }

  return (
    <div className="modal-box ">
        <div className="flex flex-col items-center justify-center">
        <h4 className="dark:text-white text-lg font-semibold ">Filtrar</h4>

      <select onChange={getDeparmet} className="select select-bordered w-full max-w-xs my-2">
        <option disabled selected >
          Departamento
        </option>
        {
            departamentos.map(dep=><option  value={dep.id} key={dep.id}>{dep.es_name}</option>)
        }
        
        
      </select>
      <select onChange={getSection} disabled={filter?.dep?.sections.length===0 ? true:false} className="select select-bordered w-full max-w-xs"  >
        <option disabled >
          Sección
        </option>
        {
            filter.dep?.sections.map(sec=><option value={sec.id}  key={sec.id}>{sec.es_name}</option>)
        }
      </select>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Precio mínimo</span>
        </label>
          <input
            type="text"
            placeholder="0.01"
            className="input input-bordered"
            name="min"
            value={filter.min}
            onChange={handleChange}
          />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Precio máximo</span>
        </label>
        
          <input
            type="text"
            placeholder="0.01"
            className="input input-bordered"
            name="max"
            value={filter.max}
            onChange={handleChange}
          />
        
      </div>

      <div className='flex  items-center mt-5 w-full justify-center'>
       <label onClick={filtrar} htmlFor="my-modal-6"  className='btn btn-primary mr-3'>Filtrar</label>
       <label onClick={filtrarBack} htmlFor="my-modal-6" className='btn '>Volver</label>
     </div>
        </div>
    </div>
  );
};

export default Filter;
