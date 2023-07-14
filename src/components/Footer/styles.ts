import styled from 'styled-components'

import { color } from '../../styles'

export const Container = styled.footer`
  background-color: ${color.secondaryColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  color: ${color.primaryColor};
  font-size: 10px;
  padding-top: 80px;
  padding-bottom: 40px;
  width: 480px;
  text-align: center;
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  padding-top: 32px;
`

export const SocialLink = styled.a`
  margin-right: 8px;
  text-decoration: none;
`

export const Logo = styled.img`
  padding-top: 40px;
`
