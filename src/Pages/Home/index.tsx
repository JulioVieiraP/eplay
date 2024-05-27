import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames, isLoading: isOnSaleLoading } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isSoonLoading } = useGetSoonQuery()

  if (isOnSaleLoading || isSoonLoading) {
    return <h4>carregando...</h4>
  }

  return (
    <>
      <Banner />
      {onSaleGames && (
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-Sale"
        />
      )}
      {soonGames && (
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      )}
    </>
  )
}

export default Home
