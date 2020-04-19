import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import EventImg from '../assets/images/kyle-head-WE-N1KDqEno-unsplash.jpg'
import TextBox from './TextBox'
import Btn from './Btn'
import EventCard from './EventCard'

const AcceptInviteContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
`

const AcceptInvite: React.FC = () => {
  const eventName = "My Birthday Details"
  const subtitle = "You were invited to take part on My Birthday. Check the event info below:"
  const heading1 = "Accept the invite by signing up"
  const heading2 = "After accepting the invite, the host will be notified. If the host confirms your participation on the event or updates any event info, you will receive a notification by email."
  const eventText = {
    description: "Birthday party including snacks, cake and drinks.",
    location: "Bundesallee 198A",
    date: "04/26/2020",
    time: "19:00",
    participants: 5,
    cost: 20.00
  }

  return (
    <AcceptInviteContainer>
      <Header
        title={eventName}
        subtitle={subtitle}
        imageUrl={EventImg}
      />
      <EventCard eventText={eventText} />
      <TextBox heading1={heading1} heading2={heading2} />
      <Btn
        primaryBtn={true}
        btnText="Register to the event"
        btnWidth="90%"
      />
    </AcceptInviteContainer>
  )
}

export default AcceptInvite
