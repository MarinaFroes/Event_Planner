import React, { useEffect, useState } from 'react'

import Btn from '../../components/Btn'
import { editEvent } from '../../utils/text'
import Header from '../../components/Header'
import EventForm from '../../components/EventForm'
import ShowGuests from '../../components/ShowGuests'
import { useDispatch, useSelector } from 'react-redux'
import { EditEventContainer, AlertButton } from './styles'
import { RouteComponentProps, Link } from 'react-router-dom'
import { AppState } from '../../types/reduxTypes'
import { EventData, Guest, TParams } from '../../types'
import { handleSelectEvent } from '../../redux/actions/eventActions'
import EventImg from '../../assets/images/edgar-castrejon-bG5rhvRH0JM-unsplash.jpg'

const EditEvent: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const [showInviteLink, setShowInviteLink] = useState(false)

  let isLoggedIn: boolean = useSelector(
    (state: AppState) => state.user.isLoggedIn
  )

  let selectedEvent: EventData | null = useSelector(
    (state: AppState) => state.event.selectedEvent
  )

  let guests: Guest[] = []
  if (selectedEvent) {
    guests = selectedEvent.guestInEvents
  }

  const dispatch = useDispatch()
  let eventId = match.params.eid //get id from param

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(handleSelectEvent(eventId))
    }
  }, [dispatch, isLoggedIn, eventId])

  if (selectedEvent !== null) {
    return (
      <EditEventContainer>
        <Header
          title={`${
            selectedEvent.title[0].toUpperCase() + selectedEvent.title.slice(1)
          } Details`}
          subtitle={editEvent.subtitle}
          imageSrc={EventImg}
        />

        <EventForm
          heading1={editEvent.formHeading1}
          heading2={editEvent.formHeading2}
          primaryBtn={false}
          btnText='Save updates'
        />

        <Btn
          primaryBtn={true}
          btnText={showInviteLink ? 'Hide invite link' : 'Get invite link'}
          btnType='submit'
          onClick={() => setShowInviteLink(!showInviteLink)}
        />
        {showInviteLink && (
          <>
            <p>Your friends can subscribe to the event using the link below:</p>
            <Link
              to={`/invite/${eventId}`}
            >{`localhost:3000/invite/${eventId}`}</Link>
          </>
        )}
        <AlertButton
          onClick={() => {
            window.confirm('Are you sure you want to cancel this event?')
          }}
        >
          Cancel event
        </AlertButton>
        {guests.length > 0 ? (
          <ShowGuests guests={guests} />
        ) : (
          <p>You don't have any guests</p>
        )}
      </EditEventContainer>
    )
  }
  return <p>No selected event</p>
}

export default EditEvent
