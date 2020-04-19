import React from 'react'
import styled from 'styled-components'

import TextBox from './TextBox'
import GuestCard from './GuestCard'


const GuestsContainer = styled.div`
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

const SectionHeadings = styled.h3`
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

const Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`

interface Guest {
  name: string;
  id: string;
  phone: string;
  email: string;
  status: string;
}

interface Props {
  guests: Guest[];
}

const GuestsInfo: React.FC<Props> = ({ guests }) => {
  const heading1 = "Approve the guests who registered for the event"
  const heading2 = "The guest will be notified if you confirm the invitation or update the event info. "
  
  return (
    <GuestsContainer>
      <TextBox heading1={heading1} heading2={heading2} />
      <div style={{maxWidth: "700px"}}>
        <SectionHeadings>Approved guests</SectionHeadings>
        <Cards>
          {
            guests.filter(guest => guest.status === "approved").map((guest, key) => <GuestCard key={key} guest={guest} />)
          }
        </Cards>
      
        <SectionHeadings>Pending approvals</SectionHeadings>
        <Cards>
          {
            guests.filter(guest => guest.status === "pending").map((guest, key) => <GuestCard key={key} guest={guest} />)
          }
        </Cards>
      </div>
    </GuestsContainer>
  )
}

export default GuestsInfo
