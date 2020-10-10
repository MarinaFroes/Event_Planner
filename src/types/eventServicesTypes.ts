import { EventData } from './index'

export interface EventInput {
  title: string
  host: string
  subject: string
  additionalInfo?: string
  date: string
  address: string
  maxNumberGuest: number
  totalCost: number
}

export type EventOutput = EventData
