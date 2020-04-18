// import React, { useState, useRef} from 'react'
import React, { useRef} from 'react'
import styled from 'styled-components'

interface Props {
  showImage: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  name: string;
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: var(--main-color-orange, #f07422);
  width: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--main-color-orange, #f07422);
  width: 90%;
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

const EventForm: React.FC<Props> = ({ handleChange, showImage }) => {
  // const [name, useName] = useState<TextNode>({name: ""});
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormContainer>
      <Form>
        {showImage &&
          (<div>
            <Image src="https://dummyimage.com/300x300/c4c4c4/ffffff.png&text=Add+an+image" alt="" />
            <Label>
              Select an image
          <Input
                id="event-image"
                type="file"
                accept="image/png, image/jpeg"
                required
              />
            </Label>
          </div>)
        }
        <Label>
          <Input
            id="event-title"
            type="text"
            placeholder="Title"
            ref={inputRef}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          <TextArea
            id="event-description"
            placeholder="Description"
            required
          />
        </Label>

        {/* TODO: Allow to choose current location as address */}
        <Label>
          Address
        <Input
            type="text"
            placeholder="Address"
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
      </Form>
    </FormContainer>
  )
}

export default EventForm
