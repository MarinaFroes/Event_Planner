import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../store/types'
import { ErrorState } from '../../store/error/types'
import { hideErrorAction } from '../../store/error/errorActions'
import { ErrorContainer, CloseBtn } from './styles'

const ErrorNotification: React.FC = () => {
  const error: ErrorState = useSelector((state: AppState) => state.error)
  const dispatch = useDispatch()  
  const closeNotification = () => dispatch(hideErrorAction())
  
  return (
    <>
      {error.isOpen && (
        <ErrorContainer>
          <p>{error.error}</p>
          <CloseBtn onClick={() => closeNotification()}>
            <FaWindowClose />
          </CloseBtn>
        </ErrorContainer>
      )}
    </>
  )
}

export default ErrorNotification