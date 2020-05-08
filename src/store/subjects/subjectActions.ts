import { ThunkAction } from 'redux-thunk'

import * as subjectService from '../../services/subjectServices'
import { SubjectInfo, AppState } from '../types'
import { CREATE_SUBJECT, SubjectActionTypes } from './types'
import { MultipleActionTypes } from '../events/types'

export const createSubjectAction = (subjectId: string): SubjectActionTypes => {
  return {
    type: CREATE_SUBJECT,
    subjectId
  }
}

type Effect = ThunkAction<void, AppState, unknown, MultipleActionTypes>;

export const handleCreateSubject = (
  subjectInput: SubjectInfo
): Effect => async (dispatch) => {
  try {
    const subjectId = await subjectService.createSubject(subjectInput)
    dispatch(createSubjectAction(subjectId))
  } catch (err) {
    console.log(err)
  }
}