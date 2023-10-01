import { useParams } from "react-router-dom";
import '../css/product-page.css';
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
export default function ProductPage({productsarray,handleAddToCart,favproducts,handlefavproducts}){
  const {id} = useParams();
  const [isfav,setisfav] = useState(false);


  
  let product = {}
  //let itemincart = {}
  productsarray.forEach((arrayproduct) => {
    if(arrayproduct.id === id){
      product = arrayproduct;
    };
  });
  const [currentsize,setcurrentsize] = useState(product.sizes === undefined ? 'unavailble' : product.sizes[1]);
  const [currentcolor,setcurrentcolor] = useState(product.colors === undefined ? 'unavailble' : product.defaulcolor);
  function handleimg(){
    if(currentcolor === 'unavailble'){
      return '';
    }else if (currentcolor === 'not selected'){
      return product.defaulcolor;
    }else{
      return currentcolor;
    };
  };
 /* cart.forEach((item) => {
    if(id === item.id){
      itemincart = item;
    };
  })*/

  function addtofav(){
    const isProductInFavorites = favproducts.some(favProduct => favProduct.id === product.id);
  
    if (isProductInFavorites) {
      // If the product is already in favorites, remove it
      const updatedFavProducts = favproducts.filter(favProduct => favProduct.id !== product.id);
      handlefavproducts(updatedFavProducts);
      setisfav(false)
    } else {
      // If the product is not in favorites, add it
      const newFavProducts = [...favproducts, product];
      handlefavproducts(newFavProducts);
      setisfav(true)
    }
  };
  useEffect(() => {
    const isProductInFavorites = favproducts.some(favProduct => favProduct.id === product.id);
    setisfav(isProductInFavorites);
  }, [favproducts]);






  return(
    <div className='single-product-page'>
      
      <div className='single-product-page-flex'>
        <div className='single-product-images-container'>
          <div className='single-product-img-container'>
            <img className='single-product-img' src={`/productimgs/${handleimg()}${handleimg() !== '' ? '-' : ''}${product.image}`}></img>
          </div>
          <div className='img-selectors'>
            {product.colors !== undefined && product.colors.map((color) => {
              return color !== 'Choose Color' && 
              <div key={`${color}-${product.id}`} onClick={() => {setcurrentcolor(color)}} className={currentcolor === color ? 'img-selector color-selected' : 'img-selector'}>
                <img className='single-product-img-selector' src={`/productimgs/${color}-${product.image}`}></img>
              </div>
            }) }       
          </div>
      
          
        </div>
        <div className="single-product-txt-container">
          <h1 className='single-product-name'>{product.name}</h1>
          <div className='add-fav'>
            {isfav ? <i onClick={addtofav}  className="fa-solid fa-heart fav-ico filled"></i> :  <i onClick={addtofav}  className="fa-regular fa-heart fav-ico"></i>}
           
      
            <span>   {isfav ? 'Added!' : 'Add To Favourite'}</span>
          </div>
            <h2>Description</h2>
            <ul className='description-list'>
              <li>{product.shippingDate}</li>
              <li>{`Made in ${product.country}`}</li>
            </ul>
            <p className='single-product-stock'>{product.stock > 0 ? 'On Stock' : 'Out of Stock'} <b>{product.stock > 0 ?`: ${product.stock}` : ''}</b></p>
            {product.sizes !== undefined &&  <div className="sizes-container">
              <h3>Availble Sizes:</h3>
              <div className='sizes-flex'>              
                {product.sizes.map((size) => {
                  return size !== "Choose size" ? <button className={currentsize === size ? 'size-btn selected' : 'size-btn'} onClick={() => {setcurrentsize(size)}} key={`${size}-${product.id}`}>{size}</button>: <></>
                })}
              </div>            
            </div>}
            <span className='price'>{`$${(product.priceinCents / 100).toFixed(2)}`}</span>
            <div className='btn-container'>
              <button className='buy btn'>Buy Now</button>
                <button className='add btn'
                onClick={() => {handleAddToCart(product.id,1,currentcolor,currentsize,() => console.log('hi'),() => console.log('hi'),product)}}
              
                >Add To Cart</button>
              
            </div>
            
           
          
        </div>
      </div>
    </div>

  );
};