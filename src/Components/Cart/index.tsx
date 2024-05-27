/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux/store'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const CloseCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    if (items.length > 1) {
      dispatch(remove(id))
    } else dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((totalPrice, item) => {
      return (totalPrice += item.prices.current!)
    }, 0)
  }
  return (
    <S.CartContainer>
      <S.Overlay onClick={CloseCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {formataPreco(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button title="clique aui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart