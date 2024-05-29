import { useDispatch } from 'react-redux'
import { Game } from '../../Pages/Home'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl } from '../../utils'
import { add, open } from '../../redux/reducers/cart'

import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="Container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>de {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <>
              <Button
                variant="primary"
                title="clique aqui para adicionar o jogo ao carrinho"
                type="button"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            </>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
