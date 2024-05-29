import Tag from '../Tag'
import Button from '../Button'

import { useGetFeaturedGameQuery } from '../../services/api'
import { formataPreco } from '../ProductsList'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <S.Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="Container">
        <Tag>Destaque do dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </S.Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
