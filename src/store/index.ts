import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import eventReducer from './events/eventReducer'
import subjectReducer from './subjects/subjectReducer'
import taskReducer from './tasks/taskReducer'
import userReducer from './users/userReducer'
import errorReducer from './error/errorReducer'
import successReducer from './success/successReducer'
import logger from './middleware/logger'

const rootReducer = combineReducers({
  event: eventReducer,
  subject: subjectReducer,
  task: taskReducer,
  user: userReducer,
  error: errorReducer,
  success: successReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = composeWithDevTools({});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  return store;
}

export default configureStore