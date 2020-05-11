import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserState } from '../store/users/types'
import { AppState } from '../store/types'
import { EventState } from '../store/events/types'
import * as authService from '../services/authServices'
import { handleGetEvents } from '../store/events/eventActions'
import EventCard from './EventCard'


const ViewUser: React.FC = () => {
  let userName: string = ''
  
  const user: UserState = useSelector((state: AppState) => state.user)
  const eventState: EventState = useSelector((state: AppState) => state.event)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const tokens = authService.getTokens(window.location)
    if (tokens !== null) {
      dispatch(handleGetEvents())
    }
  }, [dispatch])

  if (user.isLoggedIn) {
    userName = user.user.name
  }
  
  return (
      <div>
      <p>{userName}, here are your events</p>

      {
        eventState.length === 0 &&
        <p>You don't have any event yet</p>
      }
      {
        eventState.length > 0 &&
        eventState.map(eventInfo => {
          const eventText = {
            description: eventInfo.title,
            location: eventInfo.address,
            date: eventInfo.address,
            time: eventInfo.address,
            participants: eventInfo.maxNumberGuest,
            cost: eventInfo.pricePerGuest,
          }
          return (<EventCard
            key={eventInfo.id}
            eventText={eventText}
          />
          )
        })
      }
      </div>
    );
}

export default ViewUser