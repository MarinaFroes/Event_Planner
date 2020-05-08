import React from 'react'
import { useSelector } from 'react-redux'
import { UserState } from '../store/users/types'
import { AppState } from '../store/types'
import { EventState } from '../store/events/types'


const ViewUser: React.FC = () => {
  let userName: string = ''
  
  const user: UserState = useSelector((state: AppState) => state.user)
  const eventState: EventState = useSelector((state: AppState) => state.event)
  console.log('eventState', eventState)

  if (user.isLoggedIn) {
    userName = user.user.name
  }

  return (
      <div>
        <p>{userName}, here are your events</p>
      </div>
    );
}

export default ViewUser