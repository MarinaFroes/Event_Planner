import React from 'react'
import styled from 'styled-components'

import MainHeader from './MainHeader'
import EventForm from './EventForm'
import MainImg from '../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
import { createEvent } from '../utils/text'

const CreateEventContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
`

const CreateEvent: React.FC = () => {
  
  return (
    <CreateEventContainer>
      <MainHeader
        title={createEvent.title}
        subtitle={createEvent.subtitle}
        imageUrl={MainImg}
      />
      
      <EventForm
        heading1={createEvent.formHeading1}
        heading2="" 
        showImage={true}
        primaryBtn={true}
        btnText="Create Event"
      />
          
    </CreateEventContainer>
  )
}

export default CreateEvent
