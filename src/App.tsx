import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/App.css'

import * as authService from './services/authServices'
import CreateEvent from './pages/CreateEvent'
import EditEvent from './pages/EditEvent'
import AcceptInvite from './pages/AcceptInvite'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ViewUser from './pages/ViewUser'
import { setAuthedUserAction } from './redux/actions/userActions'
import { handleGetSubjects } from './redux/actions/subjectActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const tokens = authService.getTokens(window.location)
    if (tokens !== null) {
      dispatch(setAuthedUserAction(tokens))
      dispatch(handleGetSubjects())
    }
  }, [dispatch])

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={CreateEvent} />
          <Route exact path='/users/:uid' component={ViewUser} />
          <Route exact path='/events/:eid' component={EditEvent} />
          <Route exact path='/invite/:eid' component={AcceptInvite} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
