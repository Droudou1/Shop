import { useEffect, useState } from "react";


export default function CartItem({item,product,handledelete,editQuantity,editvalues}){
  const [edit,setedit] = useState({
    color:false,
    size:false,
  });
  const [editedvalues,seteditedvalues] = useState({
    color: item.color !== 'unavailble' ? item.color : '',
    size: item.size !== 'unavailble' ? item.size : ''
  });

  useEffect(() => {
    function handleEscape(e){
      if (e.key === 'Escape'){
        setedit({color:false,size:false});
      };
    };
    document.addEventListener('keydown',handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  },[]);

  function handleedit(type,field){
    if(field === 'toggle'){
      setedit((prevedit)=> {
        return({...prevedit,[type]: true});
      })  
    }else{
      setedit((prevedit)=> {
        return({...prevedit,[type]: false});
      })  
    };
    
  };
  function handlechange(event){
    const {name,value} = event.target
    seteditedvalues((prevvalues) => {
      return(
        {...prevvalues,[name]: value}
      );
    })
  };

  function handleimgs(){
    if(item.color === 'unavailble'){
      return ''
    }else{
      return item.color
    };
  };
  const productname = item.color === 'unavailble' ? product.name : `${item.color} ${product.name} `
  return(
    <div className="cart-item-container">
      <div className="cart-item-img-container">
        <img className="cart-item-img" src={`/productimgs/${handleimgs()}${handleimgs() !== '' ? '-' : ''}${product.image}`}></img>
      </div>
      <div className="cart-item-info-container">
        <div className="cart-item-txt-info-container">
          <h1 className="cart-item-name">{productname}</h1>
          <span className="shipping-date">{product.shippingDate}</span>
          <span className="cart-item-quantity">
            <div className="item-quantity-container">
              <button onClick={() => {editQuantity(item.id,'remove',item.color,item.size)}} className="remove-btn">-</button>
              quantity: {item.quantity} 
              <button onClick={() => {editQuantity(item.id,'add',item.color,item.size)}} className="add-btn">+</button>
            </div>

            
            </span>
          {item.color !== 'unavailble' && 
            edit.color !== true ? 
            <div>
            <span className="cart-item-color">Color: {item.color}</span>
            <button className="edit-btn" onClick={() => {handleedit('color','toggle')}}>Edit Color</button>
          </div>
          :<div>
              {product.colors !== undefined && 
              <div>
              <select className="selector" onChange={handlechange} value={editedvalues.color} name="color">
              {product.colors.slice(1).map((color) => {
                return(
                  <option key={color} value={color === 'Choose Color' ? 'not selected' : color}>{color}</option>
                );
              })}
              </select>
              <button className='cancel-btn' onClick={() => {handleedit('color','cancel')}}>Cancel</button>
              <button className='confirm-change-btn' onClick={() => {editvalues(item.id,'color',item.color,item.size,editedvalues.color,editedvalues.size,handleedit)}}>Confirm</button></div>}
              
              
            </div>}     
          {item.size !== 'unavailble' && 
            edit.size !== true ?
            <div>
            <span className="cart-item-size">Size: {item.size}</span>
            <button className="edit-btn" onClick={() => {handleedit('size','toggle')}}>Edit Size</button>
          </div> 
          :<div>
          {product.sizes !== undefined && 
          <div>
          <select className="selector" onChange={handlechange} name="size" value={editedvalues.size}>
          {product.sizes.slice(1).map((size) => {
                return(
                  <option key={size} value={size === 'Choose size' ? 'not selected' : size}>{size}</option>
                );
              })}
          </select><button className='cancel-btn' onClick={() => {handleedit('size','cancel')}}>Cancel</button>
          <button className='confirm-change-btn'  onClick={() => {editvalues(item.id,'size',item.color,item.size,editedvalues.color,editedvalues.size,handleedit)}}>Confirm</button></div>}
          
          
        </div>}    
          <span className="cart-item-price">{`$${((product.priceinCents / 100) * item.quantity).toFixed(2)}`}</span>
        </div>
        <div className="cart-item-btn-info">
          <button onClick={() => {handledelete(item.id,item.color,item.size)}} className="delete-btn">Delete</button>
        </div>
 
        
      </div>
    </div>
  );
};