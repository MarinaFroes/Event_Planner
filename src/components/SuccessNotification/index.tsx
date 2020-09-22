import React from 'react'
import styled from 'styled-components'
import { FaWindowClose } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../store/types'
import { SuccessState } from '../../store/success/types'
import { hideSuccessAction } from '../../store/success/successActions'

const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-blue, #0c598a);
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