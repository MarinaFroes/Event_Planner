import React from 'react'
import '../styles/App.css'

import CreateEvent from './CreateEvent'
import NavBar from './NavBar'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <CreateEvent />
      <Footer />
    </div>
  );
}

export default App;
