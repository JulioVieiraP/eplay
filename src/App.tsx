import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Components/Header'
import GlobalCss from './styles/Globalstyle'
import RouterView from './Routes'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <GlobalCss />
      <Router>
        <div className="Container">
          <Header />
        </div>
        <RouterView Home={Home} />
      </Router>
    </>
  )
}

export default App
