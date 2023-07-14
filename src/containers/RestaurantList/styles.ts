import styled from 'styled-components'
import { color } from '../../styles'

export const List = styled.main`
  background-color: ${color.tertiaryColor};
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  padding: 80px 171px 120px;
`
