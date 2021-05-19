import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const initialValues = {
  name: 'sad',
  email: 'asdf',
  password: 'asdf',
  terms: false,
}

function App() {

  const [formValues, setFormValues] = useState(initialValues)

  const inputChange = (name, value) => {
      setFormValues({
        ...formValues, [name]: value
      })
  }
  console.log('Form Values: ', formValues)

  return (
    <div className="App">
      <Form values={formValues} change={inputChange}/>
    </div>
  );
}

export default App;

// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.