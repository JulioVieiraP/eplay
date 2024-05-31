import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import Logo from '../../assets/images/logo.svg'
import CartIcon from '../../assets/images/carrinho.svg'

import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux/store'

import * as S from './styles'

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
            <h1>
              <img src={Logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItems>
                <Link
                  title="Clique aqui para a página de categorias"
                  to="/Categorias"
                >
                  Categorias
                </Link>
              </S.LinkItems>
              <S.LinkItems>
                <HashLink
                  title="Clique aqui para a seção de Em breve"
                  to="/#coming-soon"
                >
                  Em-breve
                </HashLink>
              </S.LinkItems>
              <S.LinkItems>
                <HashLink
                  title="Clique aqui para a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItems>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={OpenCart}>
          {items.length}
          <span> - produto(s)</span> <img src={CartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItems>
            <Link
              title="Clique aqui para a página de categorias"
              to="/Categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItems>
          <S.LinkItems>
            <HashLink
              title="Clique aqui para a seção de Em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em-breve
            </HashLink>
          </S.LinkItems>
          <S.LinkItems>
            <HashLink
              title="Clique aqui para a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItems>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
