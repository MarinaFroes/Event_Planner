import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

import Logo from '../../assets/icons/logo.svg'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  margin: 0;
  padding: 0;
`

const StyledLogo = styled.img`
  height: 30px;
  margin-left: 10px;
  padding-right: 5px;
`

const Title = styled.p`
  font-size: 16px;
  color: var(--main-color-orange, #f07422);
  margin: auto;

  @media only screen and (max-width: 500px){
    display: none;
  }
`

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`

const Hamburger = styled.button`
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 24px;
  border: none;
  background-color: transparent;
`

const Greeting = styled.p`
  font-size: 14px;
  color: var(--main-color-blue, #0c598a);
  padding-right: 10px;
`

interface Props {
  isLogged: boolean;
  user?: string;
}

const NavBar: React.FC<Props> = ({isLogged, user = "there"}) => {
  return (
    <StyledNav>
      <LogoLink href="/">
        <StyledLogo src={Logo} alt="" />
        <Title>Event Planner</Title>
      </LogoLink>
      <Hamburger>
        {
          isLogged && <Greeting>Hello, {user}</Greeting>
        }
        <FaBars/>
      </Hamburger>
    </StyledNav>
  )
}

export default NavBar;