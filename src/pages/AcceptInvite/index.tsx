import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Header from '../../components/Header'
import EventImg from '../../assets/images/edgar-castrejon-bG5rhvRH0JM-unsplash.jpg'
import TextBox from '../../components/TextBox'
import Btn from '../../components/Btn'
import EventCard from '../../components/EventCard'
import { acceptInvite } from '../../utils/text'
import { AppState, UserState } from '../../types/reduxTypes'
import { EventData } from '../../types'
import { useSelector, useDispatch } from 'react-redux'
import {
  handleSelectEvent,
  handleSubscribe,
} from '../../redux/actions/eventActions'
import { loginUrl } from '../../services/authServices'
import {
  getLocalStorage,
  setLocalStorage,
} from '../../utils/authDataRepository'
import ErrorNotification from '../../components/ErrorNotification'
import SuccessNotification from '../../components/SuccessNotification'
import {
  AcceptInviteContainer,
  EventInfoSection,
  Image,
  SignUpSection,
} from './styles'

type TParams = {
  eid: string
}

const AcceptInvite: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const [subscribe, setSubscribe] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [imagePreview, setImagePreview] = useState('')

  let userId: string = ''

  const userState: UserState = useSelector((state: AppState) => state.user)
  if (userState.isLoggedIn) {
    userId = userState.user.id
  }
  let selectedEvent: EventData | null = useSelector(
    (state: AppState) => state.event.selectedEvent
  )

  const dispatch = useDispatch()
  let eventId = match.params.eid

  useEffect(() => {
    dispatch(handleSelectEvent(eventId))

    let data = getLocalStorage('formData')
    data.imagePreview && setImagePreview(data.imagePreview)

    localStorage.removeItem('lastUrl')
  }, [dispatch, eventId])

  useEffect(() => {
    if (subscribe) {
      dispatch(handleSubscribe(eventId))
      setIsSubscribed(true)
    }
  }, [dispatch, subscribe, eventId])

  const addFallbackSrc = (event: any) => {
    event.target.src =
      'https://dummyimage.com/400x400/c4c4c4/ffffff.jpg&text=Add+meal+photo'
  }

  const {
    eventHeading1,
    eventHeading2,
    signUpHeading1,
    signUpHeading2,
    subscribeHeading1,
    subscribeHeading2,
  } = acceptInvite

  if (isSubscribed) {
    return <Redirect to={`/users/${userId}`} />
  }

  if (selectedEvent !== null) {
    const {
      title,
      host,
      subject,
      additionalInfo,
      maxNumberGuest,
      pricePerGuest,
      tasks,
      address,
      date,
    } = selectedEvent

    return (
      <AcceptInviteContainer>
        <Header
          title={`${title[0].toUpperCase() + title.slice(1)} Details`}
          subtitle={`${host.name} invited you to take part on ${title}. Check the event info bellow.`}
          imageSrc={EventImg}
        />
        <ErrorNotification />
        <SuccessNotification />
        <EventInfoSection>
          <TextBox heading1={eventHeading1} heading2={eventHeading2} />
          {imagePreview && (
            <Image
              onError={(e) => addFallbackSrc(e)}
              src={imagePreview}
              alt='meal photo'
            />
          )}
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
        {userState.isLoggedIn ? (
          <SignUpSection>
            <TextBox
              heading1={subscribeHeading1}
              heading2={subscribeHeading2}
            />
            <Btn
              primaryBtn={true}
              btnText='Subscribe to event'
              btnWidth='90%'
              btnType='button'
              onClick={() => setSubscribe(true)}
            />
          </SignUpSection>
        ) : (
          <SignUpSection>
            <TextBox heading1={signUpHeading1} heading2={signUpHeading2} />
            <Btn
              primaryBtn={true}
              btnText='Sign up'
              btnWidth='90%'
              btnType='button'
              onClick={() => {
                setLocalStorage('lastUrl', `/invite/${eventId}`)
                window.location.assign(loginUrl)
              }}
            />
          </SignUpSection>
        )}
        {isSubscribed && <p>You subscribed for this event</p>}
      </AcceptInviteContainer>
    )
  }

  return <p>Event not found</p>
}

export default AcceptInvite
