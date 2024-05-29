import { Game } from '../../Pages/Home'
import { parseToBrl } from '../../utils'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags: string[] = []
    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices) {
      if (
        typeof game.prices.discount !== 'undefined' &&
        game.prices.discount !== null
      ) {
        tags.push(`${game.prices.discount}%`)
      }

      if (
        game.prices.current !== null &&
        typeof game.prices.current !== 'undefined'
      ) {
        tags.push(parseToBrl(game.prices.current))
      }
    }

    return tags
  }

  return (
    <S.Container id={id} background={background}>
      <div className="Container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
