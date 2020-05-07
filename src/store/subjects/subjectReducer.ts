import { CREATE_SUBJECT, SubjectActionTypes, SubjectState } from './types'

const initialSubjectState: SubjectState = []

export default function subjectReducer(
  state = initialSubjectState,
  action: SubjectActionTypes
): SubjectState {
  switch (action.type) {
    case CREATE_SUBJECT:
      return [
        ...state,
        action.subjectId
      ]
    default:
      return state
  }
}
