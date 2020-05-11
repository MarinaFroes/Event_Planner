import * as subjectService from '../../services/subjectServices'
import { SubjectInfo, AppThunk } from '../types'
import { CREATE_SUBJECT, SubjectActionTypes } from './types'


export const createSubjectAction = (subjectId: string): SubjectActionTypes => {
  return {
    type: CREATE_SUBJECT,
    subjectId
  }
}

export const handleCreateSubject = (
  subjectInput: SubjectInfo
): AppThunk => async (dispatch) => {
  try {
    const subjectId = await subjectService.createSubject(subjectInput)
    dispatch(createSubjectAction(subjectId))
  } catch (err) {
    console.log(err)
  }
}