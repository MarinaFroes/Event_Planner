import React, { useEffect } from 'react'
import ShowEvents from './ShowEvents'
import MainHeader from './core/MainHeader'
import HeaderImg from '../assets/images/kelsey-chance-ZrhtQyGFG6s-unsplash.jpg'
import ShowSubjects from './ShowSubjects'
import { myEvents } from '../utils/text'
import ErrorNotification from './core/ErrorNotification'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetEvents } from '../store/events/eventActions'
import { AppState } from '../store/types'

const ViewUser: React.FC = () => {
  
  let isLoggedIn: boolean = useSelector((state: AppState) => state.user.isLoggedIn)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(handleGetEvents())
    }
  }, [dispatch, isLoggedIn])

  return (
    <div>
      <MainHeader
        title={myEvents.headerTitle}
        subtitle={myEvents.headerSubtitle}
        imageUrl={HeaderImg}
      />
      <ErrorNotification />
      <ShowEvents status="open" />
      <ShowEvents status="closed" />
      <ShowSubjects />
      </div>
    );
}

export default ViewUser
