import '../scss/itemListProduct.scss'
import { MdOutlineFavorite } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const ItemListProduct = ({title,favorite,price,category,image}) => {
  return (
    <>
        <div className="containerItemListProduct">
            <section className="portImg">
                <span className="favorite">
                <MdOutlineFavorite className='iconFavorite'/>
                    {favorite}
                </span>
                <img src="https://ae01.alicdn.com/kf/S63491542aed64655bfc0165f22beefe9w.jpg_640x640Q90.jpg_.webp" alt="" className='ProductImg'/>
            </section>
            <section className="InfoProduct">
                <span className="new">
                    {'NEW'}
                </span>
                <h2 className="titleProductList">
                    {title}
                </h2>
                <span className="categoryProductoList">
                    {category}
                </span>
                <section className="viewProduct">
                <span className="precieProductList">
                    {`$ ${price}`}
                </span>
                <IoIosAddCircle className='iconView'/>
                </section>
                
            </section>
           
        </div>
    </>
  )
}

export default ItemListProduct