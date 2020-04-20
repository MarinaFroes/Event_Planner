import React from 'react'
import styled from 'styled-components'

import EventCard from './EventCard'
import Headings from './Headings'

const StyledHeader = styled.header`
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: var(--main-color-blue, #0c598a);
  color: var(--main-color-white, #fff);
`

const Image = styled.img<{ imageWidth?: string }>`
  width: 400px;
  max-width: 400px;
  display: none;
  
  @media only screen and (min-width: 1024px){
    display: block;
    margin: 20px;
  }
`

const Image2 = styled(Image)`
  display: block;
  margin: 0;

  @media only screen and (min-width: 1024px){
    display: none;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
      
      <ImageContainer>
        <Image
          src={imageUrl}
          alt={`image for ${title}`}
          imageWidth={imageWidth}
        />
      </ImageContainer>
      <HeadingContainer>
        <Headings title={title} subtitle={subtitle}/>
        <Image2
          src={imageUrl}
          alt={`image for ${title}`}
          imageWidth={imageWidth}
        />
        {
          eventText && (
            <EventCard eventText={eventText} />
          )
        }
      </HeadingContainer>
        
      
      
    </StyledHeader>
  )
}

export default Header
