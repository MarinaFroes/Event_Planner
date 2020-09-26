import styled from 'styled-components'

export const Form = styled.form`
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

export const Label = styled.label`
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

export const Image = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
  object-fit: cover;
`

export const Input = styled.input`
  font-size: 16px;
  color: var(--main-color-black, #000);
  border: 1px solid #c4c4c4;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  height: 40px;
`

export const InputFile = styled(Input)`
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

export const SmallerInput = styled(Input)`
  width: 100%;
`

export const TextArea = styled.textarea`
  font-size: 16px;
  color: var(--main-color-black, #000);
  border: 1px solid #c4c4c4;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
`

export const ClearButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--main-color-red, #bd0b2b);
  margin-bottom: 20px;
`

export const SmallerFieldsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > :nth-child(2) {
    margin-left: 20px;
  }
`

export const Sec = styled.div`
  width: 90%;
  margin: 20px;
  max-width: 500px;
`
