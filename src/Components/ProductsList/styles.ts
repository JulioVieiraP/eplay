import styled from 'styled-components'

export const Container = styled.section`
  padding: 32px 0;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
