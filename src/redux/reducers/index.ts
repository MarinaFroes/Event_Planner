import { combineReducers } from 'redux'
import eventReducer from './eventReducer'
import subjectReducer from './subjectReducer'
import taskReducer from './taskReducer'

export default combineReducers({
  eventReducer,
  subjectReducer,
  taskReducer
})

