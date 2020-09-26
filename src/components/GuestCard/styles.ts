import styled from 'styled-components'

export const StyledCard = styled.div`
  text-align: left;
  width: 300px;
  padding: 20px;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
  -webkit-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  -moz-box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  box-shadow: 4px 4px 10px 2px rgba(196,196,196,1);
  background-color: var(--main-color-white, #fff);
`

export const GuestHeading = styled.p`
  color: var(--main-color-black, #000);
  font-size: 16px;
  font-weight: bold;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GuestContact = styled.p`
  color: var(--main-color-blue, #0c598a);
  font-size: 16px;
  padding: 10px; 
`

export const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  color: var(--main-color-blue, #0c598a);
`

export const Checkbox = styled.input`
  border: 1px solid #c4c4c4;
  background-color: var(--main-color-white, #fff);
`