import React from 'react'

import Headings from '../Headings'
import { StyledHeader, Image } from './styles'

interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const MainHeader: React.FC<Props> = ({ title, subtitle, imageSrc }) => {
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
