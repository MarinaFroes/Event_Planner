import React from 'react'
import styled from 'styled-components'

import TextBox from './core/TextBox'
import EventPreview from './EventPreview'
import { AppState, EventData } from '../store/types'
import { useSelector } from 'react-redux'
import { EventState } from '../store/events/types'
import { myEvents } from '../utils/text'
import { isBeforeToday } from '../services/formServices'

const EventsContainer = styled.div<{ status: "open" | "closed"}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${props => props.status === "open" ? "var(--main-color-grey, #eee)" : "var(--main-color-white, #fff)"};
  padding: 20px;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`

interface Props {
  status: "open" | "closed"
}

const ShowEvents: React.FC<Props> = ({ status }) => {

  const eventState: EventState = useSelector((state: AppState) => state.event)

  let title = ''
  let subtitle = ''

  if (status === 'open') {
    title = myEvents.upcomingTitle
    subtitle = myEvents.upcomingSubtitle
  } else {
    title = myEvents.pastTitle
    subtitle = myEvents.pastSubtitle
  }

  return (
    <EventsContainer status={status}>
      <TextBox heading1={title} heading2={subtitle} />
      <div style={{ maxWidth: "700px" }}>
        <Cards>
          { 
            eventState.length > 0 &&
            eventState.filter((eventInfo: EventData): boolean => {
              if (status === 'closed') {
                return isBeforeToday(eventInfo.date.split(' ')[0])
              }
              return !isBeforeToday(eventInfo.date.split(' ')[0])

            }).map(eventInfo => (
              <EventPreview
                key={eventInfo.id}
                eventId={eventInfo.id}
                title={eventInfo.title}
                subjectName={eventInfo.subject.name}
                date={eventInfo.date.split(' ')[0]}
                time={eventInfo.date.split(' ')[1]}
                status={status}
              />
            ))
          }
        </Cards>
      </div>
    </EventsContainer>
  )
}

export default ShowEvents