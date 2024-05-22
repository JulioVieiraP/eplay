import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles/Variaveis'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title'>>`
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
  column-gap: 24px;
  margin-top: 40px;
`
