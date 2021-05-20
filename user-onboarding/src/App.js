import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import User from './User';
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}
const initialUsers = [];
const initialDisabled = false;

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        console.log('Post response: ', res.data)
      })
      .catch(err => {
        console.log('Error: ', err)
      })
      .finally(setFormValues(initialValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
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
    postNewUser(newUser)
  }
  console.log('Users: ', users);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form 
        values={formValues} 
        change={inputChange} 
        disabled={disabled} 
        submit={formSubmit}
        errors={formErrors}
      />
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
