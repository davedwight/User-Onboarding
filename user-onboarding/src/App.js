import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import User from './User';

const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}
const initialUsers = [];
const initialDisabled = false;

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
      setFormValues({
        ...formValues, [name]: value
      })
  }
  console.log('Form Values: ', formValues)

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    setUsers([
      newUser, ...users
    ])
  }
  console.log('Users: ', users);

  return (
    <div className="App">
      <Form values={formValues} change={inputChange} disabled={disabled} submit={formSubmit}/>
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;

// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.