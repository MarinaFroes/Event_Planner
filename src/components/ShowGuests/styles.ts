import styled from 'styled-components'

export const GuestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: var(--main-color-grey, #eee);
  padding: 20px;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const SectionHeadings = styled.h3`
  text-align: left;
  align-self: flex-start;
  margin: 0 0 20px 20px;
  font-size: 20px;
  font-weight: normal;
  color: var(--main-color-black, #000);

  @media only screen and (min-width: 1000px){
    align-self: "";
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`

export const NoGuestsMessage = styled.p`
  padding: 2rem;
`
