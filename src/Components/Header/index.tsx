import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <S.HeaderBar>
      <div>
        <img src={Logo} alt="EPLAY" />
        <nav>
          <S.Links>
            <S.LinkItems>
              <a href="#">Categorias</a>
            </S.LinkItems>
            <S.LinkItems>
              <a href="#">Novidades</a>
            </S.LinkItems>
            <S.LinkItems>
              <a href="#">Promoções</a>
            </S.LinkItems>
          </S.Links>
        </nav>
      </div>
      <S.LinkCart href="#">
        0 - produto(s) <img src={Carrinho} alt="Carrinho" />
      </S.LinkCart>
    </S.HeaderBar>
  )
}

export default Header
