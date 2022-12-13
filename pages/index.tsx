import Head from 'next/head'
import ListaProductos from '../components/ListaProductos'
import Modal from '../components/Modal'
import NavBar from '../components/NavBar'
import PageLayout from '../components/PageLayout'
import axios,{AxiosResponse}  from 'axios'


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

export default function Home({productos}:props) {
  return (
    <div>
      <PageLayout tittle='TestShop'>
        <NavBar/>
        <ListaProductos productos={productos}/>
        <Modal/>
      </PageLayout>

      
    </div>
  )
}

export async function getServerSideProps() {

  const clienteAxios = axios.create({
      baseURL: 'http://sibucan-shop-staging.herokuapp.com'
  });

  const response = await clienteAxios.get('/products/');
  const productos = response.data.results

  return{
      props:{

          productos
      } 
  }
  
} 
