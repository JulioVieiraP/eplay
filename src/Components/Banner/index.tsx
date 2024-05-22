import * as S from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="Container">
        <Tag>Destaque do dia</Tag>
        <div>
          <S.Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>
          <S.Precos>
            De <span>R$ 250</span> <br />
            por apenas R$ 99,90
          </S.Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Click aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner