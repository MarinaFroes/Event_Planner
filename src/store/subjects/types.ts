export const CREATE_SUBJECT: string = 'CREATE_SUBJECT'

export interface ISubject {
  name: string;
  imageUrl: string;
}

export interface ICreateSubjectAction {
  type: typeof CREATE_SUBJECT
  payload: ISubject
}

