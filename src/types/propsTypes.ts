import { Task, Guest } from './index'

export interface BtnProps {
  primaryBtn: boolean
  btnText: string
  btnWidth?: string
  btnType: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export interface EventCardProps {
  subjectName: string
  additionalInfo?: string
  address: string
  tasks?: Task[]
  date: string
  time: string
  participants: number
  cost: number
}

export interface FormProps {
  btnText: string
  primaryBtn: boolean
  btnWidth?: string
  heading1: string
  heading2?: string
  heading3?: string
  heading4?: string
}

export interface EventPreviewProps {
  title: string
  subjectName: string
  date: string
  time: string
  eventId: string
  status: 'open' | 'closed'
}

export interface GuestCardProps {
  guest: Guest
}

export interface HeaderProps {
  title: string
  subtitle: string
  imageSrc: string
}

export interface HeadingsProps {
  title: string
  subtitle: string
}

export interface MainHeaderProps {
  title: string
  subtitle: string
  imageSrc: string
}

export interface ShowEventsProps {
  status: 'open' | 'closed'
}

export interface ShowGuestsProps {
  guests: Guest[]
}

export interface TextBoxProps {
  heading1?: string
  heading2?: string
}
