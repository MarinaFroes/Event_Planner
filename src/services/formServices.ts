import { getLocalStorage } from '../utils/authDataRepository'

import { FormData } from './formServicesTypes'
import { EventOutput } from './eventServicesTypes'

export const getTodayDate = (): string => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  return `${year}-${month}-${day}`
}

export const formatDateForInput = (date: string): string => {
  const dateArray = date.split("-")
  const [ yearString, monthString, dayString ] = dateArray
  const month = Number(monthString)
  const day = Number(dayString)

  let dd, mm
  (day < 10) ? (dd = '0' + day) : (dd = day);
  (month < 10) ? (mm = '0' + month) : (mm = month);

  return yearString + '-' + mm + '-' + dd
}

const formatDate = (date: string) => {
  //dateInput = 30-04-2020
  const formattedDate = `${date.split("-").reverse().join("-")}`
  // formattedDate = 2020-04-30
  return formattedDate
}

export const isBeforeToday = (date: string) => {
  const eventDate: any = new Date(formatDate(date))
  const todayDate: any = new Date(getTodayDate())

  if ( todayDate - eventDate < 0) {
    return false
  } else {
    return true
  }
}

const formatServerDate = (date: string, time: string) => {
  // date: "2020-04-30"
  // time: "18:30"
  const formattedDate = `${date.split("-").reverse().join("-")} ${time}:00`
  // formattedDate: "30-04-2020 18:30:00"
  return formattedDate
}

export const formatEvent = (
  formData: FormData,
  subjectId: string,
  hostEmail: string
) => {

  const date = formatServerDate(formData.date, formData.time)
  
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

export const formatFormData = (eventOutput: EventOutput) => {
  const { title, additionalInfo, address, maxNumberGuest, tasks, date, totalCost, subject } = eventOutput
  console.log(eventOutput)
  const formData: FormData = {
    title,
    additionalInfo,
    address,
    maxNumberGuest,
    totalCost,
    tasks,
    date: (date.split(' ')[0]).split('-').reverse().join('-'),
    time: date.split(' ')[1],
    subjectName: subject.name,
    imageUrl: subject.imageUrl || null
  }

  return formData
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