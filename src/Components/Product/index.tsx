import Tag from '../Tag'
import * as S from './styles'

const Product = () => (
  <S.Card>
    <img src="https://via.placeholder.com/222x250" alt="" />
    <S.Titulo>Nome do jogo</S.Titulo>
    <Tag size="small">Categoria</Tag>
    <Tag size="small">Windows</Tag>
    <S.Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      numquam architecto, explicabo soluta, magnam expedita deleniti et dicta
      impedit fugit id unde dolor non voluptatibus inventore provident iste?
      Reiciendis, voluptas.
    </S.Descricao>
  </S.Card>
)

export default Product
