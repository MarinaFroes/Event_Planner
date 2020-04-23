import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css'

import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import AcceptInvite from './AcceptInvite'
import NavBar from './NavBar'
import Footer from './Footer'
import { getUsers } from '../utils/data'

interface User {
  id: string;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<[User]>()
  
  useEffect(() => {
    getUsers().then(res => setUsers(res))
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar isLogged={true} user={users?.[0].name} />
        <Route exact path="/" component={CreateEvent} />
        <Route exact path="/events/:eid" component={EditEvent} />
        <Route exact path="/invite/:eid" component={AcceptInvite} />
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
