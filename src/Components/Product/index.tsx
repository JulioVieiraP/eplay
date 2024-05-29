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
  const getDescription = (text: string) => {
    if (text.length > 100) {
      return text.slice(0, 92) + '...'
    } else {
      return text
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
      <S.Title>{title}</S.Title>
      <Tag size="small">{category}</Tag>
      <Tag size="small">{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
