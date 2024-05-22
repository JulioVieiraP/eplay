import { Link } from 'react-router-dom'

import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <img src={Logo} alt="EPLAY" />
        </Link>
        <nav>
          <S.Links>
            <S.LinkItems>
              <Link to="/Categorias">Categorias</Link>
            </S.LinkItems>
            <S.LinkItems>
              <Link to="/">Novidades</Link>
            </S.LinkItems>
            <S.LinkItems>
              <Link to="/">Promoções</Link>
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
