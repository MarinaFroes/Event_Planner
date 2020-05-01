import { CREATE_SUBJECT } from './types'

export const createSubjectAction = (subjectId: string) => {
  return {
    type: CREATE_SUBJECT,
    subjectId
  }
}
