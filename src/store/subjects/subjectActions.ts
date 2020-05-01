import { ThunkAction } from 'redux-thunk'
import * as subjectService from '../../services/subjectServices'

import { SubjectInput } from '../../services/subjectServicesTypes'

import { CREATE_SUBJECT, SubjectActionTypes, SubjectState } from './types'

export const createSubjectAction = (subjectId: string) => {
  return {
    type: CREATE_SUBJECT,
    subjectId
  }
}

type Effect = ThunkAction<any, SubjectState, any, SubjectActionTypes>;

export const handleCreateSubject = (subjectInput: SubjectInput): Effect => (dispatch) => {
  return subjectService.createSubject(subjectInput)
    .then(subjectId => dispatch(createSubjectAction(subjectId)))
    .catch(e => new Error(e))
}