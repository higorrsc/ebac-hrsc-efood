import styled from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.header`
  width: 100%;
  font-size: 18px;
  font-weight: 900;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  color: ${variables.primaryColor};
  padding-top: 40px;
  padding-bottom: 64px;
`
