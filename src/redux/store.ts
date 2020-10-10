import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import eventReducer from './reducers/eventReducer'
import subjectReducer from './reducers/subjectReducer'
import taskReducer from './reducers/taskReducer'
import userReducer from './reducers/userReducer'
import errorReducer from './reducers/errorReducer'
import successReducer from './reducers/successReducer'
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

const composeEnhancers = composeWithDevTools({})

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  )

  return store
}

export default configureStore
