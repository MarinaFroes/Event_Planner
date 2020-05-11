import { getLocalStorage } from '../utils/authDataRepository'

import { FormData } from './formServicesTypes'

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

const formatDate = (date: string, time: string) => {
  // date: "2020-12-03"
  // time: "18:30"
  const formattedDate = `${date.split("-").reverse().join("-")} ${time}:00`
  // formattedDate: "30-04-2020 12:12:00"
  return formattedDate
}

export const formatEvent = (
  formData: FormData,
  subjectId: string,
  hostEmail: string
) => {

  const date = formatDate(formData.date, formData.time)
  
  const { title, additionalInfo, address, maxNumberGuest, totalCost, tasks } = formData

  const formattedForm = {
    title, 
    host: hostEmail,
    subject: subjectId,
    date,
    address,
    maxNumberGuest,
    totalCost,
    additionalInfo,
    tasks
  }

  return formattedForm
}

export const populateForm = (init: FormData) => {
  let data = getLocalStorage('formData')

  if (Object.keys(data).length === 0) {
    data = init
  }

  return data
}

export const clearForm = () => {
  localStorage.removeItem('formData')
}