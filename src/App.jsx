import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import ListProduct from './Components/ListProduct'
import { products as InitialProducts} from './mooks/product.json'

function App() {

  const [products, setProducts] = useState(InitialProducts)
  const [filters, setFilters] = useState({
    category:'all',
    minPrice:0
  })

  const categories = products.map((item) => item.category);
  const categoriasUnicas = [...new Set(categories)];

  const filterProducts = (products)=>{
    return products.filter(product =>{
      return(
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  
  const filteredProducts = filterProducts(products)

  return (
    <>
      <main>
        <Head/>
        <ListProduct
        products={filteredProducts}
        category={categoriasUnicas}
        setFilter={setFilters}
        />
      </main>
    </>
  )
}

export default App
