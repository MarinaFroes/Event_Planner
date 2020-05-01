import { Action } from 'redux'

const logger = (store: any) => (next: any)=> (action: Action) => {
  console.group(action.type)
  console.log(action)
  const returnValue = next(action)
  console.log(store.getState())
  console.groupEnd()
  return returnValue
}

export default logger
