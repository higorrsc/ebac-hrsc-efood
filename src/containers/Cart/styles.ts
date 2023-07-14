import styled from 'styled-components'

import { color } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.defaultBlack};
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${color.primaryColor};
  color: ${color.secondaryColor};
  z-index: 1;
  padding-top: 16px;
  max-width: 360px;
  width: 100%;

  h3 {
    font-size: 16px;
    padding-bottom: 8px;
  }

  > h3 {
    text-align: center;
  }

  .container {
    padding: 16px 8px 8px 8px;
    display: block;
    font-size: 14px;
    font-weight: 700;
  }

  .total-price {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }

  .confirmation {
    font-weight: 400;
    line-height: 22px;

    p {
      padding-top: 16px;
    }
  }

  .padding-top {
    padding-top: 24px;
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 32px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  width: 100%;

  label {
    display: block;
    padding: 8px 0;
  }

  input {
    height: 32px;
    width: 100%;
    background-color: ${color.secondaryColor};
    border: 1px solid ${color.primaryColor};
    color: ${color.formTextColor};
    padding: 8px;

    &.error {
      border: 1px solid red;
    }
  }
`
