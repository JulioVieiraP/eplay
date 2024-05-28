import { useState } from 'react'
import Button from '../../Components/Button'
import Card from '../../Components/Card'
import * as S from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="Container">
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" id="fullName" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="text" id="deliveryEmail" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="confirmeDeliveryEmail">Confirme o E-mail</label>
              <input type="text" id="confirmeDeliveryEmail" />
            </S.InputGroup>
          </S.Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <S.TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </S.TabButton>
          <S.TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão" />
            Cartão de crédito
          </S.TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input type="text" id="cardOwner" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input type="text" id="cpfCardOwner" />
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="24px">
                  <S.InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input type="text" id="cardDisplayName" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" id="cardNumber" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <input type="text" id="cardNumber" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="expiresYear" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input type="text" id="cardCode" />
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="24px">
                  <S.InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 200,00</option>
                      <option>3x de R$ 200,00</option>
                    </select>
                  </S.InputGroup>
                </S.Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
