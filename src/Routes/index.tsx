import { Routes, Route } from 'react-router-dom'

import Categories from '../Pages/Categories'
import Home from '../Pages/Home'

const RouterView = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categorias" element={<Categories />} />
      </Routes>
    </>
  )
}

export default RouterView
