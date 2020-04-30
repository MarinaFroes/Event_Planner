import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextBox from './core/TextBox'
import Btn from './core/Btn'
import { getTodayDate, formatEvent, populateForm } from '../services/formServices'
import { setLocalStorage } from '../utils/authDataRepository'
import { isTokenProvided, path } from '../services/authServices'

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

interface FormProps {
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

interface FormData {
  title: string;
  additionalInfo?: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
  tasks: Task[];
  date: string;
  time: string;
  subjectName: string;
  imageUrl: null | FileList;
}

// Custom hook 
const usePersistentState = (init: FormData) => {
  
  const [value, setValue] = useState(populateForm(init))
  
  useEffect(() => {
    setLocalStorage('formData', value)
  }, [value])

  return [value, setValue]
}

const EventForm: React.FC<FormProps> = ({ showImage, btnText, primaryBtn, heading1, heading2, heading3, heading4, btnWidth }) => {

  const [form, setForm] = usePersistentState({
    title: "",
    additionalInfo: "",
    address: "",
    maxNumberGuests: 0,
    totalCost: 0,
    tasks: [],
    date: "",
    time: "00:00",
    subjectName: "",
    imageUrl: null,
  })

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState<boolean>(false)

  useEffect(() => {
    if (isTokenProvided(window.location)) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event)
    formatEvent(form);
  }

  const updateFields = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const updateImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0]) {
        var file = event.target.files[0];
        var reader = new FileReader();
        
        reader.readAsDataURL(file)
        
        if (event.target.files[0].size > 1000000) {
          setShowAlert(true)
          setForm({
            ...form,
            imageUrl: null,
          })
          return
        } else {
          setShowAlert(false)
        }

        reader.onload = function (e) {
          if (e.target) {
            setForm({
              ...form,
              imageUrl: e.target.result,
            })
          }
        };
        
      }
    } else {
      setForm({
        ...form,
        imageUrl: null,
      })
      setShowAlert(false)
    }
  }

  return (

    <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <Sec>
        <TextBox
          heading1={heading1}
          heading2={heading2}
        />

        {
          form.imageUrl
            ? <Image src={form.imageUrl} alt="meal photo" />
            : <Image src="https://dummyimage.com/400x400/c4c4c4/ffffff.jpg&text=Add+meal+photo" alt="meal photo" />
        }

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
        {showAlert && <p style={{color: "red"}}>1MB maximum size</p>}
        <Label>
          Meal name
          <Input
            id="meal-name"
            type="text"
            placeholder="What is your dish name"
            name="subjectName"
            value={form.subjectName}
            onChange={updateFields}
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
            onChange={updateFields}
            required
          />
        </Label>
        <Label>
          Additional Info
          <TextArea
            id="additional-info"
            name="additionalInfo"
            value={form.additionalInfo}
            onChange={updateFields}
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

        <SmallerFieldsDiv>
          <Label>
            Event Date
            <SmallerInput
              id="event-date"
              type="date"
              min={getTodayDate()}
              max="2999-12-31"
              name="date"
              value={form.date}
              onChange={updateFields}
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
              onChange={updateFields}
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
        </SmallerFieldsDiv>
        {
          isLoggedIn && (
            <Btn
              primaryBtn={primaryBtn}
              btnText={btnText}
              btnWidth={btnWidth}
              btnType="submit"
            />
          )
        }
        {
          !isLoggedIn && (
            <Btn
              primaryBtn={primaryBtn}
              btnText="Login to create the event"
              btnWidth={btnWidth}
              btnType="button"
              onClick={() => {
                window.location.assign(path)
              }}
            />
          )
        }
      </Sec>
    </Form>

  )
}

export default EventForm
