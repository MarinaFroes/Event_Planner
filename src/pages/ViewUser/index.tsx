import React, { useEffect } from 'react'

import { myEvents } from '../../utils/text'
import { AppState } from '../../store/types'
import ShowEvents from '../../components/ShowEvents'
import MainHeader from '../../components/MainHeader'
import { useDispatch, useSelector } from 'react-redux'
import ShowSubjects from '../../components/ShowSubjects'
import { handleGetEvents } from '../../store/events/eventActions'
import ErrorNotification from '../../components/ErrorNotification'
import SuccessNotification from '../../components/SuccessNotification'
import HeaderImg from '../../assets/images/kelsey-chance-ZrhtQyGFG6s-unsplash.jpg'

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
