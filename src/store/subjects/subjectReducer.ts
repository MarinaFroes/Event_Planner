import { CREATE_SUBJECT, SubjectActionTypes, SubjectState } from './types'

export default function subjectReducer(
  state = [],
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
