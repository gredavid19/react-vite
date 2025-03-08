import React from 'react'
import './index.css'
import { Products } from "./components/Products/Products"
import { useProducts } from "./hooks/useProducts"
import { Header } from './components/Header/Header'
import { useFilters } from './hooks/useFilters'


function App() {
  const { products } = useProducts()
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  
  return (
    <>
      <Header/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
