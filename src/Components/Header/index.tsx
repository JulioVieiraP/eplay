import { Link } from 'react-router-dom'

import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux/store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const OpenCart = () => {
    dispatch(open())
  }
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
      <S.CartButton href="#" onClick={OpenCart}>
        {items.length} - produto(s) <img src={Carrinho} alt="Carrinho" />
      </S.CartButton>
    </S.HeaderBar>
  )
}

export default Header
