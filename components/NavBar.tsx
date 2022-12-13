import React,{useEffect, useState} from "react";
import Container from "./Container";
import {FaShoppingCart} from 'react-icons/fa'
import Busqueda from "./Busqueda";
import NavCarrito from "./NavCarrito";

const NavBar = () => {

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
            <a className="normal-case text-xl ml-1 ">Test</a>
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
            <NavCarrito />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
