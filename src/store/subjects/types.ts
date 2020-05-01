export const CREATE_SUBJECT: string = 'CREATE_SUBJECT'

interface CreateSubjectAction {
  type: typeof CREATE_SUBJECT
  subjectId: string
}

export type SubjectActionTypes = CreateSubjectAction 