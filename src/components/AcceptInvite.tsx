import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import EventImg from '../assets/images/tuva-mathilde-loland-4rfVL3NNGrA-unsplash.jpg'
import TextBox from './TextBox'
import Btn from './Btn'

const AcceptInviteContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  padding: 20px;
`

const AcceptInvite: React.FC = () => {
  const eventName = "My Birthday Details"
  const subtitle = "You were invited to take part on My Birthday. Check the event info below:"
  const heading1 = "Accept the invite by signing up"
  const heading2 = "After accepting the invite, the host will be notified. If the host confirms your participation on the event or updates any event info, you will receive a notification by email."
  const eventText = {
    description: "Chocolate cake",
    additionalInfo: "Snacks and drinks are included",
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
        eventText={eventText}
      />
      <Content>
        <TextBox heading1={heading1} heading2={heading2} />
        <Btn
          primaryBtn={true}
          btnText="Register to the event"
          btnWidth="90%"
        />
      </Content>
    </AcceptInviteContainer>
  )
}

export default AcceptInvite
