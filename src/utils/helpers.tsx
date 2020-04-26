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
  console.log('saving', data)
  localStorage.setItem(name, JSON.stringify(data))
}

export const getLocalStorage = (name: string) => {
  const data = JSON.parse(localStorage.getItem(name) || '{}')
  return data
}

export const saveAuthedUser = (location: Location) => {
  const values = queryString.parse(location.search) 

  if (Object.keys(values).length > 0) {
    const { access_token, id_token } = values

    access_token && setLocalStorage('access_token', access_token)

    id_token && setLocalStorage('id_token', id_token)

    const authedUserData = jwt_decode(JSON.stringify(id_token) || "")

    authedUserData && setLocalStorage('authedUserData', authedUserData)
  }
}