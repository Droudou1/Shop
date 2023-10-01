import CartItem from "./cartItem";
import "../css/cart.css";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';


export default function Cart({cart,productsarray,cartquantity,updateCart}){
  const [isreseting,setisreseting] = useState(false);
  const [showmore,setshowmore] = useState(false);
  const [shippement,setshippement] = useState('free');
  const [delivery,setdelivery] = useState('free');
  const [taxes,settaxes] = useState(2.22);
  const [checkout,setcheckout] = useState(false);
  const [checkoutinfo,setcheckoutinfo] = useState({
    email: '',
    firstname:'',
    lastname:'',
    country: '',
    street:'',
    zipcode:'',
    payement:''
  });
  
  function reset(arg){
    setisreseting(false);
    updateCart(arg);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setcheckout(false);
        setisreseting(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleShadowClick = (event) => {
      if (event.target.classList.contains('Cart-page')) {
        setcheckout(false);
        setisreseting(false);
      }
    };

    document.addEventListener('click', handleShadowClick);

    return () => {
      document.removeEventListener('click', handleShadowClick);
    };
  }, []);
 

  function handleonChange(event){
    const {name,value} = event.target;
    setcheckoutinfo((previnfo) => {
      return(
        {...previnfo,[name]: value}
      );
    });
  };
  
  useEffect(() => {
    if(shippement === 'free'){
      setdelivery('free');
    }else if(shippement === 'standard') {
      setdelivery(4.99);
    }else if(shippement === 'fast') {
      setdelivery(6.99);
    };
  },[shippement]);

  function handleradiochange(event){
    setshippement(event.target.value);
  };

  function handledelete(id,color,size){
    let updatedCart = [...cart]
    updatedCart.forEach((item,index) => {
      if(item.id === id && item.color === color && item.size === size){
        updatedCart.splice(index,1);
      };
    });
    updateCart(updatedCart);
  };
  function subtotal(){
    let subtotal = 0;
    cart.forEach((item) => {
      productsarray.forEach((product) => {
        if(item.id === product.id){
          subtotal += (product.priceinCents / 100) * item.quantity;
        };
      });
    });
    return subtotal;
  };
  function editvalues(id, type, color, size, editedcolor, editedsize, handleedit) {
    let newcart;
  
    if (type === 'color') {
      handleedit('color', 'cancel');
      if (color !== editedcolor) {
        newcart = cart.map((item) => {
          if (item.id === id && item.color === color && item.size === size) {
            const editeditem = item;
            const existingItem = cart.find(
              (item) => item.id === editeditem.id && item.color === editedcolor && item.size === size
            );
  
            if (existingItem) {
              existingItem.quantity += editeditem.quantity;
              return null; // Return null to remove the item
            } else {
              return {
                ...item,
                color: editedcolor,
              };
            }
          } else {
            return item;
          }
        });
      }
    } else {
      handleedit('size', 'cancel');
      if (size !== editedsize) {
        newcart = cart.map((item) => {
          if (item.id === id && item.color === color && item.size === size) {
            const existingItem = cart.find(
              (item) => item.id === id && item.color === color && item.size === editedsize
            );
  
            if (existingItem) {
              existingItem.quantity += item.quantity;
              return null; // Return null to remove the item
            } else {
              return {
                ...item,
                size: editedsize,
              };
            }
          } else {
            return item;
          }
        });
      }
    }
  
    if (newcart) {
      updateCart(newcart.filter(Boolean)); // Remove any potential null values
    }
  }
  function editQuantity(id,type,color,size) {
    let editedcart;
    if(type === 'add'){
       editedcart = cart.map((item) => {
        if(item.id === id && item.color === color && item.size === size) {
          return(
            {
              ...item,
              quantity: item.quantity + 1
            }
          );
        }else{
          return item
        };
      });
    }else{
      editedcart = cart.map((item) => {
        if(item.id === id && item.color === color && item.size === size) {
          if(item.quantity > 1){
            return(
              {
                ...item,
                quantity: item.quantity - 1
              }
            );
          }else{
            return null;
          };
         
        }else{
          return item
        };
      });
      editedcart = editedcart.filter(Boolean);   //remove every null in the list
    };
    updateCart(editedcart);
  };


  const shippementtext= () => {
    if(shippement === 'free'){
      return 'Free Shipping: Product will arive in 1-2 weeks'
    }else if(shippement === 'standard'){
      return 'Standard Shipping: Product will arrive in 1 week for $4.99'
    }else if(shippement === 'fast'){
      return 'Fast Shipping: Product will arrive in 2-3 days max for $6.99'
    };
  };

  useEffect(() => {
    if (checkout) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, [checkout]);

  const tofiltercart = cart.map((item,index) => {
    if(index < 2) {
      return item;
    };
  });
  const showncart = tofiltercart.filter(item => item !== undefined);

  const itemsfunc = () => {
    let itemsNames;
    if(showmore === false){
       itemsNames = showncart.map((item) => {
        return(
          productsarray.map((product) => {
            if(item.id === product.id){
              return <span className="name-span" key={item.id}>{item.color !== 'unavailble' && item.color} {product.name} ({item.quantity}) // </span>
            };
              
          })
        );
        
      })
    }else{
      itemsNames = cart.map((item) => {
        return(
          productsarray.map((product) => {
            if(item.id === product.id){
              return <span className="name-span" key={item.id}>{item.color !== 'unavailble' && item.color} {product.name} ({item.quantity}) //</span>
            }
          })
        )
      });
    };
   
    return itemsNames.filter(Boolean)
    
  };
  const classname = () => {
    if(checkout || isreseting){
      return 'cart-content hide'
    }else{
      return 'cart-content'
    };
  }



  const discount = subtotal() + taxes >= 100 ? ((subtotal() + taxes) * 10) / 100 : 0 
  return(
    <div className="Cart-page">
      {isreseting && <div className='popup-container'>
        <h3>Are You Sure You Want to Reset the Cart?</h3>
        <button onClick={() => {reset([])}} className='popup-btn yes'>Yes</button>
        <button onClick={() => {setisreseting(false)}} className='popup-btn no'>NO</button>
      </div>}
      {cart.length === 0 ? <div className="empty-cart-msj-container">
        <i className="fa-solid fa-cart-shopping fa-bounce"></i>
        <h1>Seems Like Your Cart is Empty</h1>
        <p>You can Find everything you want in our shop!!</p>
        <Link to='/products'>
          <button>SHOP NOW</button>
        </Link>

      </div> :
      <div className={classname()}>
        <h1 className="Cartcount-title">My Cart ({cartquantity} items)</h1>
        {cart.map((item) => {
          return(
            productsarray.map((product) => {
              if(item.id === product.id){
                return(
                  <div key={item.id} className="cart-items-container">
                    <CartItem editvalues={editvalues} editQuantity={editQuantity} handledelete={handledelete}  product={product} item={item} />
                  </div>

                );
              };
            })
          );
         
          
        })}
        <button onClick={() => {setisreseting(true)}} className="reset-cart-btn">Reset Cart</button>
        <Link to='/products'>
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>       
        <div className="checkout-container">
          <div className="total-infos">
            <div className='cont'>
              <span className="label">Subtotal:</span>
              <span>${subtotal().toFixed(2)}</span>
            </div>
            <div className='cont'>
              <span className="label">Quantity: </span>
              <span>{cartquantity} item{cartquantity > 1 ? 's' : ''}</span>
            </div>
            <div className='cont'>
              <span className="label">Delivery: </span>
              <span>{delivery === 'free' ? 'free' : `$${delivery}`}</span>
            </div>
            <div className='cont'>
              <span className="label">Taxes: </span>
              <span>${taxes}</span>
            </div>
              <div className='cont'>
                <span className="label">Discount:</span>
                <span>${discount.toFixed(2)}</span>
              </div>       
            <div className='cont'>
              <span className="label">Total:</span>
              <span>${delivery === 'free' ? ((subtotal() + taxes)-discount).toFixed(2) : ((subtotal() + delivery + taxes)-discount).toFixed(2)}</span>
            </div>
          </div>
          <label><input checked={shippement === 'free'} onChange={handleradiochange} type="radio" name="shippingoptions" value='free'></input>Free Shipping</label>
          <label><input checked={shippement === 'standard'} onChange={handleradiochange}  type="radio" name="shippingoptions" value='standard'></input>$4.99</label>
          <label><input checked={shippement === 'fast'} onChange={handleradiochange}  type="radio" name="shippingoptions" value='fast'></input>$6.99</label>
          <p className="shippement-info-txt">{shippementtext()}</p>
          <p className='coupon-reminder'>Have a coupon code? Enter it at checkout for additional savings!</p>
          <button onClick={() => {setcheckout(true)}} className="move-to-checkout-btn">MOVE TO CHECKOUT</button>
        </div>

      </div>
      }
      {checkout && 
       <div className="checkout-page-container">
        <span onClick={() => {setcheckout(false)}} className="exit-btn">X</span>
        <h1 className="checkout-title">Checkout</h1>
        <div className='checkout-inputs-container'>
          <div className="input-container">
            <input onChange={handleonChange} value={checkoutinfo.email} name='email' className="input"></input>
            <span className={checkoutinfo.email ? 'placeholder hidden' : 'placeholder'}>Email</span>
          </div>      
          <div className="checkout-inputs-grid">
          <div className="input-container">
            <input onChange={handleonChange} value={checkoutinfo.firstname} name='firstname' className="input"></input>
            <span className={checkoutinfo.firstname ? 'placeholder hidden' : 'placeholder'}>First Name</span>
          </div>
          <div className="input-container">
            <input onChange={handleonChange} value={checkoutinfo.lastname} name='lastname' className="input" ></input>
            <span className={checkoutinfo.lastname ? 'placeholder hidden' : 'placeholder'}>Last Name</span>
          </div>
          <div className="input-container">   
            <input onChange={handleonChange} value={checkoutinfo.country} name='country' className="input"></input>
            <span className={checkoutinfo.country ? 'placeholder hidden' : 'placeholder'}>Country</span>
          </div>
          <div className="input-container">
            <input onChange={handleonChange} value={checkoutinfo.street} name='street' className="input" ></input>
            <span className={checkoutinfo.street ? 'placeholder hidden' : 'placeholder'}>Street</span>
          </div>
          <div className="input-container">
            <input onChange={handleonChange} value={checkoutinfo.zipcode} name='zipcode' className="input" ></input>
            <span className={checkoutinfo.zipcode ? 'placeholder hidden' : 'placeholder'}>Zip-Code</span>
          </div>        
        </div>  
        </div>
        <div className="checkout-payement-methods">
          <label className='method-label'>
            <img className='method-img' src='/icons/paypal.png'></img>
            <input onChange={handleonChange} value='paypal' checked={checkoutinfo.payement === 'paypal'} name="payement" type="radio"></input></label>
          <label className='method-label'>
          <img className='method-img' src='/icons/visa.png'></img>
            <input onChange={handleonChange}  value='visa' checked={checkoutinfo.payement === 'visa'} name="payement"  type="radio"></input></label>
          <label className='method-label'>
          <img className='method-img' src='/icons/discover.png'></img>
            <input onChange={handleonChange}  value='discover' checked={checkoutinfo.payement === 'discover'} name="payement"  type="radio"></input></label>
        </div>
        <div className="order-summary">
          <p>You're Purchasing <b>{cartquantity}</b> item{cartquantity > 1 ? 's' : ''} for a total price of <b>${delivery === 'free' ? ((subtotal() + taxes)-discount).toFixed(2) : ((subtotal() + delivery + taxes)-discount).toFixed(2)}</b></p>
          <h2>Items:</h2>
          <div className="names-container">
            <div className="items-name-container">({itemsfunc()}{showmore ? '' : cart.length > 2 && '....'})</div>
            {cart.length >2 &&
              <button onClick={() => {setshowmore((prevshowmore) => !prevshowmore)}} className='show-more'>{showmore ? 'show less' : 'show more'}</button>
            }
            
          </div>
        </div>
        <button className="coupon-btn">Apply Coupon</button>
        <button className="place-order-btn">Place Order</button>
      </div> }
     
    </div>

  );
};