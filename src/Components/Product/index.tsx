import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => (
  <S.Card>
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
    <S.Descricao>{description}</S.Descricao>
  </S.Card>
)

export default Product
