import styled from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.header`
  width: 100%;
  height: 384px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  padding-top: 40px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;
  color: ${variables.primaryColor};
  text-align: center;
  padding-top: 138px;
  padding-bottom: 40px;
`
