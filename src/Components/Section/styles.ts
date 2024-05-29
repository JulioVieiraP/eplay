import styled from 'styled-components'
import { Props } from './../ProductsList'
import { colors } from '../../styles/Colors'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};
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
      props.background === 'black' ? colors.gray : colors.black};
  }
`
