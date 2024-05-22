import Banner from './Components/Banner'
import Header from './Components/Header'
import GlobalCss from './styles/Globalstyle'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="Container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
