/*EVERYTHING MUST BE SPELLED RIGHT AND NAMES AND TITLES SHOULD BE SAME AROUND FILES*/
/*LAST INSTRUCTION FOR ADDING CATEGORY
  down in function getarg
  add an else if(props.item.title === 'the title of the category you chose'){
    return 'the name you put in function handlefilter in file src/App.jsx'
  }

  NOW YOU HAVE FINISHED ADDING A CATEGORY IMG THAT WILL APPEAR IN HOME PAGE AND A FILTER IN THE PRODUCT PAGE!!! 

  FOR MORE INSTRUCTIONS IN DIFFERENT FEATURES GO TO README FILE 
*/ 
import { NavLink,Link } from "react-router-dom"

export default function CategoryItem(props) {
  function getarg(){
    if(props.item.title === 'Clothes'){
      return 'clothes'
    }else if(props.item.title === 'Electronics'){
      return 'electronics'
    }else if(props.item.title === 'Miscellanous') {
      return 'miss'
    }else if(props.item.title === 'Toys'){
      return 'toys'
    }else if(props.item.title === 'Furniture'){
      return 'furn'
    }/*the else if must be here <--*/;
  };
  return(
    <>
      <img className="categ-img" src={`/categoriesimgs/${props.item.img}`}></img>
      <div className="info">
        <h1 className="categ-title">{props.item.title}</h1>
        <Link to="/products">
          <button onClick={() => {props.handleFilter(getarg())}}>SHOP NOW</button>
        </Link>
        
      </div>

    </>
  );
};