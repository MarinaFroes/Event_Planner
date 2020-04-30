import { createStore, combineReducers, applyMiddleware } from 'redux'
import eventReducer from './events/eventReducer'
import subjectReducer from './subjects/subjectReducer'
import taskReducer from './tasks/taskReducer'
import thunk from 'redux-thunk'

import logger from './middleware/logger'

const rootReducer = combineReducers({
  eventReducer,
  subjectReducer,
  taskReducer
})

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  return store;
}

export default configureStore