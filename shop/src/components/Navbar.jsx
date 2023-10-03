import '../css/Navbar.css';
import {NavLink} from "react-router-dom";
function Navbar(props){
  return(
    <nav>
      <div className="nav-wrapper">
        <div className="left-section">
          <div className="search-container">
            <input onChange={props.handlesearchtxtchange} type="text" placeholder="search"></input>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          <NavLink to='/orders'>
            <button className='orders-btn'>My Orders</button> 
          </NavLink>
   
          <NavLink to='/favourites'>
            <button className='orders-btn fav' >Favourites</button>
          </NavLink>
        </div>
        <div className="middle-section">
          <div>
            <span>Eljay's Shop</span>
          </div>         
        </div>
        <div className="right-section">
          <NavLink to="/cart" >
            <div className="cart-container">
              <span className='cart-count'>{props.cartquantity}</span>
              <i className='fa-solid fa-cart-shopping'></i>
            </div>
          </NavLink>
         
          <ul>
            <NavLink className="home nav-lnk" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink end className="products nav-lnk" to="products">
              <li >Products</li>
            </NavLink>
            <NavLink className='about nav-lnk' to="/about">
              <li >About</li>
            </NavLink>
           
           
          </ul>
          {props.admin === false ? <> <NavLink className='signin' to='/signin'>
            <button >Sign in </button>
          </NavLink>
          <NavLink className='login' to='/login'>
            <button >Log in </button>
          </NavLink></> : <>
          <NavLink className='login' to='/admin'>
            <button>Admin</button>
          </NavLink>
          <NavLink className='login' to='/login'>
            <button onClick={props.handleadmin}>Log Out</button>
          </NavLink>
          </>}
        </div>
      </div>
    </nav>
  );
};





export default Navbar