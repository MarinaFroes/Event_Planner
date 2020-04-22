import React, {useState, useEffect} from 'react'
import '../styles/App.css'

import CreateEvent from './CreateEvent'
import EditEvent from './EditEvent'
import AcceptInvite from './AcceptInvite'
import NavBar from './NavBar'
import Footer from './Footer'
import { getUsers } from '../utils/data'

interface User {
  id: string,
  name: string,
  email: string
}

const App: React.FC = () => {
  const [users, setUsers] = useState<[User]>()
  
  useEffect(() => {
    getUsers().then(res => setUsers(res))
  }, [])

  return (
    <div className="App">
      <NavBar isLogged={true} user={users?.[0].name}/>
      <CreateEvent />
      {/* <EditEvent />
      <AcceptInvite /> */}
      <Footer />
    </div>
  );
}

export default App;
