import { CREATE_SUBJECT, SubjectActionTypes, SubjectState, RECEIVE_SUBJECTS } from './types'

const initialSubjectState: SubjectState = []

export default function subjectReducer(
  state = initialSubjectState,
  action: SubjectActionTypes
): SubjectState {
  switch (action.type) {
    case CREATE_SUBJECT:
      let subjectData = action.payload
      return [
        ...state,
        subjectData
      ]
    case RECEIVE_SUBJECTS:
      let subjects = action.payload
      return [
        ...state,
        ...subjects
      ]
    default:
      return state
  }
}
