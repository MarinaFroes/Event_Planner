// import React, { useState, useRef} from 'react'
import React, { useRef} from 'react'
import styled from 'styled-components'

import TextBox from './TextBox'
import Btn from './Btn'

interface Props {
  showImage: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  btnText: string;
  primaryBtn: boolean;
  btnWidth?: string;
  heading1: string;
  heading2?: string;
}

interface TextNode {
  name: string;
}

const FormContainer = styled.div`
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
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--main-color-orange, #f07422);
  width: 90%;
  max-width: 500px;
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
  justify-content: space-bet;
  width: 100%;
`

const EventForm: React.FC<Props> = ({ handleChange, showImage, btnText, primaryBtn, heading1, heading2, btnWidth }) => {
  // const [name, useName] = useState<TextNode>({name: ""});
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormContainer>
      
      <Form>
        <div>
          <TextBox
            heading1={heading1} heading2={heading2}
          />
          <Label>
            Event Title
            <Input
              id="event-title"
              type="text"
              placeholder="Create a name for your event"
              ref={inputRef}
              onChange={handleChange}
              required
            />
          </Label>
          {showImage &&
            (
              <Image src="https://dummyimage.com/400x400/c4c4c4/ffffff.png&text=Add+meal+photo" alt="meal photo" />
            )
          }
        </div>
        <Label>
        Select a meal photo
        <InputFile
            id="event-image"
            type="file"
            accept="image/png, image/jpeg"
            required
          />
        </Label>
        <Label>
          Meal name
          <Input
            id="meal-name"
            type="text"
            placeholder="Describe your dish"
            required
          />
        </Label>
        <Label>
          Additional Info
          <TextArea
            id="additional-info"
            placeholder="What your guests should know"
          />
        </Label>

        {/* TODO: Allow to choose current location as address */}
        <Label>
          Address
        <Input
            type="text"
            placeholder="What is the event location"
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
              required
            />
          </Label>

        </StyledDiv>
        <Btn
          primaryBtn={primaryBtn}
          btnText={btnText}
          btnWidth={btnWidth}
        /> 
      </Form>
    </FormContainer>
  )
}

export default EventForm
