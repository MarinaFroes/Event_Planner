import { CREATE_SUBJECT, ICreateSubjectAction } from './types'

export default function events(state = {}, action: ICreateSubjectAction) {
  switch (action.type) {
    case CREATE_SUBJECT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
