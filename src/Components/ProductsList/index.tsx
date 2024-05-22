import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <S.Container background={background}>
    <div className="Container">
      <h2>{title}</h2>
      <S.List>
        <Product
          category="Ação"
          description="test"
          image="https://via.placeholder.com/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="test"
          image="https://via.placeholder.com/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="test"
          image="https://via.placeholder.com/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="test"
          image="https://via.placeholder.com/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
      </S.List>
    </div>
  </S.Container>
)

export default ProductsList
