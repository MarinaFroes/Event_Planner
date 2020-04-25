import React, { useState } from 'react'
// import React, { useRef} from 'react'
import styled from 'styled-components'

import TextBox from './TextBox'
import Btn from './Btn'
import { getTodayDate, formatDate } from '../utils/helpers'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: var(--main-color-orange, #f07422);
  width: 100%;
  padding: 20px 0;

  @media only screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
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
  height: 300px;
  align-self: center;
  object-fit: cover;
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
    background-color: var(--main-color-orange, #f07422);
    border: none;
    height: 100%;
    margin: 0;
    color: white;
    border-radius: 5px;
  }
`

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

const SmallerFieldsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > :nth-child(2) {
    margin-left: 20px;
  }
`

const Sec = styled.div`
  width: 90%;
  margin: 20px;
  max-width: 500px;
`

interface Props {
  showImage: boolean;
  btnText: string;
  primaryBtn: boolean;
  btnWidth?: string;
  heading1: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
}

interface Task {
  id: string;
  details: string;
  owner: string;
  eventId: string;
}

interface Subject {
  name: string;
  imageUrl: null | FileList;
}

interface DateTime {
  date: string;
  time: string;
}

interface Event {
  title: string;
  host: string;
  additionalInfo?: string;
  date: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
  tasks?: Task[];
}

const EventForm: React.FC<Props> = ({ showImage, btnText, primaryBtn, heading1, heading2, heading3, heading4, btnWidth }) => {
  const [form, setForm] = useState<Event>({
    title: "",
    host: "",
    additionalInfo: "",
    date: "",
    address: "",
    maxNumberGuests: 0,
    totalCost: 0,
    tasks: []
  })

  const [subject, setSubject] = useState<Subject>({
    name: "",
    imageUrl: null
  })

  const [imgPreview, setImgPreview] = useState<string>("")

  const [dateTime, setDateTime] = useState<DateTime>({ date: "", time: "00:00" })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Fix setForm to add formattedDate
    setForm({
      ...form,
      date: formatDate(dateTime.date, dateTime.time)
    })
    console.log(form)
    console.log(dateTime)
    console.log(subject)
  }

  const updateInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const updateTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const updateSubjectName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject({
      ...subject,
      name: event.target.value
    })
  }

  const updateDateTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setDateTime({
      ...dateTime,
      [event.target.name]: event.target.value
    })
  }

  const updateImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let imagePreview: string | undefined
    if (event.target.files) {
      imagePreview = Array.from(event.target.files).map(file => {
        setSubject({
          ...subject,
          imageUrl: event.target.files
        })
        return URL.createObjectURL(file)
      })[0]
    }
    setImgPreview(imagePreview || "https://dummyimage.com/400x400/c4c4c4/ffffff.jpg&text=Image+not+available")
  }

  return (

    <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <Sec>
        <TextBox
          heading1={heading1}
          heading2={heading2}
        />

        {imgPreview ? <Image src={imgPreview} alt="meal photo" /> : <Image src="https://dummyimage.com/400x400/c4c4c4/ffffff.jpg&text=Add+meal+photo" alt="meal photo" />}

        <Label>
          Add your meal photo
      <InputFile
            id="event-image"
            type="file"
            accept="image/png, image/jpeg"
            name="imageUrl"
            onChange={updateImage}
            required
          />
        </Label>
        <Label>
          Meal name
        <Input
            id="meal-name"
            type="text"
            placeholder="What is your dish name"
            name="name"
            value={subject.name}
            onChange={updateSubjectName}
            required
          />
        </Label>
      </Sec>
      <Sec>
        <TextBox
          heading1={heading3}
          heading2={heading4}
        />
        <Label>
          Event Title
          <Input
            id="event-title"
            type="text"
            placeholder="Create a title for your event"
            name="title"
            value={form.title}
            onChange={updateInputs}
            required
          />
        </Label>
        <Label>
          Additional Info
          <TextArea
            id="additional-info"
            name="additionalInfo"
            value={form.additionalInfo}
            onChange={updateTextArea}
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
            onChange={updateInputs}
            required
          />
        </Label>

        <SmallerFieldsDiv>
          <Label>
            Event Date
            <SmallerInput
              id="event-date"
              type="date"
              min={getTodayDate()}
              max="2999-12-31"
              name="date"
              value={dateTime.date}
              onChange={updateDateTime}
              pattern="\d{4}-\d{2}-\d{2}"
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
              onChange={updateInputs}
              required
            />
          </Label>
        </SmallerFieldsDiv>
        <SmallerFieldsDiv>
          <Label>
            Event time
            <SmallerInput
              id="event-time"
              type="time"
              name="time"
              value={dateTime.time}
              onChange={updateDateTime}
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
              onChange={updateInputs}
              required
            />
          </Label>
        </SmallerFieldsDiv>
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
