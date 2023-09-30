
import "../css/Products.css";
import Product from "./product";
import Filters from "./Filters";
import { useEffect } from "react";


export default function Products({updateCart,cart,handleFilter,productsarray,currentfilter,handleAddToCart}){


 

  const productsjsx = productsarray.map((product) => {
    return(
     <Product handleAddToCart={handleAddToCart} key={product.id} product={product} />
    );
  });
  return(
    <>
      <Filters currentfilter={currentfilter} handleFilter={handleFilter} />
      <div className="products-grid">
        {productsjsx}
      </div>
    </>

  );
};
