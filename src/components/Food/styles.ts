import styled from 'styled-components'

import variables from '../../styles/variables'

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
