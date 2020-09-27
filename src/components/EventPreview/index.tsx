import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { GiHotMeal } from 'react-icons/gi'

import { EventPreviewProps } from '../../types/props'
import { StyledLink, StyledCard, EventHeading, HeadingContainer, InfoDiv, EventInfo } from './styles'

const EventPreview: React.FC<EventPreviewProps> = ({ eventId, title, subjectName, date, time, status }) => {
  return (
    <StyledLink to={`/events/${eventId}`}>
      <StyledCard id={eventId} status={status}>
        <HeadingContainer>
          <EventHeading>{title}</EventHeading>
        </HeadingContainer>

        <InfoDiv>
          <GiHotMeal />
          <EventInfo>{subjectName}</EventInfo>
        </InfoDiv>

        <InfoDiv>
          <FaRegCalendar />
          <EventInfo>{date}</EventInfo>
          <EventInfo>{time}</EventInfo>
        </InfoDiv>
      </StyledCard>
    </StyledLink>
  )
}

export default EventPreview
