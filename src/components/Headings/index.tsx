import React from 'react'

import { HeadingsProps } from '../../types/props'
import { Heading1, Heading2 } from './styles'

const Headings: React.FC<HeadingsProps> = ({title, subtitle}) => {
  return (
      <>
        <Heading1>{title}</Heading1>
        <Heading2>{subtitle}</Heading2>
      </>
    );
}

export default Headings