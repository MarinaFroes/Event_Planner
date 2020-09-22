import React from 'react'
import styled from 'styled-components'
import { FaRegUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Logo from '../../assets/icons/logo.svg'
import Btn from './Btn'
import { loginUrl } from '../../services/authServices'
import { AppState } from '../../store/types'
import { UserState } from '../../store/users/types'

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

const UserConfig = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 22px;
  text-decoration: none;
  color: var(--main-color-orange, #f07422);

  :hover {
    cursor: pointer;
  }
`

const Greeting = styled.p`
  font-size: 14px;
  color: var(--main-color-blue, #0c598a);
  padding-right: 10px;
`

const NavBar: React.FC = () => {
  let userName: string = ''
  let userId: string = ''
  const userState: UserState = useSelector((state: AppState) => state.user)
  if (userState.isLoggedIn) {
    userName = userState.user.name
    userId = userState.user.id
  }

  return (
    <StyledNav>
      <LogoLink href="/">
        <StyledLogo src={Logo} alt="" />
        <Title>Event Planner</Title>
      </LogoLink>
        {
          userState.isLoggedIn
          ? (
            <UserConfig to={`/users/${userId}`}>
              <Greeting>
                Hello, {userName || 'there'}
              </Greeting>
              <FaRegUser />
            </UserConfig>
          ) : (
            <Btn
              btnText="Login"
              primaryBtn={false}
              btnWidth="100px"
              btnType="button"
              onClick={() => {
                window.location.assign(loginUrl)
              }}
            />
          )
        }
    </StyledNav>
  )
}

export default NavBar;