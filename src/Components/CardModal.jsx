import { createPortal } from "react-dom"
import '../scss/cartModal.scss'
import { IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";


const CardModal = () => {
  return createPortal(
    <>
        
            <div className="contentCart">
               <section className="headCart">
                <h3 className="titleCart">Cart</h3>
                <IoMdClose className="closeCart"/>
               </section>
               <section className="infoCart">
               <BsCart3 />
               <h1>Empty cart</h1>
               </section>
            </div>
       
    </>
  , document.getElementById('cart'))
}

export default CardModal