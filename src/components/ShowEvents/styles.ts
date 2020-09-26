import styled from 'styled-components'

export const EventsContainer = styled.div<{ status: "open" | "closed" }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${props => props.status === "open" ? "var(--main-color-grey, #eee)" : "var(--main-color-white, #fff)"};
  padding: 20px;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  max-width: "700px";

  @media only screen and (min-width: 700px){
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`
