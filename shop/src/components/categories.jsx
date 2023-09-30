import CategoryItem from "./categoryItem";
import { categories } from "../data/categorydata";


export default function Categories({handlepage,handleFilter}) {
  const categoriesjsx = categories.map((item) => {
    return(
      <div key={item.id} className="categ-container">
        <CategoryItem handleFilter={handleFilter} handlepage={handlepage} item={item} />
      </div>
    );
  })
  return(
    <div className="categories-container">
      {categoriesjsx}
    </div>
    
  );
};