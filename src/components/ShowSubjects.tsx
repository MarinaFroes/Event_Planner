import React from 'react'
import styled from 'styled-components'

import TextBox from './core/TextBox'
// import { AppState, Subject } from '../store/types'
// import { useSelector } from 'react-redux'
// import { SubjectState } from '../store/subjects/types'

const SubjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: var(--main-color-grey, #eee);
  padding: 20px;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`

const ShowSubjects: React.FC = () => {

  // const subjectState: SubjectState = useSelector((state: AppState) => state.event)

  const heading1 = 'My Meal List'
  const heading2 = 'Here you can manage your meal list, adding new meals for future events or deleting old ones.'

  const subjects = [
    {
      name: 'Feijoada'
    },
    {
      name: 'Cuxa Rice'
    },
    {
      name: 'Caranguejada'
    },
    {
      name: 'Chocolate cake'
    },
    {
      name: 'Pulled Turkey'
    }
  ]

  return (
    <SubjectsContainer>
      <TextBox heading1={heading1} heading2={heading2} />
      <div style={{ maxWidth: "700px" }}>
        <Cards>
          {
            subjects.map(subject => <p style={{backgroundColor: "white", margin: "1rem"}}>{subject.name}</p>)
          }
        </Cards>
      </div>
    </SubjectsContainer>
  )
}

export default ShowSubjects