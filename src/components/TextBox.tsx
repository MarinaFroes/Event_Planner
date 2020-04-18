import React from 'react'
import styled from 'styled-components'

const Heading1 = styled.h1`
  font-size: 26px;
  margin: 20px;
  color: var(--main-color-blue, #0c598a);
`

const Heading2 = styled.h2`
  font-size: 16px;
  font-weight: normal;
  color: var(--main-color-black, #000);
  margin: 20px;
`

interface Props {
  heading1: string;
  heading2?: string;
}


const TextBox: React.FC<Props> = ({heading1, heading2}) => {
  return (
    <>
      <Heading1>{heading1}</Heading1>
      <Heading2>{heading2}</Heading2>
    </>
  )
}

export default TextBox
