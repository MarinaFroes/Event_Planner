import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import EventImg from '../assets/images/kyle-head-WE-N1KDqEno-unsplash.jpg'
import TextBox from './TextBox'
import Btn from './Btn'

const AcceptInviteContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
`

const AcceptInvite: React.FC = () => {
  const eventName = "My Birthday Details"
  const subtitle = "You were invited to take part on My Birthday. Check the event info below:"
  const heading1 = "Accept the invite by signing up"
  const heading2 = "After accepting the invite, the host will be notified. If the host confirms your participation on the event or updates any event info, you will receive a notification by email."

  return (
    <AcceptInviteContainer>
      <Header title={eventName} subtitle={subtitle} imageUrl={EventImg} />
      <TextBox heading1={heading1} heading2={heading2} />
      <Btn primary={true} text="Register to the event" widthSize="90%" />
    </AcceptInviteContainer>
  )
}

export default AcceptInvite
