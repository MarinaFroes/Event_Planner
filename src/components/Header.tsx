import React from 'react'
import styled from 'styled-components'

import EventCard from './EventCard'

const StyledHeader = styled.header`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: var(--main-color-blue, #0c598a);
  color: var(--main-color-white, #fff);
`

const Heading1 = styled.h1`
  font-size: 26px;
  padding-top: 20px;

  @media only screen and (min-width: 768px){
    font-size: 42px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 68px;
  }
`

const Heading2 = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin: 20px;
  max-width: 500px;

  @media only screen and (min-width: 768px){
    font-size: 20px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 26px;
  }
`

const Image = styled.img<{ imageWidth?: string }>`
  width: ${props => props.imageWidth ? props.imageWidth : "100%"};
  max-width: 800px;
  padding-bottom: 40px;

  @media only screen and (min-width: 1280px){
    padding-bottom: 0;
    margin-bottom: -100px;
  }
`

interface EventText {
  description: string,
  location: string,
  date: string,
  time: string,
  participants: number,
  cost: number
}

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  eventText?: EventText;
  imageWidth?: string;
}

const Header: React.FC<Props> = ({ title, subtitle, imageUrl, eventText, imageWidth }) => {
  return (
    <StyledHeader>
      <Heading1>{title}</Heading1>
      <Heading2>{subtitle}</Heading2>
      
      <Image
        src={imageUrl}
        alt={`image for ${title}`}
        imageWidth={imageWidth}
      />
      {
        eventText && (
          <EventCard eventText={eventText} />
        )
      }
    </StyledHeader>
  )
}

export default Header
