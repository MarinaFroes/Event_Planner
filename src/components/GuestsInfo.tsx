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
`

const SectionHeadings = styled.h3`
  text-align: left;
  align-self: flex-start;
  margin: 0 0 20px 20px;
  font-size: 20px;
  font-weight: normal;
  color: var(--main-color-black, #000);
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

      <SectionHeadings>Approved guests</SectionHeadings>
      {
        guests.filter(guest => guest.status === "approved").map((guest, key) => <GuestCard key={key} guest={guest} />)
      }

      <SectionHeadings>Pending approvals</SectionHeadings>
      {
        guests.filter(guest => guest.status === "pending").map((guest, key) => <GuestCard key={key} guest={guest} />)
      }
    </GuestsContainer>
  )
}

export default GuestsInfo
