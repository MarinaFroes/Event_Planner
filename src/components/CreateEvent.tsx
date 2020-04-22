import React from 'react'
import styled from 'styled-components'

import MainHeader from './MainHeader'
import EventForm from './EventForm'
import MainImg from '../assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
// import { saveEvent } from '../utils/data'

const CreateEventContainer = styled.div`
  background-color: var(--main-color-grey, #eee);
`
interface User {
  id: string,
  name: string, 
  email: string
}

const CreateEvent: React.FC = () => {
  
  // const [ users, setUsers ] = useState<[User]>()

  const title = "Event Planner"
  const subtitle = "Event planner is an easy way to create events and invite friends, sharing the costs and the tasks."
  const heading1 = "Add your event info"

  // useEffect(() => {
  //   getUsers().then(res => setUsers(res))
  // }, [])
  
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
