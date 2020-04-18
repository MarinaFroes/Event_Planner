import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

import Logo from '../assets/icons/logo.svg'

const StyledFooter = styled.footer`
  padding: 20px;
  width: 100%;
  background-color: var(--main-color-white, #fff);
`

const StyledLogo = styled.img`
  height: 30px;
  margin-left: 10px;
  padding-right: 5px;
`

const Title = styled.p`
  font-size: 16px;
  color: var(--main-color-blue, #0c598a);
  margin: auto;

`

const LogoLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  
  :hover {
    cursor: pointer;
  }
`

const InfoLink = styled.a`
  color: var(--main-color-blue, #0c598a);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  border-bottom: 1px solid var(--main-color-blue, #0c598a);
`

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  color: var(--main-color-blue, #0c598a);
`

const SocialMediaLink = styled.a`
  text-decoration: none;
  color: var(--main-color-blue, #0c598a);
  font-size: 20px;
  margin: 20px;
  
  :hover {
    cursor: pointer;
  }
`

const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: var(--main-color-blue, #0c598a);
  font-size: 14px;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>

      <LogoLink href="/">
        <StyledLogo src={Logo} alt="" />
        <Title>Event Planner</Title>
      </LogoLink>

      <LinksContainer>
        <InfoLink href="/">About</InfoLink>
        <InfoLink href="/">Support</InfoLink>
        <InfoLink href="/">Product</InfoLink>
        <InfoLink href="/">Features</InfoLink>
      </LinksContainer>

      <SocialMediaContainer>
        <SocialMediaLink 
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialMediaLink>
        <SocialMediaLink
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </SocialMediaLink>
        <SocialMediaLink
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialMediaLink>
        <SocialMediaLink
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialMediaLink>
      </SocialMediaContainer>

      <ExtraInfo>
        <p>2020 - 2030</p>
        <p>Privacy - Terms</p>
      </ExtraInfo>
    </StyledFooter>
  )
}

export default Footer
