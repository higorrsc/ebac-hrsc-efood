import styled from 'styled-components'

import { color } from '../../styles'

export const List = styled.main`
  background-color: ${color.tertiaryColor};
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  padding: 56px 171px 120px;
`
