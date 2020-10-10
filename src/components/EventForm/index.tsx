import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

//  COMPONENTS
import Btn from '../Btn'
import TextBox from '../TextBox'

// SERVICES
import {
  formatDateForInput,
  getTodayDate,
  clearForm,
} from '../../services/formServices'
import { loginUrl } from '../../services/authServices'

// ACTIONS
import { handleCreateEvent } from '../../redux/actions/eventActions'

// TYPES
import { FormProps } from '../../types/propsTypes'
import {
  ErrorState,
  SubjectState,
  UserState,
  AppState,
} from '../../types/reduxTypes'
import { Subject } from '../../types'
import { FormData } from '../../types/formServicesTypes'

// CUSTOM HOOK
import { usePersistentState, init } from '../../hooks/usePersistentState'

// STYLES
import {
  Form,
  Label,
  Image,
  Input,
  InputFile,
  SmallerInput,
  TextArea,
  ClearButton,
  SmallerFieldsDiv,
  Sec,
} from './styles'

const EventForm: React.FC<FormProps> = ({
  btnText,
  primaryBtn,
  heading1,
  heading2,
  heading3,
  heading4,
  btnWidth,
}) => {
  const [form, setForm] = usePersistentState(init)

  let userId: string = ''
  const userState: UserState = useSelector((state: AppState) => state.user)

  if (userState.isLoggedIn) {
    userId = userState.user.id
  }

  const subjects: SubjectState = useSelector((state: AppState) => state.subject)
  const error: ErrorState = useSelector((state: AppState) => state.error)

  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [isCreated, setIsCreated] = useState(false)

  const dispatch = useDispatch()

  const createEvent = (formData: FormData) =>
    dispatch(handleCreateEvent(formData))

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await createEvent(form)

    if (!error.isOpen) {
      clearForm()
      setForm(init)
      setIsCreated(true)
    }
  }

  const updateFields = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.name === 'subjectName') {
      console.log(event.target)
    }
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const updateImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0]) {
        let file = event.target.files[0]
        let reader = new FileReader()

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
        }
      }
    } else {
      setForm({
        ...form,
        imagePreview: null,
      })
      setShowAlert(false)
    }
  }

  // TODO: fix type any
  const addFallbackSrc = (event: any) => {
    event.target.src =
      'https://dummyimage.com/400x400/c4c4c4/ffffff.jpg&text=Add+meal+photo'
  }

  if (userState.isLoggedIn && isCreated) {
    return <Redirect to={`/users/${userId}`} />
  }

  return (
    <Form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(event)
      }
    >
      <Sec>
        <TextBox heading1={heading1} heading2={heading2} />

        {form.imagePreview && (
          <Image
            onError={(e) => addFallbackSrc(e)}
            src={form.imagePreview}
            alt='meal photo'
          />
        )}
        <Label>
          Add your meal photo
          <InputFile
            id='event-image'
            type='file'
            accept='image/png, image/jpeg'
            name='imagePreview'
            onChange={updateImage}
          />
        </Label>
        {showAlert && <p style={{ color: 'red' }}>1MB maximum size</p>}
        <Label>
          Meal name
          <Input
            id='meal-name'
            list='meal-names'
            name='subjectName'
            value={form.subjectName}
            onChange={updateFields}
            required
          />
          {userState.isLoggedIn === true && (
            <datalist id='meal-names'>
              {subjects &&
                subjects.map((subject: Subject) => (
                  <option value={subject.name} key={subject.id} />
                ))}
            </datalist>
          )}
        </Label>
      </Sec>
      <Sec>
        <TextBox heading1={heading3} heading2={heading4} />
        <Label>
          Event Title
          <Input
            id='event-title'
            type='text'
            placeholder='Create a title for your event'
            name='title'
            value={form.title}
            onChange={updateFields}
            required
          />
        </Label>
        <Label>
          Additional Info
          <TextArea
            id='additional-info'
            name='additionalInfo'
            value={form.additionalInfo}
            onChange={updateFields}
            placeholder='What your guests should know'
          />
        </Label>

        {/* TODO: Allow to choose current location as address */}
        <Label>
          Address
          <Input
            type='text'
            placeholder='What is the event location'
            name='address'
            value={form.address}
            onChange={updateFields}
            required
          />
        </Label>

        <SmallerFieldsDiv>
          <Label>
            Event Date
            <SmallerInput
              id='event-date'
              type='date'
              min={formatDateForInput(getTodayDate())}
              max='2999-12-31'
              name='date'
              value={form.date}
              onChange={updateFields}
              pattern='\d{4}-\d{2}-\d{2}'
              required
            />
          </Label>

          <Label>
            Total cost:
            <SmallerInput
              type='number'
              id='total-cost'
              min='1'
              max='99999'
              name='totalCost'
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
              id='event-time'
              type='time'
              name='time'
              value={form.time}
              onChange={updateFields}
              required
            />
          </Label>
          <Label>
            Nr of Guests
            <SmallerInput
              type='number'
              id='max-guests'
              min='1'
              max='99999'
              name='maxNumberGuest'
              value={form.maxNumberGuest}
              onChange={updateFields}
              required
            />
          </Label>
        </SmallerFieldsDiv>
        {userState.isLoggedIn && (
          <>
            <Btn
              primaryBtn={primaryBtn}
              btnText={btnText}
              btnWidth={btnWidth}
              btnType='submit'
            />
            <ClearButton
              type='button'
              onClick={() => {
                clearForm()
                setForm(init)
              }}
            >
              Clear form
            </ClearButton>
          </>
        )}
        {!userState.isLoggedIn && (
          <Btn
            primaryBtn={primaryBtn}
            btnText='Login to create the event'
            btnWidth={btnWidth}
            btnType='button'
            onClick={() => {
              window.location.assign(loginUrl)
            }}
          />
        )}
      </Sec>
    </Form>
  )
}

export default EventForm
