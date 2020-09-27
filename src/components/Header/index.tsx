import React from 'react'

import Headings from '../Headings'
import { HeaderProps } from '../../types/props'
import { StyledHeader, Image, HeadingContainer, ImageContainer } from './styles'

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  imageSrc
}) => {
  return (
    <StyledHeader>
      <ImageContainer>
        <Image
          src={imageSrc}
          alt={`image for ${title}`}
        />
      </ImageContainer>
      <HeadingContainer>
        <Headings title={title} subtitle={subtitle}/>
      </HeadingContainer>
    </StyledHeader>
  )
}

export default Header
