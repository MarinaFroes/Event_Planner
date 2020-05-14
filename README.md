<p align="center"><a href="https://github.com/MarinaFroes/Event_Planner" target="_blank"><img src="./src/assets/icons/logo.svg" alt="logo" title="logo" width="80"></a></p>
<h1 align="center">Event Planner Web App</h1>

This web app is a work in progress and aims to provide an easy way to plan events and invite friends sharing the costs with them. The main reason I started this project was to apply my frontend skills using React + Redux while learning Typescript on the way.
If you want to learn more about how I have been planning this project from scratch, you can read the [My Journey](./MyJourney.md) file.

## Overview
<p align="center"><img src="./src/assets/images/CreateEventPage.png" align="center" /></p>

## Tech stack

Frontend:
- React for the UI
- Redux for state management
- Typescript for type checking

IN PROGRESS

For the backend information, you can check the Magno Ferreira's [event-planner-service](https://github.com/JMagnoJunior/event-planner-service) repository.
 
## Frontend

- I built a React/Redux front end for the application using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

### Available data

There are 4 types of objects stored in the database:

* User
* Event
* Subject
* Task

#### User

- User object includes:

| Attribute    | Type             | Description                  |
|--------------|------------------|------------------------------|
| id           | String           | The user’s unique identifier |
| name         | String           | The user’s name              |
| email        | String           | The user’s e-email address   |

<!-- TODO: Add avatarUrl, events, phone
| avatarURL  | String           | The path to the image file |
| phone  | String | The user’s phone number (optional) |
 -->

#### Event

- Event object includes:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id              | String | The event’s unique identifier |
| title          | String           | The event’s name |
| host | Object | Object containing the host id, name and email  |
| subject         | Object           | Object containing the meal id, name, details (optional), the creator id and url of the meal photo (optional) |
| date        | String | The date and time the event will take place in the format "14-05-2020 12:44:22"|
| createDate | String | The event's creation date and time in the format "14-05-2020 12:44:22"|
| address         | String           | The event’s location |
| maxNumberGuest | Number | The max number of guests for the event|
| tasks | Array | Array containing tasks objects, including id, details, eventId and owner id, who is responsible for the task|
| guestInEvents | Array | Array of guest objects, including id, name, email and status of the guests who registered for the event |
| totalCost | Number | The event's total cost|
| additionalInfo  | String     | Additional info (optional) |
| eventStatus | String | Status of the event: "Open" or "Close" |
| pricePerGuest | Number | The cost per guest |

#### Subject

- Subject object includes:

| Attribute    | Type             | Description                  |
|--------------|------------------|------------------------------|
| id           | String           | The subject’s unique identifier |
| name         | String           | The subject’s name              |
| imageUrl     | FileList         | Image url (optional)         |
| detail       | String           | Additional info (optional)   |
| createdBy    | String           | Creator id                   |

#### Task

- Subject object includes:

| Attribute    | Type             | Description                  |
|--------------|------------------|------------------------------|
| id           | String           | The task’s unique identifier |
| eventId      | String           | Event id                     |
| details      | String           | Additional info (optional)   |
| owner        | String           | Owner id                     |

### Services
<!-- TODO: Review services -->
[ SERVICES NEED UPDATE ]
My code talks to the database via the methods listed bellow:

USER METHODS
* `getUser(userId)`
* `getUsers()`

EVENT METHODS
* `getEvent(eventId)`
* `getEvents(userId)`
* `createEvent(eventInput)`
* `subscribeToEvent(guestId, eventId)`
* `acceptGuestInEvent(guestId, status)`

SUBJECT METHODS
* `getSubject(subjectId)`
* `getSubjects(userId)`
* `createSubject(subjectInput)`

TASK METHODS
[ ADD TASK METHODS ]

1) `getUser(userId)` Method

*Description*: Get the user based on the user id.
*Return Value*: User object with the following properties: `id`, `name` and `email` of the user.

2) `getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Paginated object where there is a property called `items` with an array of User objects as value. It also has `currentPage` and `totalPages` properties.

3) `getEvent(eventId)` Method

*Description*: Get all an specific event based on the event id.  
*Return Value*: Event object including the following properties: `id`, `title`, `host`, `subject`, `date`, `createDate`, `address`, `maxNumberGuest`, `tasks`, `guestInEvents`, `totalCost`, `additionalInfo`, `eventStatus` and `pricePerGuest`.

4) `getEvents(userId)` Method

*Description*: Get all events for an specific user.  
*Return Value*: Paginated object where there is a property called `items` with an array of Event objects as value. It also has `currentPage` and `totalPages` properties.

5) `createEvent(eventInput)` Method

*Description*: Create a new event and store it on the database.  
*Parameters*:  Object that includes the following properties: `title`, `host`, `subject`, `additionalInfo`, `address`, `date`, `total_cost`, `maxNumberGuest`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| title          | String           | The event’s name |
| subject | string | Subject id |
| additionalInfo  | String     | Additional info (optional) |
| address         | String           | The event’s location |
| date        | Date | The event's date and time in the format  "14-05-2020 12:44:22" |
| totalCost | Number | The event's total cost|
| maxNumberGuest | Number | The max number of guests the event can support|
| tasks | Array | Array containing task objects including only the details (optional)| 

*Return Value*:  The created event id. 

6) `subscribeToEvent(guestId, eventId)` Method

*Description*: Add a guest to a particular event in the database, by adding the guest object to the `guestInEvents` array inside the Event object. The guest object includes and `id`, `name`, `email` and `status` for the guest, which starts as 'pending' and can be changed by the host to 'approved'.
*Parameters*: The event id and the guest id is the authed user id. More details about these properties:

*Return Value*:  This method doesn't return anything.

7) `acceptGuestInEvent(guestId, status)` Method

*Description*: Update the guest status for a particular event and guest object in the Event object.
*Parameters*: The guest id and the new status `approved`. 

*Return Value*:  This method doesn't return anything.

8) `getSubject(subjectId)`

*Description*: Get the subejct based on the subject id.
*Return Value*: Subject object with the following properties: `id`, `name`, `imageUrl` (optional), `detail` (optional) and `createdBy` with the creator id.

9) `getSubjects(userId)`

*Description*: Get all subjects for an specific user.  
*Return Value*: Paginated object where there is a property called `items` with an array of Subject objects as value. It also has `currentPage` and `totalPages` properties.

10) `createSubject(subjectInput)`

*Description*: Create a new subject and store it on the database.  
*Parameters*:  Object that includes the following properties: `name`, `imageUrl` (optional) and `detail` (optional). More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| name          | String           | The subject's name |
| imageUrl | FileList | Image url |
| detail  | String     | Additional info (optional) |

*Return Value*:  The created subject id. 

## How to install and use the frontend
<!-- TODO: Update install and use instructions -->
- Download the files, cd into root directory and run:
```bash
# Install dependencies
$ npm install

# Run the app
$ npm start
```  
[ ADD INSTRUCTIONS ON HOW TO RUN IT WITH THE BACKEND ]

## References and Resources

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Typescript Documentation](https://www.typescriptlang.org/docs/home)
- [React Icons](https://react-icons.netlify.com/#/icons/fa)
- [React Documentation](https://reactjs.org)
- [Redux Documentation](https://redux.js.org/)
- [MDN Documentation](https://developer.mozilla.org)

<!-- TODO: Add reference to images and icons -->
### Image and Icons References
| Image or icon | Author | Source |
|-----------------|------------------|-------------------|
| <img src="./src/assets/icons/logo.svg" alt="logo" width="80">            | Oksana Latysheva | [Noun Project](https://thenounproject.com/search/?q=event&i=1004866) |
| <img src="./src/assets/images/edgar-castrejon-bG5rhvRH0JM-unsplash.jpg" alt="two people cooking" width="150">  | Edgar Castrejon | [Unsplash](https://unsplash.com/photos/bG5rhvRH0JM) |
| <img src="./src/assets/images/spencer-davis-vJsj-hgOEG0-unsplash.jpg" alt="Top view of a table with food" width="150"> | Spencer Davis | [Unsplash](https://unsplash.com/photos/vJsj-hgOEG0) |
| <img src="./src/assets/images/kelsey-chance-ZrhtQyGFG6s-unsplash.jpg" alt="People around a counter laughing" width="150"> | Kelsey Chance | [Unsplash](https://unsplash.com/photos/ZrhtQyGFG6s) |