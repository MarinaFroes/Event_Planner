import React, { useEffect } from 'react'
import ShowEvents from '../components/ShowEvents'
import MainHeader from '../components/MainHeader'
import HeaderImg from '../assets/images/kelsey-chance-ZrhtQyGFG6s-unsplash.jpg'
import ShowSubjects from '../components/ShowSubjects'
import { myEvents } from '../utils/text'
import ErrorNotification from '../components/ErrorNotification'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetEvents } from '../store/events/eventActions'
import { AppState } from '../store/types'
import SuccessNotification from '../components/SuccessNotification'

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
        imageSrc={HeaderImg}
      />
      <ErrorNotification />
      <SuccessNotification />
      <ShowEvents status="open" />
      <ShowEvents status="closed" />
      <ShowSubjects />
      </div>
    );
}

export default ViewUser
