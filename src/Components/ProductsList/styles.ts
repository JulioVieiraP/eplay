import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles/Colors'
import { Card } from '../Product/styles'
import { breakpoints } from '../../styles/Globalstyle'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};
  padding: 32px 0;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
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
