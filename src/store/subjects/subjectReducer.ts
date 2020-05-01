import { CREATE_SUBJECT, SubjectActionTypes } from './types'

export default function events(state = [], action: SubjectActionTypes) {
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
