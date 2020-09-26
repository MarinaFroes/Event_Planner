import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  width: 100%;
  background-color: var(--main-color-white, #fff);
`

export const StyledLogo = styled.img`
  height: 30px;
  margin-left: 10px;
  padding-right: 5px;
`

export const Title = styled.p`
  font-size: 16px;
  color: var(--main-color-blue, #0c598a);
  margin: auto;
`

export const LogoLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  
  :hover {
    cursor: pointer;
  }
`

export const InfoLink = styled.a`
  color: var(--main-color-blue, #0c598a);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  border-bottom: 1px solid var(--main-color-blue, #0c598a);
  width: 100%;
  max-width: 768px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  color: var(--main-color-blue, #0c598a);
  max-width: 768px;
`

export const SocialMediaLink = styled.a`
  text-decoration: none;
  color: var(--main-color-blue, #0c598a);
  font-size: 20px;
  margin: 20px;
  
  :hover {
    cursor: pointer;
  }
`

export const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: var(--main-color-blue, #0c598a);
  font-size: 14px;
  width: 100%;
  max-width: 768px;
`