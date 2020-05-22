import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import MainHeader from './core/MainHeader'
import EventForm from './EventForm'
import MainImg from '../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
import { createEvent } from '../utils/text'
import ErrorNotification from './core/ErrorNotification'
import { getLocalStorage } from '../utils/authDataRepository'
import { Redirect } from 'react-router-dom'

const CreateEventContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
`

const CreateEvent: React.FC = () => {
  const { title, subtitle, formMainHeading1, formMealHeading2, formEventHeading2 } = createEvent

  const [lastUrl, setLastUrl] = useState('')
  
  useEffect(() => {
    let lastUrl = getLocalStorage('lastUrl')
    console.log(lastUrl)
    if (lastUrl) {
      setLastUrl(lastUrl)
    }
  }, [])

  if (lastUrl) {
    return <Redirect to={lastUrl} />
  }
  
  return (
    <CreateEventContainer>
      <MainHeader
        title={title}
        subtitle={subtitle}
        imageSrc={MainImg}
      />
      <EventForm
        heading1={formMainHeading1}
        heading2={formMealHeading2} 
        heading3=""
        heading4={formEventHeading2}
        primaryBtn={true}
        btnText="Create Event"
      />  
      <ErrorNotification />
    </CreateEventContainer>
  )
}

export default CreateEvent
