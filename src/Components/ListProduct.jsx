import "../scss/listProduct.scss";
import ItemListProduct from "./ItemListProduct";
import { FaHotjar } from "react-icons/fa";
import Filter from "../Components/Filter";
import { useState } from "react";

const ListProduct = ({ products,category,setFilter }) => {
 
  const [minPrice, setMinPrice] = useState(0)

  const  handleChangePrice = (e)=>{
      setMinPrice(e.target.value)
      setFilter(preveState =>(
        {
          ...preveState,
          minPrice:e.target.value
        }
      ))
  }

  const handleChangeCategory = (name)=>{
    setFilter(preveState =>(
      {
        ...preveState,
        category:name
      }
    ))
  }

  return (
    <>
      <section className="titleListProduct">
        <h1 className="titleListProduct">Categories</h1>
        <h2
        onClick={()=>handleChangeCategory('all')}
        >{'ALL'}</h2>
      </section>
      <div className="Filter">
        {category.map((item) => (
          <Filter key={item.id} name={item} 
          handleChange={handleChangeCategory}
          />
        ))}
      </div>
      <section className="titleListProduct">
        <div className="titlePopular">
          <FaHotjar className="iconHot" />
          <h1 className="titleListProduct">Popular Products</h1>
        </div>

        <div className="titlePopular">
          <label htmlFor="">Precio a partir de:</label>
          <input 
          type="range"
          id='price'
          min="0" 
          max="2000"
          onChange={handleChangePrice}
          />
          
          <span>${minPrice}</span>
        </div>
      </section>
      <div className="containerListProduct">
        {products.slice(0, 8).map((product) => (
          <ItemListProduct
            key={product.id}
            title={product.title}
            favorite={product.rating}
            price={product.price}
            category={product.category}
            image={product.thumbnail}
          />
        ))}
      </div>
    </>
  );
};

export default ListProduct;
