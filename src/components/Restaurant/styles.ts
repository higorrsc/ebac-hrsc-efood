import styled from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${variables.primaryColor};
  position: relative;
`
export const Photo = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Details = styled.div`
  border-right: 1px solid ${variables.primaryColor};
  border-bottom: 1px solid ${variables.primaryColor};
  border-left: 1px solid ${variables.primaryColor};
  background-color: ${variables.defaultWhite};
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  max-width: 100%;
  height: 181px;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
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

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
