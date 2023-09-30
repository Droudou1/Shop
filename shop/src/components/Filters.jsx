/*THIS DOCUMENTATION IS FOR ADDING A NEW CATEGORY
  1- scroll down to the buttons in  const filterjsx 
  2- copy one of them and paste it under it example :
  <button className={currentfilter === 'furn' ? 'filter-btn active' : 'filter-btn'} onClick={() => {handleFilter('furn')}} ><li>Furnituar</li></button>
  3- Change the name of the category 'furn' in the example to whatever the name of the new category is change every old name you see
  between the li IS the name to be shown in the Page (in the filter)
  after that Browse to src/App.jsx for the rest if the instructuions
*/

import { useState } from "react";

export default function Filters({handleFilter,currentfilter}){
  const [Filter,setFilter] = useState(true);

  function handleClick(){
    setFilter((oldfilter) => !oldfilter);
  };


  const filtersjsx =<ul className="filters-container">
    <button className={currentfilter === 'all' ? 'filter-btn filter-active' : 'filter-btn'} onClick={() => {handleFilter('all')}}><li>All</li></button>
    <button className={currentfilter === 'clothes' ? 'filter-btn filter-active' : 'filter-btn'} onClick={() => {handleFilter('clothes')}} ><li>Clothes</li></button>
    <button className={currentfilter === 'miss' ? 'filter-btn filter-active' : 'filter-btn'} onClick={() => {handleFilter('miss')}} ><li>Miscellanous</li></button>
    <button className={currentfilter === 'electronics' ? 'filter-btn filter-active' : 'filter-btn'} onClick={() => {handleFilter('electronics')}} ><li>Electronics</li></button>
    <button className={currentfilter === 'toys' ? 'filter-btn filter-active' : 'filter-btn'} onClick={() => {handleFilter('toys')}} ><li>Toys</li></button>
    <button className={currentfilter === 'furn' ? 'filter-btn filter-active' : 'filter-btn'} onClick={() => {handleFilter('furn')}} ><li>Furniture</li></button>
    {/*New Category button goes here (you can delete this if you are confident of how it works now)*/ }
</ul>
  return(
    <div className="filter-container">
      <button onClick={handleClick} className="filters-btn">
        <i className="fa-solid fa-bars"></i>
      </button>
      {Filter && filtersjsx}
    </div>
 
  );
};