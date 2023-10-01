import { Link } from "react-router-dom";
export default function Footer (){
  return(
    <div className="footer">
      <div className='footer-left'>
        <h1 className="footer-title">Eljay's Shop</h1>
        <p className="footer-desc">Our Shop is a Shop that provides many things for it's client with good quantities and low prices  </p>
        <div className="footer-icons-container">
          <div className="facebook-container ico-container">
            <i className="fa-brands fa-facebook ico"></i>
          </div>
          <div className="instagram-container ico-container">
            <i className="fa-brands fa-instagram ico"></i>
          </div>
          <div className='twitter-container ico-container'>
            <i className="fa-brands fa-twitter ico"></i>
          </div>
          <div className='pinterest-container ico-container'>
            <i className="fa-brands fa-pinterest ico"></i>
          </div>
        </div>
      </div>
      <div className='footer-center'>
        <h2>Useful Links</h2>
        <ul>
          <Link onClick={() => {window.scrollTo(0,0);}} to='/'><li className='footer-link'>Home</li></Link>
          <Link to='/cart' onClick={() => {window.scrollTo(0,0);}}> <li className='footer-link'>Cart</li></Link>
          <Link to="/products" onClick={() => {window.scrollTo(0,0);}}><li className='footer-link'>Products</li></Link>    
          <Link to='/orders' onClick={() => {window.scrollTo(0,0);}}><li className='footer-link'>Order Tracking</li></Link>
          <Link to="about" onClick={() => {window.scrollTo(0,0);}}>
            <li className='footer-link'>About</li>
          </Link>
          <Link to='/terms' onClick={() => {window.scrollTo(0,0);}}><li className='footer-link'>Terms</li></Link>
         
        </ul>
      </div>
      <div className='footer-right'>
        <h2>Contact</h2>
        <div className="container">
          <i className="fa-solid fa-phone icon"></i>
          +242 234 56 78</div>
        <div className="container">
          <i className="fa-solid fa-envelope icon"></i>
          Eljayuseless@gmail.com
        </div>
        <img src='https://i.ibb.co/Qfvn4z6/payement.png'></img>
      </div>
     </div>
  );
};