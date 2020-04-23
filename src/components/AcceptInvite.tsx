import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import EventImg from '../assets/images/tuva-mathilde-loland-4rfVL3NNGrA-unsplash.jpg'
import TextBox from './TextBox'
import Btn from './Btn'
import EventCard from './EventCard'

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
  const eventName = "My Birthday"
  const subtitle = "You were invited to take part on My Birthday. Check the event info below:"
  const eventHeading1 = "Check the event info and select a task"
  const eventHeading2 = "If the host defined tasks for the guests, here you can select which one you want to do. Don't worry, they're optional."
  const signUpHeading1 = "Sign up to accept the invite"
  const signUpHeading2 = "After accepting the invite, the host will be notified. If the host confirms your participation on the event or updates any event info, you will receive a notification by email."

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


/**
 * <label>
            <input type="radio" key={tasks[0].id} name="tasks" id={tasks[0].id} value={tasks[0].id}/>
            {tasks[0].details}
          </label>
          <label>
            <input type="radio" key={tasks[1].id} name="tasks" id={tasks[1].id} value={tasks[1].id}/>
            {tasks[1].details}
          </label>
          <label>
            <input type="radio" key={tasks[2].id} name="tasks" id={tasks[2].id} value={tasks[2].id}/>
            {tasks[2].details}
          </label>
          <label>
            <input type="radio" key={tasks[3].id} name="tasks" id={tasks[3].id} value={tasks[3].id}/>
            {tasks[3].details}
          </label>
 */