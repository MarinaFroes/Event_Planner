import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: var(--main-color-blue, #0c598a);
  color: var(--main-color-white, #fff);
`

export const Image = styled.img`
  width: 100%;
  max-width: 800px;
  padding-bottom: 40px;

  @media only screen and (min-width: 1280px){
    padding-bottom: 0;
    margin-bottom: -100px;
  }
`
