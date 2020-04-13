<!-- <p align="center"><a href="https://marinafroes.github.io/RDND-project2-WouldYouRather/#/login" target="_blank"><img src="./src/icons/mylogo.svg" alt="logo" title="logo" width="80"></a></p> -->
<h1 align="center">Event Planner Web App</h1>

This app aims to provide an easy way to plan events and invite friends sharing the costs with them.
<!-- TODO: Describe how it works -->

## Overview
<p align="center"><img src="./src/assets/images/Create Event.png" align="center" /></p>

## Tech stack

- React
- Redux
- Typescript
<!-- TODO: Add the rest of the tech stack -->
IN PROGRESS
 
## Frontend

- I built a React/Redux front end for the application using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

### Available data

There are 2 types of objects stored in the database:

* Users
* Events

#### Users

- Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| uid                 | String           | The user’s unique identifier |
| user_name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| events | Array | A list of ids of the events this user created|
| user_email      | String         |  The user’s e-email address |
| user_phone  | String | The user’s phone number (optional) |

#### Events

- Events include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| eid                  | String | The event’s unique identifier |
| event_name          | String           | The event’s name |
| description         | String           | The event’s description |
| address         | String           | The event’s location |
| date        | Date | The event's date |
| time        | Time | The event's time |
| total_cost | Number | The event's total cost|
| cost_per_guest | Number | The cost per each guest|
| max_guests | Number | The max number of guests the event can support|
| registrations | Object | Object where the keys are the ids of the guests who registered for the event and the value is the guest object |
| status | String | The event's status, which can be 'upcoming', 'finished' or 'cancelled' |
| organizer | String | The authed user id |
| timestamp | String | The time when the event was created |


### Services

My code talk to the database via the methods listed bellow:

* `_getUsers()`
* `_getEvents()`
* `_saveEvent(event)`
* `_registerToEvent(guest)`
* `_updateGuestStatus(action, eid, gid)`
<!-- TODO: _addUser(user) -->

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getEvents()` Method

*Description*: Get all of the existing events from the database.  
*Return Value*: Object where the key is the event’s id and the value is the event object.

3) `_saveEvent(event)` Method

*Description*: Save the event in the database.  
*Parameters*:  Object that includes the following properties: `event_name`, `description`, `address`, `date`, `time`, `total_cost`, `max_guests`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| event_name          | String           | The event’s name |
| description         | String           | The event’s description |
| address         | String           | The event’s location |
| date        | Date | The event's date |
| time        | Time | The event's time |
| total_cost | Number | The event's total cost|
| max_guests | Number | The max number of guests the event can support|

*Return Value*:  An object that has all the previous properties plus the following ones: `eid`, `status`, `cost_per_guest`, `organizer`, `timestamp` and `registrations`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| eid                  | String | The event’s unique identifier |
| status | String | The event's status, which can be 'upcoming', 'finished' or 'cancelled'. It starts as 'upcoming' |
| cost_per_guest | Number | The cost per each guest|
| organizer | String | The authed user id |
| timestamp | String | The time when the event was created |
| registrations | Object | Object where the keys are the ids of the guests who registered for the event and the value is the guest object. It starts as an empty object. |

4) `_registerToEvent(guest, eid)` Method

*Description*: Add a guest to a particular event in the database.
*Parameters*: The event id and the guest object that contains the following properties: `guest_name`, `guest_email` and `guest_phone`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| guest_name          | String           | The guest’s first name  and last name     |
| guest_email      | String         |  The guest’s e-email address |
| guest_phone  | String | The guest’s phone number (optional) |

*Return Value*:  An object that has all the previous properties plus the following ones: `gid` and `reg_status`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| gid                  | String | The guest’s unique identifier |
| reg_status | String | Registration status, which can be: 'pending', 'approved' or 'rejected'. It starts as 'pending'.|

5) `_updateGuestStatus(action, eid, gid)` Method

*Description*: Update the guest registration status for a particular event in the database.
*Parameters*: The event id, the guest id and the action, which can be: `approve` or `reject`. 

*Return Value*:  The event object with the `reg_status` property for the specific guest updated to `approved` or `rejected`.


## How to install and use the frontend

- Download the files, cd into root directory and run:
```bash
# Install dependencies
$ npm install

# Run the app
$ npm start
```  

## References and Resources

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Typescript Documentation](https://www.typescriptlang.org/docs/home)
- Icons: [React Icons](https://react-icons.netlify.com/#/icons/fa)
- [React Documentation](https://reactjs.org)
- [Redux Documentation](https://redux.js.org/)
- [MDN Documentation](https://developer.mozilla.org)
