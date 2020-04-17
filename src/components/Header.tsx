import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: calc(100vh - 40px);
  text-align: center;
  background-color: var(--main-color-blue, #0c598a);
  color: var(--main-color-white, #fff);
`

const Heading1 = styled.h1`
  font-size: 26px;
`

const Heading2 = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin: 20px;
`

const Image = styled.img`
  width: 100%;
`

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  eventText?: string;
}

const Header: React.FC<Props> = ({title, subtitle, imageUrl, eventText}) => {
  return (
    <StyledHeader>
      <Heading1>{title}</Heading1>
      <Heading2>{subtitle}</Heading2>
      <Image src={imageUrl} alt={`image for ${title}`} />
      {eventText && <p>`${eventText}`</p>}
    </StyledHeader>
  )
}

export default Header
