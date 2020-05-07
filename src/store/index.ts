import { createStore, combineReducers, applyMiddleware } from 'redux'
import eventReducer from './events/eventReducer'
import subjectReducer from './subjects/subjectReducer'
import taskReducer from './tasks/taskReducer'
import userReducer from './users/userReducer'
import thunk from 'redux-thunk'

import logger from './middleware/logger'
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
  event: eventReducer,
  subject: subjectReducer,
  task: taskReducer,
  user: userReducer
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