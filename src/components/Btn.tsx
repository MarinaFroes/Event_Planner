import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ primary: boolean }>`
  background: ${props => props.primary ? "var(--main-color-orange, #f07422)" : "var(--main-color-white, #fff)"};
  color: ${props => props.primary ? "var(--main-color-white, #fff)" : "var(--main-color-orange, #f07422)"};
  border: 1px solid var(--main-color-orange, #f07422);
  height: 40px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 5px;
`

interface Props {
  primary: boolean;
  text: string;
  widthSize?: string;
}

const Btn: React.FC<Props> = ({primary, text, widthSize = "600px"}) => {
  return (
    <StyledButton type="button" style={{ width: widthSize}} primary={primary}>
      {text}
    </StyledButton>
  )
}

export default Btn
