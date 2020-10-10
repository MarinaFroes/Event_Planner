import React from 'react'

import TextBox from '../TextBox'
import GuestCard from '../GuestCard'
import { showGuests } from '../../utils/text'
import { Guest } from '../../types/reduxTypes'
import { ShowGuestsProps } from '../../types/propsTypes'
import {
  GuestsContainer,
  SectionHeadings,
  Cards,
  NoGuestsMessage,
} from './styles'

const ShowGuests: React.FC<ShowGuestsProps> = ({ guests }) => {
  let approvedGuests: Guest[] = guests.filter(
    (guest) => guest.status === 'Accept'
  )
  let pendingGuests: Guest[] = guests.filter(
    (guest) => guest.status === 'Pending'
  )

  return (
    <GuestsContainer>
      <TextBox heading1={showGuests.heading1} heading2={showGuests.heading2} />
      <div style={{ maxWidth: '700px' }}>
        <SectionHeadings>Approved guests</SectionHeadings>
        <Cards>
          {approvedGuests.length > 0 ? (
            approvedGuests.map((guest, key) => (
              <GuestCard key={key} guest={guest} />
            ))
          ) : (
            <NoGuestsMessage>No approved guests for now</NoGuestsMessage>
          )}
        </Cards>

        <SectionHeadings>Pending approvals</SectionHeadings>
        <Cards>
          {pendingGuests.length > 0 ? (
            pendingGuests.map((guest, key) => (
              <GuestCard key={key} guest={guest} />
            ))
          ) : (
            <NoGuestsMessage>No pending guests for now</NoGuestsMessage>
          )}
        </Cards>
      </div>
    </GuestsContainer>
  )
}

export default ShowGuests
