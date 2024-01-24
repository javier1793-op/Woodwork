import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import ListProduct from './Components/ListProduct'
import { products as InitialProducts} from './mooks/product.json'
import { useFilter } from './Hooks/useFilter'
import CardModal from './Components/CardModal'


function App() {

  const [products, setProducts] = useState(InitialProducts)
 
  const {filterProducts}= useFilter()

  const categories = products.map((item) => item.category);
  const categoriasUnicas = [...new Set(categories)];
  
  const filteredProducts = filterProducts(products)

  return (
    <>
    <CardModal/>
      <main>
        <Head/>
        <ListProduct
        products={filteredProducts}
        category={categoriasUnicas}
        
        
        />
      </main>
    </>
  )
}

export default App
