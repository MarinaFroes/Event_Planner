import styled from 'styled-components'

export const AcceptInviteContainer = styled.div`
  background-color: var(--main-color-white, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EventInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  width: 100%;
 
  @media only screen and (min-width: 1080px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
  object-fit: cover;
`

export const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color-grey, #eee);
  padding: 60px 0;
  width: 100%;
`
