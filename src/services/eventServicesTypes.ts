import { EventData } from '../store/types'

export interface EventInput {
  title: string;
  host: string;
  subject: string;
  additionalInfo?: string;
  date: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
}

export type EventOutput = EventData
