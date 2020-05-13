import React, { useState } from 'react'
import styled from 'styled-components'
import { TiDelete } from 'react-icons/ti'
import { FaPlus, FaSave } from 'react-icons/fa'

import TextBox from './core/TextBox'
import { AppState } from '../store/types'
import { useSelector } from 'react-redux'
import { SubjectState } from '../store/subjects/types'
import { myEvents } from '../utils/text'

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

const MealsList = styled.ul`
  display: flex;
  flex-direction: column;
`

const MealItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 300px;
`

const AddNew = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 0 0 5px;
  width: 100%;
  max-width: 300px;
`

const IconBtn = styled.button<{ isBlue: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-white, #fff);
  color: ${props => props.isBlue ? "var(--main-color-blue, #0c598A)" : "var(--main-color-red, #bd0b2b)"};
  height: 40px;
  width: 40px;
  cursor: pointer;
  border: 1px solid #c4c4c4;
  border-left: none;
  border-radius: 0 5px 5px 0;
  font-size: 22px;
`

const PlusIconBtn = styled(IconBtn)`
  border: none;
  background-color: var(--main-color-grey, #eee);
`

const Input = styled.input`
  font-size: 16px;
  background-color: var(--main-color-white, #fff);
  color: var(--main-color-black, #000);
  border: 1px solid #c4c4c4;
  border-right: none;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px 0 0 5px;
  width: 100%;
  height: 40px;
`

const ShowSubjects: React.FC = () => {
  const [count, setCount] = useState(0)
  const [newSubject, setNewSubject] = useState('')
  const subjectState: SubjectState = useSelector((state: AppState) => state.subject)
  
  const updateSubject = (event: React.ChangeEvent<HTMLInputElement>) => setNewSubject(event.target.value)
  
  const createSubject = () => console.log('create subject: ' + newSubject)

  return (
    <SubjectsContainer>
      <TextBox heading1={myEvents.subjectTitle} heading2={myEvents.subjectSubtitle} />
      <div style={{ maxWidth: "700px" }}>
        <MealsList>
          { subjectState.length > 0 &&
            subjectState.map(subject =>
              
              <MealItem key={subject.id}>
                <Input
                  id={subject.id}
                  name="subjectName"
                  value={subject.name}
                  readOnly
                />
                <IconBtn
                  isBlue={false}
                  onClick={() => console.log(`delete subject with id: ${subject.id}`)}>
                  <TiDelete />
                </IconBtn>
              </MealItem>
            )
          }
          {
            count === 1 && (
            <MealItem>
              <Input
                name="subjectName"
                value={newSubject}
                onChange={updateSubject}
                required
              />
                <IconBtn
                  isBlue={true}
                  onClick={() => createSubject()}>
                <FaSave />
              </IconBtn>
            </MealItem>
          )}
        </MealsList>
        {count === 0 && (
          <AddNew>
            <p>Add new meal</p>
            <PlusIconBtn
              isBlue={true}
              onClick={() => count === 0 && setCount(count + 1)}>
              <FaPlus />
            </PlusIconBtn>
          </AddNew>
        )}
        
      </div>
    </SubjectsContainer>
  )
}

export default ShowSubjects