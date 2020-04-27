import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/App.css'

import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import AcceptInvite from './AcceptInvite'
import NavBar from './core/NavBar'
import Footer from './core/Footer'
import ViewUser from './ViewUser'
import { saveAuthedUser, getUserName } from '../utils/authServices'

const App: React.FC = () => {
  const [user, setUser] = useState<string>('')
  
  useEffect(() => {
    window.location && saveAuthedUser(window.location)
    const authedUserName = getUserName()
    setUser(authedUserName)
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar isLogged={true} user={user} />
        <Switch>
          <Route exact path="/" component={CreateEvent} />
          <Route exact path="/users/:uid" component={ViewUser} />
          <Route exact path="/events/:eid" component={EditEvent} />
          <Route exact path="/invite/:eid" component={AcceptInvite} />
        </Switch>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
