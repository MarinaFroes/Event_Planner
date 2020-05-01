import { SubjectData } from './subjectServicesTypes'

interface Guest {
  id: string;
  name: string;
  email: string;
  status: "Pending" | "Accept" | "Reject";
}

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

interface Task {
  id: string;
  details: string;
  owner: string;
  eventId: string;
}

interface Host {
  id: string;
  name: string;
  email: string;
}

export interface EventData {
  id: string;
  title: string;
  host: Host;
  subject: SubjectData;
  date: string;
  createDate: string;
  address: string;
  maxNumberGuest: number;
  tasks: [] | Task[];
  guestInEvents: [] | Guest[];
  totalCost: number;
  additionalInfo: string;
  eventStatus: "Open" | "Close";
  pricePerGuest: number;
}
