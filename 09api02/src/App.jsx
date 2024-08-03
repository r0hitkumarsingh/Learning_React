import { useState } from 'react'
import ProductList from "./components/ProductList";
import './App.css'

function App() {


  return (
   <>
     <div>
     <h2 className="page-title">Simple Ecommerce Store</h2>
      <ProductList />
     </div>
   </>
  )
}

export default App
