import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/App.css'

import * as authService from '../services/authServices'
import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import AcceptInvite from './AcceptInvite'
import NavBar from './core/NavBar'
import Footer from './core/Footer'
import ViewUser from './ViewUser'
import { setAuthedUserAction } from '../store/users/userActions'
import { handleGetEvents } from '../store/events/eventActions'

const App: React.FC = () => {
  
  const dispatch = useDispatch() 

  useEffect(() => {
    const tokens = authService.getTokens(window.location)
    if (tokens !== null) {
      dispatch(setAuthedUserAction(tokens))
      dispatch(handleGetEvents())
    }
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <NavBar/>
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
