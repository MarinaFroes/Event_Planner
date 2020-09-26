import React from 'react'

import Headings from '../Headings'
import { StyledHeader, Image, HeadingContainer, ImageContainer } from './styles'

interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const Header: React.FC<Props> = ({ title, subtitle, imageSrc }) => {
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
