import { Task } from './reduxTypes'

export interface FormData {
  title: string
  additionalInfo?: string
  address: string
  maxNumberGuest: number
  totalCost: number
  tasks: Task[]
  date: string
  time: string
  subjectName: string
  imagePreview?: null | string
}
