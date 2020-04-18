import React from 'react'
import styled from 'styled-components'

import Btn from './Btn'
import Header from './Header'
import EventForm from './EventForm'
import MainImg from '../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
import TextBox from './TextBox'

const CreateEventContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
  padding: 20px 0;
`

const CreateEvent: React.FC = () => {
  const subtitle = "Event planner is an easy way to create events and invite friends, sharing the costs and the tasks."
  const heading1 = "Add your event info"
  return (
    <CreateEventContainer>
      <Header title="Event Planner" subtitle={subtitle} imageUrl={MainImg} />
      <TextBox heading1={heading1} heading2="" />
      <EventForm showImage={true} handleChange={e => console.log(e.target.value)}/>
      <Btn primary={true} text="Create Event" widthSize="300px"/>      
    </CreateEventContainer>
  )
}

export default CreateEvent

  /**
   * <h1 style={{ color: "var(--main-color-orange, #f07422)" }}>Create Event</h1>
      <h2 style={{ color: "var(--main-color-blue, #0c598a)"}}>This is the second heading</h2>
      <h3 style={{ color: "var(--main-color-red, #bd0b2b)" }}>This is the third heading</h3>
      <h4 style={{ color: "var(--main-color-grey, #eee)" }}>This is the fourth heading</h4>
      <p>This is a paragraph</p>
   */