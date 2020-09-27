import React from 'react'

import Headings from '../Headings'
import { MainHeaderProps } from '../../types/props'
import { StyledHeader, Image } from './styles'

const MainHeader: React.FC<MainHeaderProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <StyledHeader>
      <Headings title={title} subtitle={subtitle}/>
      <Image
        src={imageSrc}
        alt={`image for ${title}`}
      />
    </StyledHeader>
  )
}

export default MainHeader
