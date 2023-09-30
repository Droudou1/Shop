import { useState } from "react";
import { Link } from "react-router-dom";




export default function Product({product,handleAddToCart}){
  const [isloading,setisloading] = useState(true);
  const [txtshown,settextshown] = useState(false);
  const [errormsg,seterrormsg] = useState(false);
  const [selectedvalues,setselectedvalues] = useState({
    quantity:1,
    color: product.colors === undefined ? 'unavailble' : 'not selected',    
    size: product.sizes === undefined ? 'unavailble' : 'not selected'
  });


  function handleloading(){
      setisloading(false);
    
  };
  function handleimg(){
    if(selectedvalues.color === 'unavailble'){
      return ''
    }
    if(selectedvalues.color === 'not selected'){
      return product.defaulcolor
    }else{
      return selectedvalues.color
    };
  };

  function handlechange(event){
    const {name,value} = event.target;
    setselectedvalues(prevstate => {
      return(
        {
          ...prevstate,
          [name]: value
        }
      );
    })
  };

  function handleaddtxt(){
    settextshown(true);
    setTimeout(() => {
      settextshown(false);
    },2000);
  };

  function handleerrortxt(){
    seterrormsg(true);
    setTimeout(() => {
      seterrormsg(false);
    },2000)
  };
  

  const errortxt = () => {
    if(selectedvalues.color === 'not selected' && selectedvalues.size === 'not selected' && product.stock !== 0 ){
      return 'Select Size And Color';
    }else if(selectedvalues.color === 'not selected' && selectedvalues.size !== 'not selected' && product.stock !== 0){
      return 'Select Color';
    }else if(selectedvalues.color !== 'not selected' && selectedvalues.size === 'not selected' && product.stock !== 0){
      return 'Select Size'
    }else if(product.stock === 0 ){
      return 'Out Of Stock'
    }else if(product.stock < selectedvalues.quantity){
      return 'Not enough items in Stock'
    };
  };
  const productname = selectedvalues.color === 'unavailble' ? product.name : selectedvalues.color === 'not selected' ?
   `${product.defaulcolor} ${product.name}` : `${selectedvalues.color} ${product.name}`
  return(
    <div className="product-container">
      <Link to={`/products/${product.id}`}>
        <div className="product-img-container">
          <span className="stock">{product.stock !== 0 ? `${product.stock} In Stock` : `Out Of Stock`}</span>
          {isloading &&  <i className="fa-solid fa-spinner fa-spin spinner"></i>}
        
          <img onLoad={handleloading} className={isloading ? 'product-img' : 'product-img img-loaded'} src={`/productimgs/${handleimg()}${handleimg() !== '' ? '-' : ''}${product.image}`}></img>

        </div>
      </Link>
      
      <div className="product-info-container">
        <h3>{productname}</h3>
        <div className="selectors-container">
          {product.permitedquantity !== undefined &&
           <select onChange={handlechange} name="quantity" value={selectedvalues.quantity} className="quantity-selector">
              {product.permitedquantity.map((q) => {
               return(
                    <option key={q} value={q}>{q}</option>
                 
                );
              })}
            </select>}
          
          {product.colors !== undefined && 
            <select onChange={handlechange} name="color" value={selectedvalues.color} className="color-selector">
              {product.colors.map((color) => {
                return(
                  <option key={color} value={color === 'Choose Color' ? 'not selected' : color}>{color}</option>
                );
              })}
            </select> } 
          {product.sizes !== undefined && 
            <select onChange={handlechange} name="size" value={selectedvalues.size} className="size-selector">
              {product.sizes.map((size) => {
                return(
                  <option key={size} value={size === 'Choose size' ? 'not selected' : size}>{size}</option>
                );
              })}
              
            </select>}
         
        </div>
        <div className="price-container">
          <span className="price">{`$${((product.priceinCents / 100)*selectedvalues.quantity).toFixed(2)}`}</span>
        </div>
        <button onClick={() => {handleAddToCart(product.id,selectedvalues.quantity,selectedvalues.color,selectedvalues.size,handleaddtxt,handleerrortxt,product)}} className="add-to-cart-btn">Add To Cart</button>
        {txtshown && <div className="added-txt-container">
          <span className="added-txt">Added</span>
        </div>}
        {errormsg && <div className="error-txt-container">
            <span className="error-txt">{errortxt()}</span>
          </div>}
            
        
        
      </div>
    </div>
  );
}; 