import styled from 'styled-components'
//import { Link } from 'react-router-dom'

import variables from '../../styles/variables'

export const ButtonContainer = styled.button`
  background-color: ${variables.primaryColor};
  color: ${variables.secondaryColor};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const ButtonLink = styled.a`
  color: ${variables.primaryColor};
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  margin-bottom: 8px;
`
