import { useEffect, useState } from 'react'
import { FormData } from '../types/formServicesTypes'
import { populateForm } from '../services/formServices'
import { setLocalStorage } from '../utils/authDataRepository'

export const init: FormData = {
  title: "",
  additionalInfo: "",
  address: "",
  maxNumberGuest: 0,
  totalCost: 0,
  tasks: [],
  date: "",
  time: "00:00",
  subjectName: "",
  imagePreview: null,
}

export const usePersistentState = (init: FormData) => {
  const [value, setValue] = useState(populateForm(init))

  useEffect(() => {
    setLocalStorage('formData', value)
  }, [value])

  return [value, setValue]
}

