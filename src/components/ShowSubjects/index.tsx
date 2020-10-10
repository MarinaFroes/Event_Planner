import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { FaPlus, FaSave } from 'react-icons/fa'

import TextBox from '../TextBox'
import { useSelector } from 'react-redux'
import { myEvents } from '../../utils/text'
import { AppState, SubjectState } from '../../types/reduxTypes'
import {
  SubjectsContainer,
  MealsList,
  MealItem,
  AddNew,
  IconBtn,
  PlusIconBtn,
  Input,
} from './styles'

const ShowSubjects: React.FC = () => {
  const [showInputSubject, setShowInputSubject] = useState(false)
  const [newSubject, setNewSubject] = useState('')
  const subjectState: SubjectState = useSelector(
    (state: AppState) => state.subject
  )

  const updateSubject = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewSubject(event.target.value)

  const createSubject = () => console.log('create subject: ' + newSubject)

  return (
    <SubjectsContainer>
      <TextBox
        heading1={myEvents.subjectTitle}
        heading2={myEvents.subjectSubtitle}
      />
      <div style={{ maxWidth: '700px' }}>
        <MealsList>
          {subjectState.length > 0 &&
            subjectState.map((subject) => (
              <MealItem key={subject.id}>
                <Input
                  id={subject.id}
                  name='subjectName'
                  value={subject.name}
                  readOnly
                />
                <IconBtn
                  isBlue={false}
                  onClick={() =>
                    console.log(`delete subject with id: ${subject.id}`)
                  }
                >
                  <TiDelete />
                </IconBtn>
              </MealItem>
            ))}
          {showInputSubject && (
            <MealItem>
              <Input
                name='subjectName'
                value={newSubject}
                onChange={updateSubject}
                required
              />
              <IconBtn isBlue={true} onClick={() => createSubject()}>
                <FaSave />
              </IconBtn>
            </MealItem>
          )}
        </MealsList>
        {!showInputSubject && (
          <AddNew>
            <p>Add new meal</p>
            <PlusIconBtn
              isBlue={true}
              onClick={() => setShowInputSubject(true)}
            >
              <FaPlus />
            </PlusIconBtn>
          </AddNew>
        )}
      </div>
    </SubjectsContainer>
  )
}

export default ShowSubjects
