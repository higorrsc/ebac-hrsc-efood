import styled from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${variables.primaryColor};
`
export const Photo = styled.img`
  max-width: 100%;
`

export const Details = styled.div`
  border-right: 1px solid ${variables.primaryColor};
  border-bottom: 1px solid ${variables.primaryColor};
  border-left: 1px solid ${variables.primaryColor};
  background-color: ${variables.defaultWhite};
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
`

export const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-top: 16px;
`

export const Score = styled.div`
  position: absolute;
  top: 8px;
  left: 408px;
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
    padding-right: 8px;
  }

  img {
    padding-right: 8px;
  }
`
