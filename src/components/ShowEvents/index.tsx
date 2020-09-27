import React from 'react'

import TextBox from '../TextBox'
import { useSelector } from 'react-redux'
import EventPreview from '../EventPreview'
import { myEvents } from '../../utils/text'
import { ShowEventsProps } from '../../types/props'
import { EventState } from '../../store/events/types'
import { AppState, EventData } from '../../store/types'
import { isBeforeToday } from '../../services/formServices'
import { EventsContainer, Cards } from './styles'

const ShowEvents: React.FC<ShowEventsProps> = ({ status }) => {
  const eventState: EventState = useSelector((state: AppState) => state.event)
  const eventsList = eventState.eventsList

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
            eventsList.length > 0 &&
            eventsList.filter((eventInfo: EventData): boolean => {
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