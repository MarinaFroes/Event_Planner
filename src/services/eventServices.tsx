import { endpoint, access_token, id_token } from './api'

export const getEvent = async (eventId: string) => {
  const response = await fetch(`${endpoint}/events/${eventId}`)
  
  if (response.status === 200) {
    let eventData = await response.json()
    return eventData
  }

  throw new Error(`${response.status}`)
}

interface Subject {
  name: string;
  imageUrl: string;
  details?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface Guest {
  id: string;
  name: string;
  email: string;
  status: "pending" | "Accept" | "Reject";
}

interface Event {
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

interface CreatedEvent extends Event {
  id: string;
  guestsInEvents: Guest[] | [];
  eventStatus: "open" | "close";
  pricePerGuest: number;
  createDate: string;
}

export const saveEvent = async (event: Event) => {
  const response = await fetch(`${endpoint}/events`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': access_token,
      'X-Id-Token': id_token
    },
    body: JSON.stringify(event)
  })

  if (response.status === 200) {
    let createdEvent: CreatedEvent = await response.json()
    return createdEvent
  }

  throw new Error(`${response.status}`)
}

// import RequestService from './RequestService';
// import { DOMAIN_URL } from './ServiceConstants';

// const Requester = new RequestService(DOMAIN_URL);

// class ProjectService {
//   constructor() {

//   }

//   /**
//    * Sends request to create project into the DB
//    *
//    * @param {Object} payload
//    * @returns {Promise}
//    */
//   createProject = (payload) => {
//     return Requester.post('api/v1/projects', payload).then((res) => {
//       return Promise.resolve(res);
//     });
//   };

//   /**
//    * Gets single project from the DB
//    *
//    * @param {String} id
//    * @returns {Promise}
//    */
//   getSingleProject = (id) => {
//     return Requester.get(`api/v1/projects/${id}`).then((res) => {
//       return Promise.resolve(res);
//     });
//   };

//   /**
//    * Gets own projects of the particular user from the DB
//    *
//    * @returns {Promise}
//    */
//   getOwnProjects = () => {
//     return Requester.get(`api/v1/projects`).then((res) => {
//       return Promise.resolve(res);
//     });
//   };

//   /**
//    * User updates project's loads and technologies on the DB
//    *
//    * @param {String} projectId
//    * @param {Object} data
//    * @returns {Promise}
//    */
//   updateProject = (projectId, data) => {
//     // const payload = { project: data } 
//     return Requester.update(`api/v1/projects/${projectId}`, data).then((res) => {
//       return Promise.resolve(res);
//     });
//   };

//   /**
//    * User deletes single project in the DB
//    *
//    * @param {String} projectId
//    * @returns {Promise}
//    */
//   deleteProject = (projectId) => {
//     return Requester.delete(`/api/v1/projects/${projectId}`).then((res) => {
//       return Promise.resolve(res);
//     });
//   };
// }

// export default ProjectService;