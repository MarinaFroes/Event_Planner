import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: var(--main-color-blue, #0c598a);
  color: var(--main-color-white, #fff);

  @media only screen and (min-width: 1024px){
    flex-direction: row;
     justify-content: space-evenly;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 40px;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
