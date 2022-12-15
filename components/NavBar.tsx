import React,{useEffect, useState} from "react";
import Container from "./Container";
import {FaShoppingCart, FaAd} from 'react-icons/fa'
import Busqueda from "./Busqueda";
import NavCarrito from "./NavCarrito";
import Navfilter from "./Navfilter";



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


const NavBar = ({productos}:props) => {

    const [scrolled, setScrolled]=useState(false)

    useEffect(()=>{

        const onScroll=()=>{
          window.scrollY>50 ? setScrolled(true): setScrolled(false)
        }
  
  
        window.addEventListener('scroll', onScroll);
  
        return()=>window.removeEventListener('scroll', onScroll)
    },[])



  return (
    <div className=" bg-base-100 fixed top-0  z-50   w-full md:py-4 min-h-6  ">
      <Container>
        <div className="flex justify-between items-center my-1">
          <div className="flex items-center">
            <FaShoppingCart className="text-xl" />
            <a className="normal-case text-xl ml-1 ">TestShop</a>
          </div>
          <div className="flex items-center gap-1 ">
            {!scrolled && (
              <div className="md:hidden">
                <Busqueda />
              </div>
            )}
            <div className="hidden md:block ">
              <Busqueda />
            </div>
           <Navfilter/>
            <NavCarrito productos={productos} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
