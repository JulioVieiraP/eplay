import { Link } from 'react-router-dom'

import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux/store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const OpenCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
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
        <S.CartButton href="#" onClick={OpenCart}>
          {items.length}
          <span> - produto(s)</span> <img src={Carrinho} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
