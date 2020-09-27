import styled from 'styled-components'

export const StyledButton = styled.button<{ primary: boolean, btnWidth?: string }>`
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