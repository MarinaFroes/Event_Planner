import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../store/types'
import { SuccessState } from '../../store/success/types'
import { hideSuccessAction } from '../../store/success/successActions'
import { SuccessContainer, CloseBtn } from './styles'

const SuccessNotification: React.FC = () => {
  const success: SuccessState = useSelector((state: AppState) => state.success)
  const dispatch = useDispatch()  
  const closeNotification = () => dispatch(hideSuccessAction())
  
  return (
    <>
      {success.isOpen && (
        <SuccessContainer>
          <p>{success.success}</p>
          <CloseBtn onClick={() => closeNotification()}>
            <FaWindowClose />
          </CloseBtn>
        </SuccessContainer>
      )}
    </>
  )
}

export default SuccessNotification