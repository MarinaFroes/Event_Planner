import queryString from 'query-string'
import jwt_decode from 'jwt-decode'

export const getTodayDate = () => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()

  let dd, mm
  (day < 10) ? (dd = '0' + day) : (dd = day);
  (month < 10) ? (mm = '0' + month) : (mm = month);

  return year + '-' + mm + '-' + dd
}

export const formatDate = (date: string, time: string) => {
  // date: "2020-12-03"
  // time: "18:30"
  const formattedDate = `${date.split("-").reverse().join("-")} ${time}:00`
  // formattedDate: "30-04-2020 12:12:00"
  return formattedDate
}

export const setLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const getLocalStorage = (name: string) => {
  const data = JSON.parse(localStorage.getItem(name) || '{}')
  return data
}

interface Tokens{
  access_token: string,
  id_token: string
}

export const isTokenProvided = (location: Location): boolean => {
  const values = getTokensFromURL(location)
  if (!values) {
    return false
  }
  
  if (values.access_token.length > 0 && values.id_token.length > 0) {
    return true
  } else {
    return false
  }
}

export const getTokensFromURL = (location: Location): Tokens | null => {
  const values = queryString.parse(location.search)
  if (Object.keys(values).length <= 0) {
    return null
  }
  return {
    access_token: values.access_token as string,
    id_token: values.id_token as string 
  }
}

const saveUserData = (data: any) => {
  setLocalStorage('access_token', data.access_token)
  setLocalStorage('id_token', data.id_token)
  setLocalStorage('authedUserData', data.authedUserData)
}

export const saveAuthedUser = (location: Location) => {

  const values = getTokensFromURL(location)
  if (values === null) {
    return
  }

  const { access_token, id_token } = values
  const authedUserData = jwt_decode(JSON.stringify(id_token))
  saveUserData({ access_token, id_token, authedUserData }) 
  
}