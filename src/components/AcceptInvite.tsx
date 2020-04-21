import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import EventImg from '../assets/images/tuva-mathilde-loland-4rfVL3NNGrA-unsplash.jpg'
import TextBox from './TextBox'
import Btn from './Btn'
import EventCard from './EventCard'

const AcceptInviteContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;


  @media only screen and (min-width: 1024px){
    flex-direction: row;
  }
`

const TasksContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`

const AcceptInvite: React.FC = () => {
  const eventName = "My Birthday"
  const subtitle = "You were invited to take part on My Birthday. Check the event info below:"
  const heading1 = "Sign up to accept the invite"
  const heading2 = "After accepting the invite, the host will be notified. If the host confirms your participation on the event or updates any event info, you will receive a notification by email."
  const eventText = {
    description: "Chocolate cake",
    additionalInfo: "Snacks and drinks are included",
    location: "Bundesallee 198A",
    date: "04/26/2020",
    time: "19:00",
    participants: 5,
    cost: 20.00
  }
  const tasks = [
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
      id: "task1",
      details: "Buy disposable glasses",
      owner: "",
      eventId: "11332252452453453"
    }
  ]

  return (
    <AcceptInviteContainer>
      <Header
        title={eventName}
        subtitle={subtitle}
        imageUrl={EventImg}
      />
      <Content>

        {/* <TextBox heading1={heading1} heading2={heading2} /> */}
        <div>
          <h2>Event info</h2>
          <EventCard eventText={eventText} />
        </div>
        
        
        <TasksContainer>
          <h2>Tasks</h2>
          <label>
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
        </TasksContainer>
      
      </Content>
      <div>
        <TextBox heading1={heading1} heading2={heading2} />
        <Btn
          primaryBtn={true}
          btnText="Register to the event"
          btnWidth="90%"
        />
      </div>
    </AcceptInviteContainer>
  )
}

export default AcceptInvite
