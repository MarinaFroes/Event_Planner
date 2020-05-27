import React from 'react'
import styled from 'styled-components'

import TextBox from './core/TextBox'
import GuestCard from './GuestCard'
import { showGuests } from '../utils/text'
import { Guest } from '../store/types'

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

const NoGuestsMessage = styled.p`
  padding: 2rem;
`

interface Props {
  guests: Guest[];
}

const ShowGuests: React.FC<Props> = ({ guests }) => {
  let approvedGuests: Guest[] = guests.filter(guest => guest.status === "Accept")
  let pendingGuests: Guest[] = guests.filter(guest => guest.status === "Pending")

  return (
    <GuestsContainer>
      <TextBox
        heading1={showGuests.heading1}
        heading2={showGuests.heading2}
      />
      <div style={{maxWidth: "700px"}}>
        <SectionHeadings>Approved guests</SectionHeadings>
        <Cards>
          {
            approvedGuests.length > 0 ? (
              approvedGuests.map((guest, key) => <GuestCard key={key} guest={guest} />)
            ) : (
              <NoGuestsMessage>
                No approved guests for now
              </NoGuestsMessage>
            )
          }
        </Cards>
      
        <SectionHeadings>Pending approvals</SectionHeadings>
        <Cards>
          {
            pendingGuests.length > 0 ? (
              pendingGuests.map((guest, key) => <GuestCard key={key} guest={guest} />)
            ) : (
              <NoGuestsMessage>
                No pending guests for now
              </NoGuestsMessage>
            )
          }
        </Cards>
      </div>
    </GuestsContainer>
  )
}

export default ShowGuests
