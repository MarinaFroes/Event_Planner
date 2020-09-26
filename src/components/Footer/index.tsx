import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

import Logo from '../../assets/icons/logo.svg'
import { StyledFooter, StyledLogo, Title, LogoLink, InfoLink, LinksContainer, SocialMediaContainer, SocialMediaLink, ExtraInfo } from './styles'

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
        <InfoLink href="/">Featuress</InfoLink>
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
