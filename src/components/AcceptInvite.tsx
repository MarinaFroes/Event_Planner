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

const Content = styled.div`
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

// const TasksContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   font-size: 16px;
// `

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color-grey, #eee);
  padding: 60px 0;
  width: 100%;
`

interface Task {
  id: string,
  details: string,
  owner: string,
  eventId: string
}

const AcceptInvite: React.FC = () => {
  const eventName = "My Birthday"
  const subtitle = "You were invited to take part on My Birthday. Check the event info below:"
  const heading1 = "Check the event info and select a task"
  const heading2 = "If the host defined tasks for the guests, here you can select which one you want to do. Don't worry, they're optional."
  const heading3 = "Sign up to accept the invite"
  const heading4 = "After accepting the invite, the host will be notified. If the host confirms your participation on the event or updates any event info, you will receive a notification by email."

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
      <Content>

        <TextBox heading1={heading1} heading2={heading2} />
        
          <EventCard eventText={eventText} />
      
        
        {/* <TasksContainer>
          <h2>Tasks</h2>
          {
            tasks.map((task: Task) => (
              <label>
                <input type="radio" key={task.id} name="tasks" id={task.id} value={task.id} />
                {task.details}
              </label>
            ))
          }
        </TasksContainer> */}
      
      </Content>
      <Section2>
        <TextBox heading1={heading3} heading2={heading4} />
        <Btn
          primaryBtn={true}
          btnText="Sign up"
          btnWidth="90%"
        />
      </Section2>
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