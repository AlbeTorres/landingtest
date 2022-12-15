import React from "react";
import _ from "lodash";


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
    productos:Producto[];
    pagesize:number;
    currentpage:number;
    onChangePage:(page:number)=>void

}

const Pagination = ({productos,pagesize,currentpage,onChangePage}:props) => {

        const pagecount= productos.length/pagesize

        if(Math.ceil(pagecount)===1){return null}

        const pages= _.range(1, pagecount+1)




  return (
    <div className="btn-group">
        {pages.map(page=><button key={page} onClick={()=>onChangePage(page)} className={page===currentpage ? ' btn btn-active ': 'btn'}>{page}</button>)}
    </div>
  );
};

export default Pagination;
