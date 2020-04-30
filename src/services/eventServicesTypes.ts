import { User } from './userServicesTypes'
import { Subject } from './subjectServicesTypes'

interface Guest {
  id: string;
  name: string;
  email: string;
  status: "pending" | "Accept" | "Reject";
}

export interface Event {
  title: string;
  host: string | User;
  subject: string | Subject;
  additionalInfo?: string;
  date: string;
  time: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
}

interface Task {
  id: string;
  details: string;
  owner: string;
  eventId: string;
}

export interface CreatedEvent extends Event {
  id: string;
  guestsInEvents: Guest[] | [];
  eventStatus: "open" | "close";
  pricePerGuest: number;
  createDate: string;
  tasks: Task[] | [];
}
