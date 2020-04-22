import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import MainHeader from './MainHeader'
import EventForm from './EventForm'
import MainImg from '../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
import { getUsers } from '../utils/data'

const CreateEventContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
`
interface User {
  id: string,
  name: string, 
  email: string
}

// interface Users {
//   users: User[] | null;
// }

const CreateEvent: React.FC = () => {
  // const [state, setState] = useState(initialState);
  const [ users, setUsers ] = useState<[User]>()
 // const [name, useName] = useState<TextNode>({name: ""});
  const title = "Event Planner"
  const subtitle = "Event planner is an easy way to create events and invite friends, sharing the costs and the tasks."
  const heading1 = "Add your event info"

  
  // const getUsers = async () => {
  //   const response = await fetch("http://localhost:8080/users")
  //   const data = await response.json()
  //   console.log(data)
  //   // setUsers(data)
  // }

  useEffect(() => {
    getUsers().then(res => setUsers(res))
  }, [])
  
  // const usersExample = [
  //   {
  //   id: "marinaId",
  //   name: "Marina",
  //   email: "marina@mail.com"
  //   }
  // ]

  console.log(users)
  
  // console.log(users)

  return (
    <CreateEventContainer>
      <MainHeader
        title={title}
        subtitle={subtitle}
        imageUrl={MainImg}
      />
      
      <EventForm
        heading1={heading1}
        heading2="" 
        showImage={true}
        handleChange={e => console.log(e.target.value)}
        primaryBtn={true}
        btnText="Create Event"
      />
          
    </CreateEventContainer>
  )
}

export default CreateEvent
