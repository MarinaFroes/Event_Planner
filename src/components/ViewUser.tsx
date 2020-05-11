import React from 'react'
import ShowEvents from './ShowEvents'
import MainHeader from './core/MainHeader'
import HeaderImg from '../assets/images/kelsey-chance-ZrhtQyGFG6s-unsplash.jpg'
import ShowSubjects from './ShowSubjects'

const ViewUser: React.FC = () => {

  return (
    <div>
      <MainHeader
        title="My events"
        subtitle="Here you can check all your past and upcoming event, as well as your meals list. Click on the event to see details."
        imageUrl={HeaderImg}
      />
      <ShowEvents status="open" />
      <ShowEvents status="closed" />
      <ShowSubjects />
      </div>
    );
}

export default ViewUser
