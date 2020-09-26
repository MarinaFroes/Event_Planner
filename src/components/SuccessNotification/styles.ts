import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-blue, #0c598a);
  color: var(--main-color-white, #fff);
  width: 100%;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  color: var(--main-color-white, #fff);
  height: 40px;
  width: 40px;
  cursor: pointer;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 22px;
`
