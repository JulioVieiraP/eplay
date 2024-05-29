import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id
}: Props) => {
  const getDescrica = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 92) + '...'
    } else {
      return description
    }
  }
  return (
    <S.Card
      title={`clique aui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag size="small" key={info}>
            {info}
          </Tag>
        ))}
      </S.Infos>
      <S.Titulo>{title}</S.Titulo>
      <Tag size="small">{category}</Tag>
      <Tag size="small">{system}</Tag>
      <S.Descricao>{getDescrica(description)}</S.Descricao>
    </S.Card>
  )
}

export default Product
