import React from 'react'
import styled from 'styled-components'
import { Task } from '../store/types'

const Item = styled.span`
  font-size: 18px;

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
    font-size: 18px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 20px;
  }
`

const StyledEventCard = styled.div`
  text-align: left;
  color: var(--main-color-blue, #0c598a);
  width: 90%;
  max-width: 400px;

  @media only screen and (min-width: 540px){
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: var(--main-color-white, #fff);
    border-radius: 10px;
    padding: 30px;
    max-width: 500px;
    -webkit-box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.75);
    box-shadow: 4px 4px 10px 2px rgba(0,0,0,0.75);
  }
`
// Select from https://www.filamentgroup.com/lab/select-css.html with adjustments
const StyledSelect = styled.select`
  display: block;
	font-size: 16px;
	color: var(--main-color-blue, #0c598a);
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 10px 0 0 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
  
  &::-ms-expand {
	  display: none;
  }
  :hover {
	  border-color: #888;
  }
  :focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  @media only screen and (min-width: 768px){
    font-size: 18px;
  }

  @media only screen and (min-width: 1080px){
    font-size: 20px;
  }
`

const StyledOption = styled.option`
  font-weight:normal;
`

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