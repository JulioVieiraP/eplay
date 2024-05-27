import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header'
import GlobalCss from './styles/Globalstyle'
import RouterView from './Routes'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import { RootReducer } from './redux/store'
import { useSelector } from 'react-redux'

function App() {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="Container">
        <Header />
      </div>
      <RouterView />
      <Footer />
      {isOpen && <Cart />}
    </BrowserRouter>
  )
}

export default App
