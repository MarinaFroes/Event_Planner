import * as subjectService from '../../services/subjectServices'
import { SubjectInfo, AppThunk, Subject } from '../types'
import { CREATE_SUBJECT, SubjectActionTypes, RECEIVE_SUBJECTS, SubjectsFromServer, Subjects } from './types'


export const createSubjectAction = (subject: Subject): SubjectActionTypes => {
  return {
    type: CREATE_SUBJECT,
    payload: subject
  }
}

export const receiveSubjectsAction = (subjects: Subjects): SubjectActionTypes => {
  return { 
    type: RECEIVE_SUBJECTS,
    payload: subjects
  }
}

export const handleCreateSubject = (
  subjectInput: SubjectInfo
): AppThunk => async (dispatch) => {
  try {
    const subjectId = await subjectService.createSubject(subjectInput)
    const subjectData: Subject = await subjectService.getSubject(subjectId)
    dispatch(createSubjectAction(subjectData))
  } catch (err) {
    console.log(err)
  }
}

export const handleGetSubjects = (): AppThunk => async (dispatch, getState) => {
  try {
    const { user } = getState()
    let userId = ''
    if (user.isLoggedIn) {
      userId = user.user.id
    }
    const subjects: SubjectsFromServer = await subjectService.getSubjects(userId)

    dispatch(receiveSubjectsAction(subjects.items))
  } catch (err) {
    console.log(err)
  }
}