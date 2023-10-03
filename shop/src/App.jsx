import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Slider from "./components/slider";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import About from "./components/About";
import Categories from "./components/categories";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Signin from "./components/Signin-page";
import Login from "./components/login";
import { products, productstoys, productsclothes, productselectronics, productsmiscellaneous,productsfurn } from "./data/productsdata";
import {Routes,Route,useNavigate} from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductPage from "./components/product-page";
import Admin from "./components/Admin-page";
import Favourite from "./components/Favourites-page";
import Orders from "./components/Orders-page";
import TermsPage from "./components/Terms-page";

/*EVERYTHING MUST BE SPELLED RIGHT AND NAMES AND TITLES SHOULD BE SAME AROUND FILES*/


/*DOCUMENTATION FOR ADDING CATEGORY --->
  scroll down to function handleFilter (line 61 for now)
  delete the comment there and copy: else if(type === 'the same name you put in the Filters.jsx file'){
    setproductsarray(the name of the List You added to productsdata.js)
    setcurrentfilter('same name')
  };
  now BROWSE TO src/data/categorydata.js   for the rest of the INSTRUCTIONS
*/

function App(){

  const savedfavproducts = JSON.parse(localStorage.getItem('favproducts'));
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  const [cart,setCart] = useState(savedCart !== null ? savedCart : []);
  const [productsarray,setproductsarray] = useState(products);
  const [cartquantity,setcartquantity] = useState(0);
  const [currentfilter,setcurrentfilter] = useState('all');
  const [searchterm,setsearchterm] = useState('');
  const [favproducts,setfavproducts] =useState(savedfavproducts !== null ? savedfavproducts : []);

  useEffect(() => {
    localStorage.setItem('favproducts',JSON.stringify(favproducts));
  },[favproducts]);

  
 function handlefavproducts(newfavproducts){
  setfavproducts(newfavproducts)
 };


 function DeleteFavItem(id){
  const newfavproducts = favproducts.filter((favproduct) => favproduct.id !== id );
  setfavproducts(newfavproducts);
 };



  function handlesearchtxtchange(event){
    const {value} = event.target
    setsearchterm(value);
  };
  const [admin,setadmin] = useState(false);

  const adminacc ={
    username: "admin321",
    password: "admin321"
  };
  function handleadmin(){
    setadmin((prevstate) => !prevstate);
  };
  


  useEffect(() => {
    let totalquantity = 0;
    if(cart.length === 0 ){
      setcartquantity(0);
    }else{
      cart.forEach((item) => {
        totalquantity += item.quantity
      });
      setcartquantity(totalquantity);
    };
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]);

  function handleFilter(type){
    if(type === 'all'){
      setproductsarray(products);
      setcurrentfilter('all');
    }else if(type === 'toys'){
      setproductsarray(productstoys);
      setcurrentfilter('toys');
    }else if(type === 'clothes'){
      setproductsarray(productsclothes);
      setcurrentfilter('clothes');
    }else if(type === 'miss'){
      setproductsarray(productsmiscellaneous);
      setcurrentfilter('miss');
    }else if(type === 'electronics'){
      setproductsarray(productselectronics);
      setcurrentfilter('electronics');
    }else if (type ==='furn'){
      setproductsarray(productsfurn)
      setcurrentfilter('furn')
    }/*delete this and write here*/;
    
  };

  const navigate = useNavigate();

  function updateCart(newCart){
    setCart(newCart);
  };

  function handleAddToCart(btnid, quantity, color, size,handleaddtxt,handleerrortxt,product) {
    if(color !== 'not selected' && size !== 'not selected' && product.stock !== 0 && product.stock >= quantity){
      handleaddtxt();
      const updatedCart = cart.map((item) => {
        if (item.id === btnid && item.color === color && item.size === size) {
          return {
            ...item,
            quantity: item.quantity + parseInt(quantity)
          };
        } else {
          return item;
        }
      });
  
      if (!updatedCart.some(item => item.id === btnid && item.color === color && item.size === size)) {
        updatedCart.push({
          id: btnid,
          quantity: parseInt(quantity),
          color: color,
          size: size
        });
      }
        
      updateCart(updatedCart);
      navigate('/cart');
      window.scrollTo(0,0);
    }else if((color === 'not selected' || size === 'not selected') && product.stock !== 0){
      handleerrortxt();
    }else if(product.stock === 0) {
      handleerrortxt();
    }else if(product.stock < quantity){
      handleerrortxt();
    };
      
   
  }


  return(
    <>
      <Announcement />
      <Navbar handleadmin={handleadmin} admin={admin} handlesearchtxtchange={handlesearchtxtchange} cartquantity={cartquantity}/>
      <Routes>
        <Route path='/' element={ <>
          <Slider />
          <Categories handleFilter={handleFilter} />
          <Footer />
        </>} />
        <Route path="/about" element={<><About /> <Footer /></>} />
        <Route path="/cart" element={<Cart updateCart={updateCart} cartquantity={cartquantity} cart={cart} productsarray={products} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login adminacc={adminacc} handleadmin={handleadmin} />} />
        <Route path="/products" element={<Products  currentfilter={currentfilter} productsarray={productsarray} handleFilter={handleFilter} updateCart={updateCart} cart={cart} handleAddToCart={handleAddToCart} />  } />
        <Route path="/products/:id" element={<ProductPage productsarray={productsarray} handleAddToCart={handleAddToCart}
         favproducts={favproducts} handlefavproducts={handlefavproducts}/>} />
        <Route path='/favourites' element={<Favourite favproducts={favproducts} DeleteFavItem={DeleteFavItem} />}></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path='/orders' element={<Orders />}></Route>
        <Route path="/terms" element={<TermsPage />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

      
    </>


  );
};




export default App