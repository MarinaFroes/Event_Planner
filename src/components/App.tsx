import React from 'react'
import '../styles/App.css'

import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import AcceptInvite from './AcceptInvite'
import NavBar from './NavBar'
import Footer from './Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar isLogged={true} user="Marina"/>
      {/* <CreateEvent />
      <EditEvent /> */}
      <AcceptInvite />
      <Footer />
    </div>
  );
}

export default App;
