export const CREATE_SUBJECT: string = 'CREATE_SUBJECT'

// ACTION TYPES
interface CreateSubjectAction {
  type: typeof CREATE_SUBJECT
  subjectId: string
}

export type SubjectActionTypes = CreateSubjectAction 

// STATE TYPE
export type SubjectState = string[] | []