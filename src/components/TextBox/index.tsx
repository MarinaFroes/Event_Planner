import React from 'react'

import { Heading1, Heading2 } from './styles'

interface Props {
  heading1?: string;
  heading2?: string;
}

const TextBox: React.FC<Props> = ({heading1, heading2}) => {
  return (
    <div>
      <Heading1>{heading1}</Heading1>
      <Heading2>{heading2}</Heading2>
    </div>
  )
}

export default TextBox
