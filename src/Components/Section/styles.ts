import styled from 'styled-components'
import { Props } from './../ProductsList'
import { cores } from '../../styles/Variaveis'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};
  padding: 32px 0;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`
