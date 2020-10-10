import React from 'react'

import { TextBoxProps } from '../../types/propsTypes'
import { Heading1, Heading2 } from './styles'

const TextBox: React.FC<TextBoxProps> = ({ heading1, heading2 }) => {
  return (
    <div>
      <Heading1>{heading1}</Heading1>
      <Heading2>{heading2}</Heading2>
    </div>
  )
}

export default TextBox
