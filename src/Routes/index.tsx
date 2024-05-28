import { Routes, Route } from 'react-router-dom'

import Categories from '../Pages/Categories'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Checkout from '../Pages/Checkout'

const RouterView = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categorias" element={<Categories />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default RouterView
