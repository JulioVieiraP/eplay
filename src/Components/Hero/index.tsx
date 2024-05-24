import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

const Hero = () => {
  return (
    <S.Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="Container">
        <div>
          <Tag>Rpg</Tag>
          <Tag>PS5</Tag>
        </div>
        <S.Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            Por R$ 190,00
          </p>
          <Button
            variant="primary"
            title="clique aqui para adicionar o jogo ao carrinho"
            type="button"
          >
            Adicionar ao carrinho
          </Button>
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
