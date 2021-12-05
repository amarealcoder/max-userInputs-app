import React, { useState } from 'react';
import Form from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (uName, uAge) => {
  
    setUsersList((prevState) => {
      return [...prevState, {username: uName, age: uAge, id: Math.random().toString()}];
    });
  }
  
  return (
    <div>
      <Form onAddUser={addUser} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
