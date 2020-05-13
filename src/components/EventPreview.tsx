import React from 'react'
import styled from 'styled-components'
import { FaRegCalendar } from 'react-icons/fa'
import { GiHotMeal } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const StyledCard = styled.div<{ status: "open" | "closed" }>`
  text-align: left;
  width: 300px;
  padding: 20px;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 20px;
  -webkit-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  -moz-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  background-color: ${props => props.status === "closed" ? "var(--main-color-grey, #eee)" : "var(--main-color-white, #fff)"};
  padding: 20px;
`

const EventHeading = styled.p`
  color: var(--main-color-black, #000);
  font-size: 16px;
  font-weight: bold;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const EventInfo = styled.p`
  color: var(--main-color-blue, #0c598a);
  font-size: 16px;
  padding: 10px; 
`

const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-color-blue, #0c598a);
`

const StyledLink = styled(Link)`
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`

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
