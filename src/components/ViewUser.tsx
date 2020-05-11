import React from 'react'
import { useSelector } from 'react-redux'
import { UserState } from '../store/users/types'
import { AppState } from '../store/types'
import { EventState } from '../store/events/types'
import EventCard from './EventCard'


const ViewUser: React.FC = () => {
  let userName: string = ''
  
  const user: UserState = useSelector((state: AppState) => state.user)
  const eventState: EventState = useSelector((state: AppState) => state.event)

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
            date: eventInfo.date.split(' ')[0],
            time: eventInfo.date.split(' ')[1],
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