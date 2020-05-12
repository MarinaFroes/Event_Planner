import React from 'react'
import ShowEvents from './ShowEvents'
import MainHeader from './core/MainHeader'
import HeaderImg from '../assets/images/kelsey-chance-ZrhtQyGFG6s-unsplash.jpg'
import ShowSubjects from './ShowSubjects'
import { myEvents } from '../utils/text'

const ViewUser: React.FC = () => {

  return (
    <div>
      <MainHeader
        title={myEvents.headerTitle}
        subtitle={myEvents.headerSubtitle}
        imageUrl={HeaderImg}
      />
      <ShowEvents status="open" />
      <ShowEvents status="closed" />
      <ShowSubjects />
      </div>
    );
}

export default ViewUser
