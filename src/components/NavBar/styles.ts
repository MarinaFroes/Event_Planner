import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const StyledLogo = styled.img`
  height: 30px;
  margin-left: 10px;
  padding-right: 5px;
`

export const Title = styled.p`
  font-size: 16px;
  color: var(--main-color-orange, #f07422);
  margin: auto;

  @media only screen and (max-width: 500px){
    display: none;
  }
`

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`

export const UserConfig = styled(Link)`
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

export const Greeting = styled.p`
  font-size: 14px;
  color: var(--main-color-blue, #0c598a);
  padding-right: 10px;
`