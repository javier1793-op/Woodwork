import './App.css'
import Head from './Components/Head'
import ListProduct from './Components/ListProduct'
import { products as InitialProducts} from './mooks/product.json'

function App() {

  const prod= InitialProducts
  
  return (
    <>
      <main>
        <Head/>
        <ListProduct
        products={prod}
        />
      </main>
    </>
  )
}

export default App
