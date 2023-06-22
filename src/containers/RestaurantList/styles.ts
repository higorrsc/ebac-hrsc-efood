import styled from 'styled-components'
import variables from '../../styles/variables'

export const List = styled.main`
  background-color: ${variables.tertiaryColor};
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  padding: 80px 171px 120px;
`
