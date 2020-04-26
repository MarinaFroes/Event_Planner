import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ primary: boolean, btnWidth?: string }>`
  background: ${props => props.primary ? "var(--main-color-orange, #f07422)" : "var(--main-color-white, #fff)"};
  color: ${props => props.primary ? "var(--main-color-white, #fff)" : "var(--main-color-orange, #f07422)"};
  border: 1px solid var(--main-color-orange, #f07422);
  height: 40px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 5px;
  width: ${props => props.btnWidth ? props.btnWidth : "100%"};
  max-width: 500px;
`

interface Props {
  primaryBtn: boolean;
  btnText: string;
  btnWidth?: string;
  btnType: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Btn: React.FC<Props> = ({ primaryBtn, btnText, btnWidth, btnType = "button", onClick}) => {
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
