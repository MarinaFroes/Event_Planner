import React from 'react'

import Btn from './Btn'
import Header from './Header'
import EventForm from './EventForm'
import EventImg from '../assets/images/kyle-head-WE-N1KDqEno-unsplash.jpg'
import GuestsInfo from './GuestsInfo'
import TextBox from './TextBox'

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
    <div>
      <Header title="My Birthday Details" subtitle={subtitle} imageUrl={EventImg} />
      <TextBox heading1={heading1} heading2={heading2} />
      <EventForm showImage={false} handleChange={e => console.log(e.target.value)} />
      <Btn primary={true} text="Get invite link" widthSize="300px" />
      <Btn primary={false} text="Notify updates" widthSize="300px" />
      <Btn primary={true} text="Cancel event and notify guests" widthSize="300px" />
      <GuestsInfo guests={guests}/>
    </div>
  )
}

export default EditEvent

/**
 * <h1 style={{ color: "var(--main-color-orange, #f07422)" }}>Create Event</h1>
    <h2 style={{ color: "var(--main-color-blue, #0c598a)"}}>This is the second heading</h2>
    <h3 style={{ color: "var(--main-color-red, #bd0b2b)" }}>This is the third heading</h3>
    <h4 style={{ color: "var(--main-color-grey, #eee)" }}>This is the fourth heading</h4>
    <p>This is a paragraph</p>
 */