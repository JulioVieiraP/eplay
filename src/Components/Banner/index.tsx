import * as S from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  return (
    <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="Container">
        <S.Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>
        <S.Precos>
          De <span>R$ 250</span> <br />
          por apenas R$ 99,90
        </S.Precos>
      </div>
    </S.Imagem>
  )
}

export default Banner
