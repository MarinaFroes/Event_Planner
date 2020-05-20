import * as subjectService from '../../services/subjectServices'
import * as formService from '../../services/formServices'
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

    if (subjectInput.imageUrl) {
      const saveImageLink = await subjectService.getSaveImageLink(subjectId)
      
      const imageBlob: Blob = formService.dataUrlToBlob(subjectInput.imageUrl)
      
      await subjectService.saveImage(saveImageLink, imageBlob)

      const imageLink: string = await subjectService.getImageLink(subjectId)
      
      if (imageLink) {
        subjectData.imageLink = imageLink
      }
    }
      
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
    const subjectsList: Subjects = subjects.items

    await subjectsList.forEach(async (subject: Subject) => {
      if (subject.imageUrl) {
        const imageLink: string = await subjectService.getImageLink(subject.id)
       
        subject.imageLink = imageLink
      }
    })
    
    dispatch(receiveSubjectsAction(subjectsList))
  } catch (err) {
    dispatch(receiveSubjectsError(err.message))
  }
}