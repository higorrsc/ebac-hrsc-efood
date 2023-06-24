import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 32px;
  color: ${variables.defaultWhite};
`

export const FoodImage = styled.div`
  width: 100%;
  height: 280px;
  position: absolute;
  top: 0px;
  right: 0px;
  background-repeat: no-repeat;
  z-index: -1;
`

export const FoodText = styled.h3`
  font-weight: 100;
  padding-top: 25px;
  padding-left: 170px;
`

export const RestaurantName = styled.h2`
  font-weight: 900;
  padding-bottom: 32px;
  padding-left: 170px;
`
