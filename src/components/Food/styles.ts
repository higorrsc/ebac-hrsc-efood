import styled from 'styled-components'

import variables from '../../styles/variables'
import { ButtonContainer } from '../ActionButton/styles'

export const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${variables.secondaryColor};
`
export const Photo = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Details = styled.div`
  border-right: 1px solid ${variables.primaryColor};
  border-bottom: 1px solid ${variables.primaryColor};
  border-left: 1px solid ${variables.primaryColor};
  background-color: ${variables.primaryColor};
  padding: 8px;

  position: relative;
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 900;
  padding-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-top: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 344px;
  position: relative;
  z-index: 1;
  background-color: ${variables.primaryColor};
  color: ${variables.defaultWhite};
  padding-right: 32px;

  display: grid;
  grid-template-columns: 312px auto;
  column-gap: 32px;

  .food {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
  }

  h4 {
    margin-top: 32px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 16px 0;
  }

  ${ButtonContainer} {
    max-width: 250px;
  }
`
