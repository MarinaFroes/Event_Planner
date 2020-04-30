const logger = store => next => action => {
  console.group(action.type)
  console.log(action)
  const returnValue = next(action)
  console.log(store.getState())
  console.groupEnd()
  return returnValue
}

export default logger
