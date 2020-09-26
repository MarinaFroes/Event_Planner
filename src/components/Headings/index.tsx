import React from 'react'

import { Heading1, Heading2 } from './styles'

interface HeadingsProps {
  title: string;
  subtitle: string;
}

const Headings: React.FC<HeadingsProps> = ({title, subtitle}) => {
  return (
      <>
        <Heading1>{title}</Heading1>
        <Heading2>{subtitle}</Heading2>
      </>
    );
}

export default Headings