import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isOnSaleLoading } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isSoonLoading } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-Sale"
        isLoading={isOnSaleLoading}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isSoonLoading}
      />
    </>
  )
}

export default Home
