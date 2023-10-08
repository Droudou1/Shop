import "../css/favourites.css";
import {Link} from 'react-router-dom';
export default function Favourite({favproducts,DeleteFavItem}){


  return(
    <div className='fav-page'>
      {favproducts.length === 0 ? <div className='empty-list-container'>
        <h1>You have no favourite products yet</h1>
        <p>Explore our diverse range of products and discover something extraordinary today!</p>
        <Link to='/products'>
          <button className='explore-btn'>DISCOVER NOW</button>
        </Link>
      </div> : <>
      <h1 className='fav-title'>Favourite Products</h1>
      <div className='favproducts-list'>
        {favproducts.map((favproduct) => {
          return(
            <div key={favproduct.id} className='favproduct-container'>
              <div className='fav-img-container'>
                <Link to ={`/products/${favproduct.id}`}>
                  <img
                  className='fav-img' 
                  src={`/productimgs/${favproduct.defaulcolor ? favproduct.defaulcolor : ''}${favproduct.defaulcolor ? '-' : ''}${favproduct.image}`}></img>
                </Link>
                
              </div>
              <div className='fav-text-container'>
                <h1>❤️{favproduct.name}❤️</h1>
                <p className={favproduct.stock <= 0 ? 'red-stock' : ''}>{favproduct.stock > 0 ? `Availble Stock: ${favproduct.stock}` : 'Out Of Stock'}</p>
                <button onClick={() => {DeleteFavItem(favproduct.id)}} className='fav-remove-btn'>Remove From Favourites</button>
              </div>
            </div>
          );
        })}
      </div>
      </>}
     
    </div>
  );
}