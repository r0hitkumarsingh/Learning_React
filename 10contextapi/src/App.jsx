import React from 'react';
import UserProvider from './Components2/UserProvider';
import UserProfile from './Components2/UserProfile';
import UserActions from './Components2/UserActions';


function App() {


  return (
    <UserProvider>
      <div>
        <UserProfile />
        <UserActions />
      </div>
    </UserProvider>
  )
}

export default App
