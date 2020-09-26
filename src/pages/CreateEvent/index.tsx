import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import { createEvent } from '../../utils/text'
import EventForm from '../../components/EventForm'
import MainHeader from '../../components/MainHeader'
import { getLocalStorage } from '../../utils/authDataRepository'
import ErrorNotification from '../../components/ErrorNotification'
import MainImg from '../../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
import { CreateEventContainer,  } from './styles'

const CreateEvent: React.FC = () => {
  const { title, subtitle, formMainHeading1, formMealHeading2, formEventHeading2 } = createEvent

  const [lastUrl, setLastUrl] = useState('')
  
  useEffect(() => {
    let lastUrl = getLocalStorage('lastUrl')
    
    lastUrl && setLastUrl(lastUrl)
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
