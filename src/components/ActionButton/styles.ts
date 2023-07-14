import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Props } from '.'

import { color } from '../../styles'

export const ButtonContainer = styled.button<
  Omit<Props, 'type' | 'title' | 'to' | 'onClick' | 'children'>
>`
  background-color: ${(props) =>
    props.kind === 'primary' ? color.primaryColor : color.secondaryColor};
  color: ${(props) =>
    props.kind === 'primary' ? color.secondaryColor : color.primaryColor};
  width: ${(props) => (props.kind === 'primary' ? 'auto' : '100%')};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  margin-top: ${(props) => (props.kind === 'primary' ? '16px' : '8px')};
  margin-bottom: ${(props) => (props.kind === 'primary' ? '8px' : '0')};
`

export const ButtonLink = styled(Link)<
  Omit<Props, 'type' | 'title' | 'to' | 'onClick' | 'children'>
>`
  background-color: ${(props) =>
    props.kind === 'primary' ? color.primaryColor : color.secondaryColor};
  color: ${(props) =>
    props.kind === 'primary' ? color.secondaryColor : color.primaryColor};
  width: ${(props) => (props.kind === 'primary' ? 'auto' : '100%')};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  display: inline-block;
  margin-top: ${(props) => (props.kind === 'primary' ? '16px' : '8px')};
  margin-bottom: ${(props) => (props.kind === 'primary' ? '8px' : '0')};
`
