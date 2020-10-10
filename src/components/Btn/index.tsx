import React from 'react'

import { StyledButton } from './styles'
import { BtnProps } from '../../types/propsTypes'

const Btn: React.FC<BtnProps> = ({
  primaryBtn,
  btnText,
  btnWidth,
  btnType = 'button',
  onClick,
}) => {
  return (
    <StyledButton
      type={btnType}
      style={{ width: btnWidth }}
      primary={primaryBtn}
      onClick={onClick}
    >
      {btnText}
    </StyledButton>
  )
}

export default Btn
