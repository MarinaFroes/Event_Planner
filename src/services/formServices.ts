import { getLocalStorage } from '../utils/authDataRepository'

import { FormData } from '../types/formServicesTypes'
import { EventOutput } from '../types/eventServicesTypes'

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
  const eventDate: Date = new Date(formatDate(date))
  const todayDate: Date = new Date(getTodayDate())

  if ( Number(todayDate) - Number(eventDate) < 0) {
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

export const formatFormData = (eventOutput: EventOutput, imageLink: string) => {
  const { title, additionalInfo, address, maxNumberGuest, tasks, date, totalCost, subject } = eventOutput
 
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
    imagePreview: imageLink
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

export const dataUrlToBlob = (dataUrl: string) => {
  // dataUrl format: data:image/jpeg;base64,data
  const byteString = atob(dataUrl.split(',')[1]) // accessing the data

  const mimeString = dataUrl.split(';')[0].split(':')[1] // accessing the MIME type and subtype

  const arrayBuffer = new ArrayBuffer(byteString.length) // create new buffer

  let bufferView = new Uint8Array(arrayBuffer) // create view into the buffer

  for (let i = 0; i < byteString.length; i++){
    bufferView[i] = byteString.charCodeAt(i)
  }

  const blob = new Blob([arrayBuffer], { type: mimeString })

  return blob
}