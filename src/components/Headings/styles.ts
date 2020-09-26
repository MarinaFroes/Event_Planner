import styled from 'styled-components'

export const Heading1 = styled.h1`
  font-size: 26px;
  padding-top: 20px;

  @media only screen and (min-width: 768px){
    font-size: 42px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 68px;
  }
`

export const Heading2 = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin: 20px;
  max-width: 500px;

  @media only screen and (min-width: 768px){
    font-size: 20px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 26px;
  }
`