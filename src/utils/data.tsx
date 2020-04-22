
const absolutePath = "http://localhost:8080"
// const relativePath = "localhost/api/"

export const getUsers = async () => {
  const response = await fetch(`${absolutePath}/users`)
  const usersData = await response.json()
  return usersData
  // setUsers(data)
}

export const getEvent = async (eventId: string) => {
  const response = await fetch(`${absolutePath}/events/${eventId}`)
  const eventData = await response.json()
  return eventData
}

interface Task {
  id: string,
  details: string,
  owner: string,
  eventId: string
}

interface Subject {
  name: string,
  imageUrl: string
}

interface Event {
  title: string;
  host: string;
  subject: Subject;
  additionalInfo?: string;
  date: string;
  time: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
  tasks?: Task[]
}
/**{
    "description": "test",
    "host": "3e8dcd1b-7683-4bda-bafe-f552c27b0520",
    "subject": "28b708e9-d9c3-4579-b352-7cf8f051db3c",
    "date": "26.04.2020",
    "address": "here",
    "maxNumberGuest": 2,
    "totalCost": 10
}
 */
const access_token = ""
const id_token = ""

// export const saveEvent = async (event: Event) => {
//   const response = await fetch(`${absolutePath}/events`, {
//     method: 'POST', 
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': access_token,
//       'X-Id-Token': id_token
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
// }