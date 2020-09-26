import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { GiHotMeal } from 'react-icons/gi'

import { StyledLink, StyledCard, EventHeading, HeadingContainer, InfoDiv, EventInfo } from './styles'

interface Props {
  title: string;
  subjectName: string;
  date: string;
  time: string;
  eventId: string;
  status: "open" | "closed";
}

const EventPreview: React.FC<Props> = ({ eventId, title, subjectName, date, time, status }) => {
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
