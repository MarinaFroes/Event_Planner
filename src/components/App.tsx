import React from 'react'
import '../styles/App.css'

import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import NavBar from './NavBar'
import Footer from './Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <CreateEvent /> */}
      <EditEvent />
      <Footer />
    </div>
  );
}

export default App;
