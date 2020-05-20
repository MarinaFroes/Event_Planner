import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

//  COMPONENTS
import TextBox from './core/TextBox'
import Btn from './core/Btn'

// SERVICES
import { formatDateForInput, getTodayDate, populateForm, clearForm } from '../services/formServices'
import { setLocalStorage } from '../utils/authDataRepository'
import { loginUrl } from '../services/authServices'

// ACTIONS
import { handleCreateEvent } from '../store/events/eventActions'

// TYPES
import { FormData } from '../services/formServicesTypes'
import { AppState, Subject } from '../store/types'
import { UserState } from '../store/users/types'
import { ErrorState } from '../store/error/types'

// STYLES
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
  btnText: string;
  primaryBtn: boolean;
  btnWidth?: string;
  heading1: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
}

// Initial Form Data
const init: FormData = {
  title: "",
  additionalInfo: "",
  address: "",
  maxNumberGuest: 0,
  totalCost: 0,
  tasks: [],
  date: "",
  time: "00:00",
  subjectName: "",
  imagePreview: null,
  imageLink: null,
}

// Custom hook 
const usePersistentState = (init: FormData) => {
  const [value, setValue] = useState(populateForm(init))
  
  useEffect(() => {
    setLocalStorage('formData', value)
  }, [value])

  return [value, setValue]
}

const EventForm: React.FC<FormProps> = ({ btnText, primaryBtn, heading1, heading2, heading3, heading4, btnWidth }) => {

  const [form, setForm] = usePersistentState(init)
  
  let userId: string = ''
  const userState: UserState = useSelector((state: AppState) => state.user)
  if (userState.isLoggedIn) {
    userId = userState.user.id
  }

  const selectedEvent = useSelector((state: AppState) => state.event.selectedEvent)
  const subjectList = useSelector((state: AppState) => state.subject)

  let selectedSubject: Subject | null = null
  
  if (selectedEvent) {
    const subjectId = selectedEvent.subject.id
    selectedSubject = subjectList.filter(subject => subject.id === subjectId)[0]
  }
  
  const error: ErrorState = useSelector((state: AppState) => state.error)
  
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [isCreated, setIsCreated] = useState(false)

  const dispatch = useDispatch()
  
  const createEvent = (formData: FormData) => dispatch(handleCreateEvent(formData))

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() 
    await createEvent(form)

    if (!error.isOpen) {
      clearForm()
      setForm(init)
      setIsCreated(true)
    }
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
        let file = event.target.files[0];
        let reader = new FileReader();
        
        reader.readAsDataURL(file)
        
        if (file.size > 1000000) {
          setShowAlert(true)
          setForm({
            ...form,
            imagePreview: null,
          })
          return
        } else {
          setShowAlert(false)
        }

        reader.onload = function (e) {
          if (e.target) {
            setForm({
              ...form,
              imagePreview: e.target.result,
            })
          }
        };
        
      }
    } else {
      setForm({
        ...form,
        imagePreview: null,
      })
      setShowAlert(false)
    }
  }

  if (userState.isLoggedIn && isCreated) {
    return <Redirect to={`/users/${userId}`} />
  }

  return (

    <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <Sec>
        <TextBox
          heading1={heading1}
          heading2={heading2}
        />

        {
          form.imagePreview ? <Image src={form.imagePreview} alt="meal photo" />
            : selectedSubject ? <Image src={selectedSubject.imageLink} alt="meal photo" /> 
            : <Image src="https://dummyimage.com/400x400/c4c4c4/ffffff.jpg&text=Add+meal+photo" alt="no meal photo added sign" />
        }
        <Label>
          Add your meal photo
          <InputFile
            id="event-image"
            type="file"
            accept="image/png, image/jpeg"
            name="imagePreview"
            onChange={updateImage}
          />
        </Label>
        {showAlert && <p style={{color: "red"}}>1MB maximum size</p>}
        <Label>
          Meal name
          <Input
            id="meal-name"
            list="meal-names"
            name="subjectName"
            value={form.subjectName}
            onChange={updateFields}
            required
          />
          {userState.isLoggedIn === true && (
            <datalist id="meal-names">
              <option value="Chocolate cake"/>
              <option value="Feijoada"/>
              <option value="Caranguejo"/>
              <option value="Cuxa rice"/>
            </datalist>
          )}
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
              min={formatDateForInput(getTodayDate())}
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
              name="maxNumberGuest"
              value={form.maxNumberGuest}
              onChange={updateFields}
              required
            />
          </Label>
        </SmallerFieldsDiv>
        {
          userState.isLoggedIn && (
            <Btn
              primaryBtn={primaryBtn}
              btnText={btnText}
              btnWidth={btnWidth}
              btnType="submit"
            />
          )
        }
        {
          !userState.isLoggedIn && (
            <Btn
              primaryBtn={primaryBtn}
              btnText="Login to create the event"
              btnWidth={btnWidth}
              btnType="button"
              onClick={() => {
                window.location.assign(loginUrl)
              }}
            />
          )
        }
      </Sec>
    </Form>

  )
}

export default EventForm
