import { ISubject, ICreateSubjectAction, CREATE_SUBJECT } from './types'
import { saveSubject } from '../../services/subjectServices'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const createSubjectAction = (subject: ISubject): ICreateSubjectAction => {
  return {
    type: CREATE_SUBJECT,
    payload: {
      ...subject
    }
  }
}

export const handleCreateSubject = (subject: ISubject): ThunkAction<void, any, null, Action<string>> => async dispatch => {
  const subjectRes = await saveSubject(subject)
    
  dispatch(createSubjectAction(subjectRes))
}


/**
 * export const thunkSendMessage = (message: string): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const asyncResp = await exampleAPI();
  dispatch(
    sendMessage({
      message,
      user: asyncResp,
      timestamp: new Date().getTime()
    })
  );
};
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
