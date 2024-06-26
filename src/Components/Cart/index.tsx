import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../redux/store'
import { close, remove } from '../../redux/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const CloseCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    if (items.length > 1) {
      dispatch(remove(id))
    } else {
      dispatch(remove(id))
      CloseCart()
    }
  }

  const goToCheckout = () => {
    navigate('/checkout')
    CloseCart()
  }
  return (
    <S.CartContainer>
      <S.Overlay onClick={CloseCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="clique aui para continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            o carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
