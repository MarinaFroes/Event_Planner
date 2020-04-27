import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import jwt_decode from 'jwt-decode'

import MainHeader from './MainHeader'
import EventForm from './EventForm'
import MainImg from '../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
import { createEvent } from '../utils/text'

const CreateEventContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
`

const CreateEvent: React.FC<any> = ({ location }) => {
  const { title, subtitle, formMainHeading1, formMealHeading2, formEventHeading2 } = createEvent
  
  useEffect(() => {
    const values = queryString.parse(location.search) || []
    const { access_token, id_token } = values
    console.log(values)
    
    access_token && localStorage.setItem('access_token', JSON.stringify(access_token))

    id_token && localStorage.setItem('id_token', JSON.stringify(id_token))
   
    const authedUserData = jwt_decode(JSON.stringify(id_token) || "")

    authedUserData && localStorage.setItem('authedUserData', JSON.stringify(authedUserData))
    
  }, [location])
  
  return (
    <CreateEventContainer>
      <MainHeader
        title={title}
        subtitle={subtitle}
        imageUrl={MainImg}
      />
      
      <EventForm
        heading1={formMainHeading1}
        heading2={formMealHeading2} 
        heading3=""
        heading4={formEventHeading2}
        showImage={true}
        primaryBtn={true}
        btnText="Create Event"
      />   
    </CreateEventContainer>
  )
}

export default CreateEvent
