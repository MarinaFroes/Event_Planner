import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCard = styled.div<{ status: "open" | "closed" }>`
  text-align: left;
  width: 300px;
  padding: 20px;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 20px;
  -webkit-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  -moz-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  background-color: ${props => props.status === "closed" ? "var(--main-color-grey, #eee)" : "var(--main-color-white, #fff)"};
  padding: 20px;
`

export const EventHeading = styled.p`
  color: var(--main-color-black, #000);
  font-size: 16px;
  font-weight: bold;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const EventInfo = styled.p`
  color: var(--main-color-blue, #0c598a);
  font-size: 16px;
  padding: 10px; 
`

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-color-blue, #0c598a);
`

export const StyledLink = styled(Link)`
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`
