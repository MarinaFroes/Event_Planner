import React, { useState } from 'react'
import { FaAt, FaCircle } from 'react-icons/fa'

import { Guest } from '../../store/types'
import { StyledCard, GuestHeading, HeadingContainer, GuestContact, ContactDiv, Checkbox } from './styles'

interface Props {
  guest: Guest;
}

const GuestCard: React.FC<Props> = ({ guest }) => {

  const [isChecked, setIsChecked] = useState(guest.status === "Accept")

  const approveGuest = () => {
    setIsChecked(!isChecked)
    isChecked && window.confirm('Do you want to approve guest?')
  }
  
  return (
    <StyledCard id={guest.id}>
      <HeadingContainer>
        <GuestHeading>{guest.name}</GuestHeading>
        <Checkbox
          type="checkbox"
          checked={isChecked}
          id="status"
          name="status"
          onChange={approveGuest}
        />
      </HeadingContainer>
     
      <ContactDiv>
        <FaAt />
        <GuestContact>{guest.email}</GuestContact>
      </ContactDiv>

      <ContactDiv>
        {
          guest.status === "Accept"
            ? <FaCircle style={{ color: "green" }} />
            : <FaCircle style={{ color: "var(--main-color-orange, #f07422)" }} />
        }
        <GuestContact>{guest.status === "Accept" ? "Approved" : guest.status}</GuestContact>
      </ContactDiv>
    </StyledCard>
  )
}

export default GuestCard
