import styled from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.footer`
  background-color: ${variables.secondaryColor};
  display: inline-block;
  width: 100%;
`

export const Text = styled.p`
  color: ${variables.primaryColor};
  font-size: 10px;
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
`

export const SocialLink = styled.a`
  margin-right: 8px;
  text-decoration: none;
`
