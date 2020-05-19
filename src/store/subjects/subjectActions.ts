import * as subjectService from '../../services/subjectServices'
import { SubjectInfo, AppThunk, Subject } from '../types'
import { CREATE_SUBJECT_SUCCESS, SubjectActionTypes, RECEIVE_SUBJECTS_SUCCESS, SubjectsFromServer, Subjects, CREATE_SUBJECT_REQUEST, CREATE_SUBJECT_ERROR, RECEIVE_SUBJECTS_REQUEST, RECEIVE_SUBJECTS_ERROR } from './types'

//  Create Subject Action Creators
export const createSubjectRequest = (): SubjectActionTypes => {
  return {
    type: CREATE_SUBJECT_REQUEST
  }
}

export const createSubjectSuccess = (subject: Subject): SubjectActionTypes => {
  return {
    type: CREATE_SUBJECT_SUCCESS,
    payload: subject
  }
}

export const createSubjectError = (error: string): SubjectActionTypes => {
  return {
    type: CREATE_SUBJECT_ERROR,
    error
  }
}

export const handleCreateSubject = (
  subjectInput: SubjectInfo
): AppThunk => async (dispatch) => {
  dispatch(createSubjectRequest())

  try {
    const subjectId = await subjectService.createSubject(subjectInput)
    const subjectData: Subject = await subjectService.getSubject(subjectId)
    dispatch(createSubjectSuccess(subjectData))
  } catch (err) {
    dispatch(createSubjectError(err.message))
  }
}

// Receive Subjects Action Creators
export const receiveSubjectsRequest = (): SubjectActionTypes => {
  return {
    type: RECEIVE_SUBJECTS_REQUEST
  }
}

export const receiveSubjectsAction = (subjects: Subjects): SubjectActionTypes => {
  return {
    type: RECEIVE_SUBJECTS_SUCCESS,
    payload: subjects
  }
}

export const receiveSubjectsError = (error: string): SubjectActionTypes => {
  return {
    type: RECEIVE_SUBJECTS_ERROR,
    error
  }
}

export const handleGetSubjects = (): AppThunk => async (dispatch, getState) => {
  dispatch(receiveSubjectsRequest())

  try {
    const { user } = getState()
    let userId = ''
    if (user.isLoggedIn) {
      userId = user.user.id
    }
    const subjects: SubjectsFromServer = await subjectService.getSubjects(userId)

    dispatch(receiveSubjectsAction(subjects.items))
  } catch (err) {
    dispatch(receiveSubjectsError(err.message))
  }
}