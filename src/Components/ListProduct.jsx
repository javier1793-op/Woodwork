import '../scss/listProduct.scss'
import ItemListProduct from './ItemListProduct'
import { FaHotjar } from "react-icons/fa";

const ListProduct = ({products}) => {
  return (
    <>  
        <section className="titleListProduct">
        <FaHotjar className='iconHot'/>
            <h1 className='titleListProduct'>Popular Products</h1>
        </section>
        <div className="containerListProduct">
            
          {products.slice(0,12).map((product)=>(
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
  )
}

export default ListProduct