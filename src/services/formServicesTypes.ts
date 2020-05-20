import { Task } from '../store/types'

export interface FormData {
  title: string;
  additionalInfo?: string;
  address: string;
  maxNumberGuest: number;
  totalCost: number;
  tasks: Task[];
  date: string;
  time: string;
  subjectName: string;
  imageUrl: null | string;
}