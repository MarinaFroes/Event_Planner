import React from 'react'

import { Task } from '../../store/types'
import { Item, StyledP, StyledEventCard, StyledSelect, StyledOption } from './styles'

interface EventCardProps {
  subjectName: string;
  additionalInfo?: string;
  address: string;
  tasks?: Task[];
  date: string;
  time: string;
  participants: number;
  cost: number;
}

const EventCard: React.FC<EventCardProps> = ({ subjectName, additionalInfo, address, tasks, date, time, participants, cost }) => {
  return (
    <StyledEventCard>
      <StyledP>
        <Item>Meal:</Item> {subjectName}
      </StyledP>
        {
          additionalInfo !== undefined && (
          <StyledP><Item>Additional Info:</Item> {additionalInfo}</StyledP>)
        }
      <StyledP>
        <Item>Location:</Item> {address}
      </StyledP>
      <StyledP>
        <Item>Date:</Item> {date}
      </StyledP>
      <StyledP>
        <Item>Time:</Item> {time}
      </StyledP>
      <StyledP>
        <Item>Participants:</Item> {participants}
      </StyledP>
      <StyledP>
        <Item>Cost per participant:</Item> {cost}
      </StyledP>
      <StyledSelect>
        <StyledOption>{tasks ? "Choose one task" : "No tasks available"}</StyledOption>
        { tasks && (
          tasks.map((task: Task) => (
            <StyledOption key={task.id} value={task.details}>{task.details}</StyledOption>))
        )}
      </StyledSelect>
    </StyledEventCard>
  )
}

export default EventCard