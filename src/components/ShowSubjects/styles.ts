import styled from 'styled-components'


export const SubjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: var(--main-color-grey, #eee);
  padding: 20px;

  @media only screen and (min-width: 1000px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const MealsList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const MealItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 300px;
`

export const AddNew = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 0 0 5px;
  width: 100%;
  max-width: 300px;
`

export const IconBtn = styled.button<{ isBlue: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-white, #fff);
  color: ${props => props.isBlue ? "var(--main-color-blue, #0c598A)" : "var(--main-color-red, #bd0b2b)"};
  height: 40px;
  width: 40px;
  cursor: pointer;
  border: 1px solid #c4c4c4;
  border-left: none;
  border-radius: 0 5px 5px 0;
  font-size: 22px;
`

export const PlusIconBtn = styled(IconBtn)`
  border: none;
  background-color: var(--main-color-grey, #eee);
`

export const Input = styled.input`
  font-size: 16px;
  background-color: var(--main-color-white, #fff);
  color: var(--main-color-black, #000);
  border: 1px solid #c4c4c4;
  border-right: none;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px 0 0 5px;
  width: 100%;
  height: 40px;
`
