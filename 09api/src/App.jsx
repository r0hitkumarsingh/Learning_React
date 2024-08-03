import { useEffect , useState } from 'react'
import {getRandomUser} from './api/index.js'
import './App.css'

import UserCard from "./components/UserCard.jsx";

function App() {
  const [UserData, setUserData] = useState(null)

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]))
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]))
  }
  
  return (
    <>
    <div>
      {UserData && <UserCard data={UserData} />}
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={refresh}>Refresh User</button>
    </div>
    
    </>
  )
}

export default App
