import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promoções" background="gray" />
    <ProductsList title="Em breve" background="black" />
  </>
)

export default Home
