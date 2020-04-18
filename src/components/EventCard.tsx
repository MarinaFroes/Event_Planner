import React from 'react'
import styled from 'styled-components'


const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 20px;
  text-align: left;
  width: 100%;
  background-color: var(--main-color-blue, #0c598a);
`

const Item = styled.p`
  font-size: 16px;
  color: var(--main-color-white, #fff);
  font-weight: bold;
  display: inline;
`

const StyledP = styled(Item)`
  font-weight: normal;
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
    <EventContainer>
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
    </EventContainer>
  )
}

export default EventCard
