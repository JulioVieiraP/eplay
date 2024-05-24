import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
    </>
  )
}

export default Product
