import React from 'react'
import styled from 'styled-components'
import { FaAt, FaCircle } from 'react-icons/fa'
import { Guest } from '../store/types'

const StyledCard = styled.div`
  text-align: left;
  width: 300px;
  padding: 20px;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
  -webkit-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  -moz-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  background-color: var(--main-color-white, #fff);
`

const GuestHeading = styled.p`
  color: var(--main-color-black, #000);
  font-size: 16px;
  font-weight: bold;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const GuestContact = styled.p`
  color: var(--main-color-blue, #0c598a);
  font-size: 16px;
  padding: 10px; 
`

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-color-blue, #0c598a);
`

const Checkbox = styled.input`
  border: 1px solid #c4c4c4;
  background-color: var(--main-color-white, #fff);
`

interface Props {
  guest: Guest;
}

const GuestCard: React.FC<Props> = ({ guest }) => {
  return (
    <StyledCard id={guest.id}>
      <HeadingContainer>
        <GuestHeading>{guest.name}</GuestHeading>
        <Checkbox type="checkbox" />
      </HeadingContainer>
     
      <ContactDiv>
        <FaAt />
        <GuestContact>{guest.email}</GuestContact>
      </ContactDiv>

      <ContactDiv>
        {
          guest.status === "Pending"
            ? <FaCircle style={{ color: "var(--main-color-orange, #f07422)"}}/>
            : <FaCircle style={{ color: "green" }}/>
        }
        <GuestContact>{guest.status === "Accept" ? "Approved" : guest.status}</GuestContact>
      </ContactDiv>
    </StyledCard>
  )
}

export default GuestCard
