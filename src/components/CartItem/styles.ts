import styled from 'styled-components'
import { color } from '../../styles'

export const Container = styled.div`
  display: flex;
  width: 344px;
  height: 100px;
  background-color: ${color.secondaryColor};
  color: ${color.primaryColor};
  padding: 8px 8px 12px 8px;
  margin: 16px 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`

export const FoodInfo = styled.div`
  display: block;
  padding-left: 8px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const RemoveFood = styled.div`
  cursor: pointer;

  position: absolute;
  top: 76px;
  right: 8px;

  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
