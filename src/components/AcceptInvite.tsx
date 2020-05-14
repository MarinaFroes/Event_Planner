import React from 'react'
import styled from 'styled-components'

import Header from './core/Header'
import EventImg from '../assets/images/edgar-castrejon-bG5rhvRH0JM-unsplash.jpg'
import TextBox from './core/TextBox'
import Btn from './core/Btn'
import EventCard from './EventCard'
import { acceptInvite } from '../utils/text'

const AcceptInviteContainer = styled.div`
  background-color: var(--main-color-white, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EventInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  width: 100%;
 
  @media only screen and (min-width: 1080px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color-grey, #eee);
  padding: 60px 0;
  width: 100%;
`

interface Task {
  id: string;
  details: string;
  owner: string;
  eventId: string;
}

const AcceptInvite: React.FC = () => {
  

  const tasks: Task[] = [
    {
      id: "task1",
      details: "Bring soda",
      owner: "",
      eventId: "11332252452453453"
    },
    {
      id: "task2",
      details: "Buy balloons",
      owner: "",
      eventId: "11332252452453453"
    },
    {
      id: "task3",
      details: "Buy disposable dishes and forks",
      owner: "",
      eventId: "11332252452453453"
    },
    {
      id: "task4",
      details: "Buy disposable glasses",
      owner: "",
      eventId: "11332252452453453"
    }
  ]

  const eventText = {
    description: "Chocolate cake",
    additionalInfo: "Snacks and drinks are included",
    location: "Bundesallee 198A",
    date: "04/26/2020",
    time: "19:00",
    participants: 5,
    cost: 20.00,
    tasks: tasks,
  }
  const { eventName, subtitle, eventHeading1, eventHeading2, signUpHeading1, signUpHeading2 } = acceptInvite
  
  return (
    <AcceptInviteContainer>
      <Header
        title={eventName}
        subtitle={subtitle}
        imageUrl={EventImg}
      />
      <EventInfoSection>
        <TextBox heading1={eventHeading1} heading2={eventHeading2} />
        <EventCard eventText={eventText} />
      </EventInfoSection>
      <SignUpSection>
        <TextBox heading1={signUpHeading1} heading2={signUpHeading2} />
        <Btn
          primaryBtn={true}
          btnText="Sign up"
          btnWidth="90%"
          btnType="button"
        />
      </SignUpSection>
    </AcceptInviteContainer>
  )
}

export default AcceptInvite

