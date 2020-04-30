import { ISubject, ICreateSubjectAction, CREATE_SUBJECT } from './types'
import { saveSubject } from '../../services/subjectServices'

export const createSubjectAction = (subject: ISubject): ICreateSubjectAction => {
  return {
    type: CREATE_SUBJECT,
    payload: {
      ...subject
    }
  }
}

export const handleCreateSubject = (subject: ISubject) => {
  return (dispatch: any) => {
    return saveSubject(subject)
      .then(subject => dispatch(createSubjectAction(subject))

    )
  }
}

/**
 * export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText: question.optionOneText,
      optionTwoText: question.optionTwoText
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
 */
