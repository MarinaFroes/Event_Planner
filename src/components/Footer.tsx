import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: var(--main-color-white, #fff);
  background-color: #eee;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>Footer Info</p>
    </StyledFooter>
  )
}

export default Footer
