import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/App.css'

import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import AcceptInvite from './AcceptInvite'
import NavBar from './NavBar'
import Footer from './Footer'
import UserPage from './UserPage'
import { getUsers } from '../utils/api'

interface User {
  id: string;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<[User]>()
  
  useEffect(() => {
    getUsers()
      .then(res => setUsers(res))
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar isLogged={true} user={users && users[0].name} />
        <Switch>
          <Route exact path="/" component={CreateEvent} />
          <Route exact path="/users/:uid" component={UserPage} />
          <Route exact path="/events/:eid" component={EditEvent} />
          <Route exact path="/invite/:eid" component={AcceptInvite} />
        </Switch>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
