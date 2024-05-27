import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles/Variaveis'
import { Card } from '../Product/styles'
import { breakpoints } from '../../styles/Globalstyle'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};
  padding: 32px 0;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
