import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <section className="hero min-h-screen bg-hero-pattern dark:bg-hero-pattern-dark bg-fixed mt-36 md:mt-0 bg-base-200">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="flex items-center  md:items-start   flex-col">
          <h1 className="text-5xl font-bold text-center md:text-start">
            Ferretería Hardware Express
          </h1>
          <p className="py-6 text-center md:text-start">
            ¡Bienvenido a nuestra tienda de ferretería en línea! Ofrecemos una
            amplia selección de productos para mejorar y modernizar su hogar.
          </p>
          <a href="#produ" className="btn btn-primary">
            Comprar
          </a>
        </div>
        <Image
          alt=""
          width={600}
          height={600}
          src="/pngegg.png"
          className="rounded-lg drop-shadow-2xl mt-3"
        />
      </div>
    </section>
  );
};

export default Header;
