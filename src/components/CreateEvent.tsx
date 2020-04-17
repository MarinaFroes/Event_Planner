import React from 'react'

import Btn from './Btn'
import Header from './Header'
import EventForm from './EventForm'
import MainImg from '../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'

const CreateEvent: React.FC = () => {
  const subtitle = "Event planner is an easy way to create events and invite friends, sharing the costs and the tasks."
  return (
    <div>
      <Header title="Event Planner" subtitle={subtitle} imageUrl={MainImg}/>
      <EventForm handleChange={e => console.log(e.target.value)}/>
      <Btn primary={true} text="Create Event" widthSize="300px"/>
      <Btn primary={false} text="Edit Event" widthSize="300px"/>
      <h1 style={{ color: "var(--main-color-orange, #f07422)" }}>Create Event</h1>
      <h2 style={{ color: "var(--main-color-blue, #0c598a)"}}>This is the second heading</h2>
      <h3 style={{ color: "var(--main-color-red, #bd0b2b)" }}>This is the third heading</h3>
      <h4 style={{ color: "var(--main-color-grey, #eee)" }}>This is the fourth heading</h4>
      <p>This is a paragraph</p>
    </div>
  )
}

export default CreateEvent
