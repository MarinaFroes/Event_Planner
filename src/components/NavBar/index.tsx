import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import Btn from '../Btn'
import { AppState, UserState } from '../../types/reduxTypes'
import Logo from '../../assets/icons/logo.svg'
import { loginUrl } from '../../services/authServices'
import {
  StyledNav,
  StyledLogo,
  Title,
  LogoLink,
  UserConfig,
  Greeting,
} from './styles'

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
      <LogoLink href='/'>
        <StyledLogo src={Logo} alt='' />
        <Title>Event Planner</Title>
      </LogoLink>
      {userState.isLoggedIn ? (
        <UserConfig to={`/users/${userId}`}>
          <Greeting>Hello, {userName || 'there'}</Greeting>
          <FaRegUser />
        </UserConfig>
      ) : (
        <Btn
          btnText='Login'
          primaryBtn={false}
          btnWidth='100px'
          btnType='button'
          onClick={() => {
            window.location.assign(loginUrl)
          }}
        />
      )}
    </StyledNav>
  )
}

export default NavBar
