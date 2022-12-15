import ListaProductos from '../components/ListaProductos'
import Modal from '../components/Modal'
import NavBar from '../components/NavBar'
import PageLayout from '../components/PageLayout'
import axios  from 'axios'


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
  productos:Producto[],
  secciones:Section[],
  departamentos:Deparmet[]
}

export default function Home({productos}:props) {
  return (
    <div>
      <PageLayout tittle='TestShop'>
        <NavBar productos={productos}/>
        <ListaProductos productos={productos}/>
        <Modal productos={productos}  />
      </PageLayout>

      
    </div>
  )
}

export async function getStaticProps() {
  let page=2
  const clienteAxios = axios.create({
      baseURL: 'http://sibucan-shop-staging.herokuapp.com'
  });

  let response = await clienteAxios.get('/products/');
  let productos = response.data.results
  
  while(response.data.next!==null){
    response= await clienteAxios.get(`/products/?page=${page}`);
    productos=[...productos, ...response.data.results]
    page=page+1
  }


  
  return{
      props:{
          productos
      } 
  }
  
} 
