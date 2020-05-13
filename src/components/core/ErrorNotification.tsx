import React from 'react'
import styled from 'styled-components'
import { FaWindowClose } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../store/types'
import { hideErrorAction } from '../../store/error/errorActions'
import { ErrorState } from '../../store/error/types'

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-red, #bd0b2b);
  color: var(--main-color-white, #fff);
  width: 100%;
`

const CloseBtn = styled.button`
  background-color: transparent;
  color: var(--main-color-white, #fff);
  height: 40px;
  width: 40px;
  cursor: pointer;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 22px;
`

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