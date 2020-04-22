import React, { useState} from 'react'
// import React, { useRef} from 'react'
import styled from 'styled-components'

import TextBox from './TextBox'
import Btn from './Btn'


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-size: 16px;
  color: var(--main-color-orange, #f07422);
  width: 100%;
  padding: 20px 0;

  @media only screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: space-evenly;
    flex: 1 1 auto;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0;
  font-family: Poppins;
  font-size: 14px;
  color: var(--main-color-black, #000);
  opacity: 70%;
  width: 100%;
`

const Image = styled.img`
  width: 300px;
  align-self: center;
`

const Input = styled.input`
  font-size: 16px;
  color: var(--main-color-black, #000);
  border: 1px solid #c4c4c4;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  height: 40px;
`

const InputFile = styled(Input)`
  background-color: white;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  

  &::before {
    content: '◀';
    margin: 0 10px;
  }

`

/**
 * &::before {
    content: 'Select some files';
    display: inline-block;
    background: var(--main-color-blue);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }

  :hover::before {
    border-color: black;
  }

  :active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
 */

const SmallerInput = styled(Input)`
  width: 100%;
`

const TextArea = styled.textarea`
  font-size: 16px;
  color: var(--main-color-black, #000);
  border: 1px solid #c4c4c4;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Sec = styled.div`
  width: 90%;
  margin: 20px;
  max-width: 500px;
`

interface Props {
  showImage: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  btnText: string;
  primaryBtn: boolean;
  btnWidth?: string;
  heading1: string;
  heading2?: string;
}

interface Task {
  id: string,
  details: string,
  owner: string,
  eventId: string
}

interface Subject {
  name: string,
  imageUrl: string
}

interface Event {
  title: string;
  host: string;
  subject: Subject;
  additionalInfo?: string;
  date: string;
  time: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
  tasks?: Task[]
}

interface TextNode {
  name: string;
}

const EventForm: React.FC<Props> = ({ handleChange, showImage, btnText, primaryBtn, heading1, heading2, btnWidth }) => {
  const [form, setForm] = useState<Event>({
    title: "",
    host: "",
    subject: {
      name: "",
      imageUrl: ""
    },
    additionalInfo: "",
    date: "",
    time: "",
    address: "",
    maxNumberGuests: 0,
    totalCost: 0,
    tasks: []
  })

  const [subject, setSubject] = useState<Subject>({
    name: "",
    imageUrl: ""
  })
  // const [name, useName] = useState<TextNode>({name: ""});
  // const inputRef = useRef<HTMLInputElement>(null);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    setForm({
      ...form,
      subject: {...subject}
    })
    console.log(form)
  }

  const updateFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

    console.log(event.target.name)
    console.log(form)
  }

  return (
   
    <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
        <Sec>
          <TextBox
            heading1={heading1} heading2={heading2}
          />
          <Label>
            Event Title
            <Input
              id="event-title"
              type="text"
              placeholder="Create a name for your event"
              name="title"
              value={form.title}
              onChange={updateFields}
              required
            />
          </Label>
          {showImage &&
            (
              <Image src="https://dummyimage.com/400x400/c4c4c4/ffffff.png&text=Add+meal+photo" alt="meal photo" />
            )
          }
        
        <Label>
        Select a meal photo
        <InputFile
            id="event-image"
            type="file"
            accept="image/png, image/jpeg"
            name="imageUrl"
            value={subject.imageUrl}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSubject({
                ...subject,
                [event.target.name]: event.target.value
              })

              console.log(event.target.name)
              console.log(subject)
            }}
            required
          />
        </Label>
        <Label>
          Meal name
          <Input
            id="meal-name"
            type="text"
            placeholder="Describe your dish"
            name="name"
            value={subject.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSubject({
                ...subject,
                [event.target.name]: event.target.value
              })

              console.log(event.target.name)
              console.log(subject)
            }}
            required
          />
          </Label>
        </Sec>
        <Sec>
        <Label>
          Additional Info
          <TextArea
            id="additional-info"
            name="additionalInfo"
            value={form.additionalInfo}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              setForm({
                ...form,
                [event.target.name]: event.target.value
              })
              console.log(event.target.name)
              console.log(form)}
            }
            placeholder="What your guests should know"
          />
        </Label>

        {/* TODO: Allow to choose current location as address */}
        <Label>
          Address
        <Input
            type="text"
            placeholder="What is the event location"
            name="address"
            value={form.address}
            onChange={updateFields}
            required
          />
        </Label>

        <StyledDiv>
          {/* TODO: Define dynamic min e max dates */}
          <Label>
            Event Date
            <SmallerInput
              id="event-date"
              type="date"
              min="2020-04-17"
              max="2999-12-31"
              name="date"
              value={form.date}
              onChange={updateFields}
              required
            />
          </Label>

          <Label>
            Total cost:
            <SmallerInput
              type="number"
              id="total-cost"
              min="1"
              max="99999"
              name="totalCost"
              value={form.totalCost}
              onChange={updateFields}
              required
            />
          </Label>
        </StyledDiv>
        <StyledDiv>
          <Label>
            Event time
            <SmallerInput
              id="event-time"
              type="time"
              name="time"
              value={form.time}
              onChange={updateFields}
              required
            />
          </Label>
          <Label>
            Nr of Guests
            <SmallerInput
              type="number"
              id="max-guests"
              min="1"
              max="99999"
              name="maxNumberGuests"
              value={form.maxNumberGuests}
              onChange={updateFields}
              required
            />
          </Label>
        </StyledDiv>
        {/* <input type="submit" value="submit" /> */}
          <Btn
            primaryBtn={primaryBtn}
            btnText={btnText}
            btnWidth={btnWidth}
            btnType="submit"
          /> 
        </Sec>
      </Form>
   
  )
}

export default EventForm
