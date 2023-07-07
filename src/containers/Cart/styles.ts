import styled from 'styled-components'

import variables from '../../styles/variables'

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${variables.defaultBlack};
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${variables.primaryColor};
  z-index: 1;
  padding-top: 16px;
  max-width: 360px;
  width: 100%;
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

export const TotalContainer = styled.div`
  display: block;
  padding: 32px 8px 8px 8px;
  color: ${variables.secondaryColor};
  font-size: 14px;
  font-weight: 700;

  .total-price {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }
`
