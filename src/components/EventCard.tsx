import React from 'react'
import styled from 'styled-components'

const Item = styled.span`
  font-size: 16px;

  font-weight: bold;

  @media only screen and (min-width: 768px){
    font-size: 20px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 26px;
  }
`

const StyledP = styled.p`
  font-size: 16px;
  
  font-weight: normal;

  @media only screen and (min-width: 768px){
    font-size: 20px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 26px;
  }
`

const StyledEventCard = styled.div`
  text-align: left;
  color: var(--main-color-white, #fff);
  margin: 100px;
  width: 100%;
  max-width: 400px;

  @media only screen and (min-width: 1024px){
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: var(--main-color-white, #fff);
    color: var(--main-color-blue, #0c598a);
    border-radius: 10px;
    padding: 30px;
    max-width: 500px;
    -webkit-box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.75);
    box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.75);
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
  eventText: EventText;
}

const EventCard: React.FC<Props> = ({ eventText }) => {
  return (
    <StyledEventCard>
      <StyledP>
        <Item>Description:</Item> {eventText.description}
      </StyledP>
      <StyledP>
        <Item>Location:</Item> {eventText.location}
      </StyledP>
      <StyledP>
        <Item>Date:</Item> {eventText.date}
      </StyledP>
      <StyledP>
        <Item>Time:</Item> {eventText.time}
      </StyledP>
      <StyledP>
        <Item>Participants:</Item> {eventText.participants}
      </StyledP>
      <StyledP>
        <Item>Cost per participant:</Item> {eventText.cost}
      </StyledP>
    </StyledEventCard>
  )
}

export default EventCard
