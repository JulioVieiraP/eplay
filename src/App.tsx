import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header'
import GlobalCss from './styles/Globalstyle'
import RouterView from './Routes'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="Container">
        <Header />
      </div>
      <RouterView />
      <Footer />
    </BrowserRouter>
  )
}

export default App
