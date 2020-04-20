import React from 'react'
import styled from 'styled-components'

import Btn from './Btn'
import Header from './Header'
import EventForm from './EventForm'
import EventImg from '../assets/images/tuva-mathilde-loland-4rfVL3NNGrA-unsplash.jpg'
import GuestsInfo from './GuestsInfo'

const EditEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color-white, #fff);
  width: 100%;
`

const AlertLink = styled.a`
  text-decoration: none;
  color: var(--main-color-red, #bd0b2b);
  margin-bottom: 20px;

  :hover {
     cursor: pointer;
  }
`

const EditEvent: React.FC = () => {
  const subtitle = "Here you can check your event details, edit them, get the link to share with your friends, see who accepted the invite."
  const heading1 = "Check event info and get the invite link"
  const heading2 = "Here you can get a link to invite your friends for the event. They will be able to see all the information about the event and register to participate. They will not see who has accepted the invite."

  const guests = [
    {
      name: "Chandler Bing",
      email: "chandler_bing@mail.com",
      id: "123bing",
      phone: "+00 000 000",
      status: "approved"
    },
    {
      name: "Monica Geller",
      email: "monica_geller@mail.com",
      id: "123geller",
      phone: "+00 000 000",
      status: "approved"
    },
    {
      name: "Ross Geller",
      email: "ross_geller@mail.com",
      id: "321geller",
      phone: "+00 000 000",
      status: "pending"
    },
    {
      name: "Rachel Green",
      email: "ross_geller@mail.com",
      id: "123green",
      phone: "+00 000 000",
      status: "approved"
    },
    {
      name: "Joey Tribbiani",
      email: "joey_tribbiani@mail.com",
      id: "321tribbiani",
      phone: "+00 000 000",
      status: "approved"
    },
    {
      name: "Phoebe Buffay",
      email: "phoebe_buffay@mail.com",
      id: "123buffay",
      phone: "+00 000 000",
      status: "pending"
    },
  ]

  return (
    <EditEventContainer>
      <Header title="My Birthday Details" subtitle={subtitle} imageUrl={EventImg}/>
     
      <EventForm
        showImage={false}
        handleChange={e => console.log(e.target.value)}
        heading1={heading1}
        heading2={heading2}
        primaryBtn={false}
        btnText="Save updates"
      />

      <Btn primaryBtn={true} btnText="Get invite link" />
      
      <AlertLink>
        Cancel event
      </AlertLink>
      <GuestsInfo guests={guests}/>
    </EditEventContainer>
  )
}

export default EditEvent
