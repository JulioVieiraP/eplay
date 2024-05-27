import styled from 'styled-components'
import { cores } from '../../styles/Variaveis'
import { breakpoints } from '../../styles/Globalstyle'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${cores.branca};
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItems = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
