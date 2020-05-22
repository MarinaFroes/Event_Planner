import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'

import Header from './core/Header'
import EventImg from '../assets/images/edgar-castrejon-bG5rhvRH0JM-unsplash.jpg'
import TextBox from './core/TextBox'
import Btn from './core/Btn'
import EventCard from './EventCard'
import { acceptInvite } from '../utils/text'
import { EventData, AppState } from '../store/types'
import { useSelector, useDispatch } from 'react-redux'
import { handleSelectEvent } from '../store/events/eventActions'
import { loginUrl } from '../services/authServices'
import { getLocalStorage, setLocalStorage } from '../utils/authDataRepository'

const AcceptInviteContainer = styled.div`
  background-color: var(--main-color-white, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EventInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  width: 100%;
 
  @media only screen and (min-width: 1080px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Image = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
  object-fit: cover;
`

const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color-grey, #eee);
  padding: 60px 0;
  width: 100%;
`

type TParams = {
  eid: string
}

const AcceptInvite: React.FC<RouteComponentProps<TParams>> = ({ match }) => {


  let selectedEvent: EventData | null = useSelector((state: AppState) => state.event.selectedEvent)
  const [imagePreview, setImagePreview] = useState('')
  
  const dispatch = useDispatch()
  let eventId = match.params.eid 

  useEffect(() => {
    
    dispatch(handleSelectEvent(eventId))
    
    let data = getLocalStorage('formData')
    data.imagePreview && setImagePreview(data.imagePreview)

    setLocalStorage('lastUrl', `/invite/${eventId}`)
  }, [dispatch, eventId])

  const addFallbackSrc = (event: any) => {
    event.target.src = "https://dummyimage.com/400x400/c4c4c4/ffffff.jpg&text=Add+meal+photo"
  }

  const { eventHeading1, eventHeading2, signUpHeading1, signUpHeading2 } = acceptInvite

  if (selectedEvent !== null) {
    const { title, host, subject, additionalInfo, maxNumberGuest, pricePerGuest, tasks, address, date } = selectedEvent
    console.log(imagePreview)
    return (
      <AcceptInviteContainer>
        <Header
          title={`${title[0].toUpperCase() + title.slice(1)} Details` }
          subtitle={`${host.name} invited you to take part on ${title}. Check the event info bellow.`}
          imageSrc={EventImg}
        />
        <EventInfoSection>
          <TextBox heading1={eventHeading1} heading2={eventHeading2} />
          {
            imagePreview
            && <Image
              onError={(e) => addFallbackSrc(e)}
              src={imagePreview}
              alt="meal photo"
            />
          }
          <EventCard 
            address={address}
            cost={pricePerGuest}
            participants={maxNumberGuest}
            tasks={tasks.length > 0 ? tasks : undefined}
            date={date.split(' ')[0]}
            time={date.split(' ')[1]}
            subjectName={subject.name}
            additionalInfo={additionalInfo}
          />
        </EventInfoSection>
        <SignUpSection>
          <TextBox heading1={signUpHeading1} heading2={signUpHeading2} />
          <Btn
            primaryBtn={true}
            btnText="Sign up"
            btnWidth="90%"
            btnType="button"
            onClick={() => {
              window.location.assign(loginUrl)
            }}
          />
        </SignUpSection>
      </AcceptInviteContainer>
    )
  }

  return <p>Event not found</p>
  
}

export default AcceptInvite

