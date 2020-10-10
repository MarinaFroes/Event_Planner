import {
  CREATE_SUBJECT_SUCCESS,
  SubjectActionTypes,
  SubjectState,
  RECEIVE_SUBJECTS_SUCCESS,
} from '../../types/reduxTypes'

const initialSubjectState: SubjectState = []

export default function subjectReducer(
  state = initialSubjectState,
  action: SubjectActionTypes
): SubjectState {
  switch (action.type) {
    case CREATE_SUBJECT_SUCCESS:
      let subjectData = action.payload
      return [...state, subjectData]
    case RECEIVE_SUBJECTS_SUCCESS:
      let subjects = action.payload
      return [...state, ...subjects]
    default:
      return state
  }
}
